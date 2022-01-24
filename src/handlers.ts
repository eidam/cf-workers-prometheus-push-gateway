import prom from 'promjs';
import parsePrometheusTextFormat from 'parse-prometheus-text-format';
import snappyjs from 'snappyjs';
import { prometheus } from "./compiled-protobuf.mjs";
import { getDoStub, normalizeMetricName } from './helpers';
import { PromMetric } from './types';

export async function handleGetMetrics(request, env) {
    const url = new URL(request.url)
    const stub = await getDoStub(env)
    const res = await stub.fetch(`http://internal/metrics`)
    const metrics = await res.json() as Record<string, PromMetric>

    if (url.searchParams.get("format") === "json" || request.headers.get("accept").includes("application/json")) {
        return new Response(JSON.stringify(metrics), {
            headers: {
                "content-type": "application/json",
            }
        })
    }
    const registry = prom();
    Object.keys(metrics).map(metric => {
        // @ts-ignore
        const m = registry.create(metrics[metric].type, metrics[metric].name, metrics[metric].help)
        metrics[metric].metrics.map(x => m.add(x.value, x.labels))
    })

    return new Response(registry.metrics())
}

export async function handlePostMetrics(request, env) {
    const body = await request.text()
    const metrics = parsePrometheusTextFormat(body)

    const filteredMetrics = metrics.filter(m => ["COUNTER", "GAUGE"].includes(m.type))

    const stub = await getDoStub(env)
    const res = await stub.fetch(`http://internal/metrics`, {
        method: "POST",
        body: JSON.stringify(filteredMetrics)
    })

    return res
}

export async function handlePatchMetric(request, env) {
    const {metric} = request.params
    const metricName = normalizeMetricName(metric)
    const url = new URL(request.url)
    const labels = Object.fromEntries(url.searchParams)

    const stub = await getDoStub(env)
    const res = await stub.fetch(`http://internal/metrics`, {
        method: "POST",
        body: JSON.stringify([{
            name: metricName,
            type: "counter",
            metrics: [
                {
                    labels,
                    value: 1
                }
            ]
        }])
    })

    return res

}

export async function handleDeleteMetric(request, env) {
    const stub = await getDoStub(env)
    return await stub.fetch(request)
}

export async function handleCronTrigger(env) {
    const stub = await getDoStub(env)
    const res = await stub.fetch("http://internal/metrics")
    const metrics = await res.json() as Record<string, PromMetric>
  
    const timeseries = []
    const timestamp = Date.now()
    Object.keys(metrics).map(x => {
        metrics[x].metrics.map(sample => {
          timeseries.push({
            labels: [
              {name: "__name__", value: metrics[x].name},
              ...Object.keys(sample.labels).map(x => {
                  return {name: x, value: sample.labels[x]}
              })
            ],
            samples: [
              {timestamp, value: sample.value}
            ]
          })
        })
    })

    const payload = {timeseries}
  
    // Verify the payload if necessary (i.e. when possibly incomplete or invalid)
    const errMsg = prometheus.WriteRequest.verify(payload)
    if (errMsg)
      throw Error(errMsg)
  
    const message = prometheus.WriteRequest.create(payload)
    const buffer = prometheus.WriteRequest.encode(message).finish()
    const compressed = snappyjs.compress(buffer)
  
    const promEndpoint = env.SECRET_PROM_ENDPOINT
    const promUser = env.SECRET_PROM_USER
    const promPassword = env.SECRET_PROM_TOKEN
  
    const promRes = await fetch(promEndpoint, {
        method: "POST",
        body: compressed,
        headers: {
            "Authorization": 'Basic ' + btoa(promUser + ":" + promPassword),
            "Content-Encoding": "snappy",
        }
    })

    return new Response("ok")
}
