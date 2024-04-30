export default function cleanSet(set, startString) {
  const strList = [];

  if (!(set instanceof Set) || !startString || typeof startString !== 'string') {
    return '';
  }

  set.forEach((value) => {
    if (value && value.startsWith(startString)) {
      strList.push(value.slice(startString.length));
    }
  });
  return strList.join('-');
}
