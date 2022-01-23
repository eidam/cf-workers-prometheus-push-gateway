export interface PromMetric {
    name: string,
    type: "counter" | "gauge" | "histogram",
    help: string,
    metrics: Array<{
        value: number,
        labels: Record<string, string>,
    }>
}