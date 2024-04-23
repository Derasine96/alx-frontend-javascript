export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      throw error;
    });
}
