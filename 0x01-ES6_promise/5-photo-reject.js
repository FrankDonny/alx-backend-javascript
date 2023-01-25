export default function uploadPhoto(stringName) {
  const p = new Promise((reject) => {
    if (stringName) {
      const error = new Error(`${stringName} cannot be processed`);
      reject(error);
    }
  });
  return p;
}
