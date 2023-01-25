export default function uploadPhoto(stringName) {
  const p = new Promise((resolve, reject) => {
    const error = new Error(`${stringName} cannot be processed`);
    reject(error);
  });
  return p;
}
