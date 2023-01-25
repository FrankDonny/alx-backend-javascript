import { createUser, uploadPhoto } from './utils';

export default async function handleProfileSignup() {
  try {
    const [res1, res2] = await Promise.all([uploadPhoto(), createUser()]);
    return console.log(res1.body, res2.firstName, res2.lastName);
  } catch (error) {
    return console.log('Signup system offline');
  }
}

// export default function handleProfileSignup() {
//   return Promise.all([uploadPhoto(), createUser()])
//     .then().catch();
// }
