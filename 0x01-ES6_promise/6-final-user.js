import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => [
      { status: 'fulfilled', value: values[0] },
      { status: 'fulfilled', value: values[1] },
    ])
    .catch((errors) => [
      { status: 'rejected', value: errors[0] },
      { status: 'rejected', value: errors[1] },
    ]);
}
