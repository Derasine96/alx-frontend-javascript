export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('API response received');
      } else {
        reject(new Error('API response failed'));
      }
    }, 2000);
  });
}
