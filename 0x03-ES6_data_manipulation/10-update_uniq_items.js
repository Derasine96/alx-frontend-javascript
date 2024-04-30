export default function updateMapValuesIfOne(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  const entries = Array.from(map.entries());

  const updatedMap = new Map();

  for (const [key, value] of entries) {
    if (value === 1) {
      map.set(key, 100);
      updatedMap.set(key, 100);
    } else {
      updatedMap.set(key, value);
    }
  }

  return updatedMap;
}
