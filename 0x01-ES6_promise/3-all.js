import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((resp) => {
      const { body } = resp[0];
      const { firstName, lastName } = resp[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
// export default function handleProfileSignup() {
//   return Promise.all([uploadPhoto(), createUser()])
//     .then().catch();
// }
