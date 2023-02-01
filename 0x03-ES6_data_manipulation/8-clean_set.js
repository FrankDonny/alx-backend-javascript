export default function cleanSet(set, startString) {
  const cleanedValues = [];
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      cleanedValues.push(value.slice(startString.length));
    }
  }
  return cleanedValues.join('-');
}
