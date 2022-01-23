import { Router } from 'itty-router'

import { handleCronTrigger, handleDeleteMetric, handleGetMetrics, handlePatchMetric, handlePostMetrics } from './handlers';
export {MetricsDurableObject} from "./metrics-durable-object"

export default {
  async fetch(request, env, ctx) {
    const router = Router()

    router.get("/metrics", (request, env) => handleGetMetrics(request, env))
    router.post("/metrics", (request, env) => handlePostMetrics(request, env))
    // PATCH /metrics/$metric_name?label1=value1&label2=value2
    router.patch("/metrics/:metric", (request, env) => handlePatchMetric(request, env))
    router.delete("/metrics/:metric", (request, env) => handleDeleteMetric(request, env))

    //router.get("/test-cron-trigger", (request, env) => this.scheduled(request, env))

    // 404 for root, 405 for the rest
    router.get("*", () => new Response(null, {status: 404}))
    router.all("*", () => new Response(null, {status: 405}))

    return router.handle(request, env)
  },

  async scheduled(event, env, ctx) {
    await handleCronTrigger(env)

    // return response for /test-cron-trigger 
    return new Response("ok")
  }
}

