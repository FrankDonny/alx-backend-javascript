import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const arr = [];
  try {
    const [sign, upload] = await Promise.all([signUpUser(firstName, lastName),
      uploadPhoto(fileName)]);
    if (sign) {
      arr.push({ status: 'success', value: `${sign}` });
    } else {
      arr.push({ status: 'success', value: `${upload}` });
    }
  } catch (error) {
    arr.push({ status: 'failed', value: `${error}` });
  }
}
