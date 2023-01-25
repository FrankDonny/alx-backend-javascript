export default function handleResponseFromAPI(promise) {
  promise.then((response) => { // eslint-disable-line
    console.log('Got a response from the API');
    return { status: 200, body: 'success' };
  }).catch((error) => new Error()); // eslint-disable-line
}
