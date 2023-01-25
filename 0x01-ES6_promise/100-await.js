import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const obj = {};
  try {
    const retValPhoto = await uploadPhoto();
    obj.photo = retValPhoto;
  } catch (error) {
    obj.photo = null;
  }

  try {
    const retValUser = await createUser();
    obj.user = retValUser;
  } catch (error) {
    obj.user = null;
  }
  return obj;
}
