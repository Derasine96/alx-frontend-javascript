import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([
    uploadPhoto(),
    createUser(),
  ])
    .then((results) => {
      const [photoResult, userResult] = results;
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch((error) => {
      console.error('Signup system offline', error);
    });
}
