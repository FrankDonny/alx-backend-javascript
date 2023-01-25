export default function getFullResponseFromAPI(success) {
  const p = new Promise((resolver, reject) => {
    if (success === true) {
      resolver({ status: 200, body: 'Success' });
    } else {
      const error = new Error('The fake API is not working currently');
      reject(error);
    }
  });

  return p;
}
