const takeUntil = (array, callback) => {
  const results = [];
  for (const item of array) {
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
const data2 = [
  "I've",
  'been',
  'to',
  'Hollywood',
  ',',
  "I've",
  'been',
  'to',
  'Redwood',
];
const results2 = takeUntil(data2, (x) => x === ',');

//testing function
const assertArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
    }
  }
  return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
};

// tests
console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]), true);
console.log(
  assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']),
  true
);

module.exports = takeUntil;
