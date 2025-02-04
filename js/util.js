function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

function createId(min, max) {
  let currentValue = min - 1;
  return function addValue() {
    if (currentValue <= max) {
      currentValue++;
    }
    return currentValue;
  };
}

export {getRandomInteger, createId};
