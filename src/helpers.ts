export const getDoStub = (env) => {
    const id = env.DO_METRICS.idFromName('global')
    return env.DO_METRICS.get(id)
}

export const normalizeMetricType = (name) => {
    return name.toLowerCase()
}

export const normalizeMetricName = (name) => {
    return name.match(/[a-zA-Z_:][a-zA-Z0-9_:]*/g).join("").toLowerCase()
}

export const normalizeMetricLabelName = (name) => {
    return name.match(/[a-zA-Z_][a-zA-Z0-9_]*/g).join("").toLowerCase()
}

export const normalizeLabels = (labels) =>  {
    return Object.keys(labels).sort().reduce(
        (obj, key) => { 
            obj[normalizeMetricLabelName(key)] = labels[key]; 
                return obj;
            }, 
        {}
    );
}