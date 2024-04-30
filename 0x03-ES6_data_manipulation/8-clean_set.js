export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || !startString || typeof startString !== 'string') {
    return '';
  }

  const filteredSet = new Set([...set].filter((value) => value.startsWith(startString)));

  const cleanedElements = Array.from(filteredSet).map((value) => value.slice(startString.length));

  return cleanedElements.join('-');
}
