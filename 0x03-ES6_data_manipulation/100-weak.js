const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let endpointCalls = weakMap.get(endpoint) || 0;
  endpointCalls += 1;
  weakMap.set(endpoint, endpointCalls);

  if (endpointCalls >= 5) {
    throw new Error('Endpoint load is high');
  }
}

module.exports = {
  weakMap,
  queryAPI,
};
