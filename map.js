const words = ['ground', 'control', 'to', 'major', 'tom'];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// tests
const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word.length);
const results3 = map(words, (word) => word + 'ly');

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

console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']), true);
console.log(assertArraysEqual(results2, [6, 7, 2, 5, 3]), true);
console.log(
  assertArraysEqual(results3, [
    'groundly',
    'controlly',
    'toly',
    'majorly',
    'tomly',
  ]),
  true
);
module.exports = map;
