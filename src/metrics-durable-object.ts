import { Router } from 'itty-router'
import { normalizeLabels, normalizeMetricName, normalizeMetricType } from './helpers'
import { PromMetric } from './types'

export class MetricsDurableObject {
  state: DurableObjectState
  storage: DurableObjectStorage
  router: Router<any>
  metrics: Map<string, PromMetric>

  constructor(state: DurableObjectState) {
    this.state = state
    this.storage = state.storage

    this.state.blockConcurrencyWhile(async () => {
      this.metrics = await this.storage.list()

      const router = Router()
      router.get('/metrics', (request) => this.handleGetMetrics(request))
      router.post('/metrics', (request) => this.handlePostMetrics(request))
      router.delete('/metrics/:metric', (request) => this.handleDeleteMetrics(request)) // :metric can be __all 

      router.all('*', request => new Response(null, {status: 405}))
      this.router = router
    })
  }

  async fetch(request: Request) {
    try {
      return this.router.handle(request)
    } catch (e) {
      return new Response(e.toString(), {status: 500})
    }
  }
  
  async handleGetMetrics(request) {
    return new Response(JSON.stringify(Object.fromEntries(this.metrics)))
  }

  async handlePostMetrics(request) {
    const metrics = await request.json()
    metrics.map(metric => 
      this.ingestMetric(metric)
    )

    return new Response("ok")
  }

  async handleDeleteMetrics(request) {
    const {metric} = request.params 
    const metricName = normalizeMetricName(metric)

    const url = new URL(request.url)
    const labels = normalizeLabels(Object.fromEntries(url.searchParams))

    // __all is reserved to deleted all metrics
    if (metricName === "__all") {
      this.metrics = new Map()
      this.storage.deleteAll()
    } else {
      // delete metric if no labels specified
      if (JSON.stringify(labels) === "{}") {
        this.metrics.delete(metricName)
        this.storage.delete(metricName)
      } else {
        // cleanup data for matching labels only
        let newMetric = this.metrics.get(metricName)
        newMetric.metrics = newMetric.metrics.filter(x => !Object.keys(labels).every(y => labels[y] === x.labels[y]))
        
        this.storage.put(metricName, newMetric)
        this.metrics.set(metricName, newMetric)
      }
    }

    return new Response(`ok`)
  }

  async ingestMetric(newMetricData) {
    // normalize metric name
    const metricName = normalizeMetricName(newMetricData.name)
    let metricState = this.metrics.get(metricName)

    // normalize and sort labels
    newMetricData.metrics = newMetricData.metrics.map(metric => {
      const orderedLabels = metric.labels ? normalizeLabels(metric.labels) : {}
      return {value: parseFloat(metric.value), labels: orderedLabels}
    })

    // if the metric already exist, loop through and increment
    if (metricState) {
      newMetricData.metrics.map(metric => {
        const existing = metricState.metrics.findIndex(ms => JSON.stringify(ms.labels) === JSON.stringify(metric.labels))

        if (existing > -1) {
          metricState.metrics[existing].value += parseFloat(metric.value)
        } else {
          metricState.metrics.push({value: parseFloat(metric.value), labels: metric.labels})
        }
      })
    } else {
      // create a new metric record
      metricState = {...newMetricData, type: normalizeMetricType(newMetricData.type)}
    }

    // normalize metric type
    if (newMetricData.type) {
      metricState.type = normalizeMetricType(newMetricData.type)
    } 
    
    if (newMetricData.help) {
      metricState.help = newMetricData.help
    }

    this.storage.put(metricName, metricState)
    this.metrics.set(metricName, metricState)
  }
}
