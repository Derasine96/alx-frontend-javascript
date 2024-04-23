export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    if (promise) {
      resolve({
        status: 200,
        body: 'success',
      });
    } else {
      reject(new Error());
    }
  })
    .then((response) => {
      console.log('Got a response from the API');
      return response;
    })
    .catch((error) => {
      throw error;
    });
}
