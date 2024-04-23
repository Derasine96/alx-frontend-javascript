export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload])
    .then((data) => {
     /* console.log(data);*/
      return data;
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
}
