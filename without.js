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

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const without = (array, itemToRemove) => {
  let result = [];
  for (let arr of array) {
    if (arr !== itemToRemove[0]) {
      result.push(arr);
    }
  }
  console.log(result);
  console.log(assertArraysEqual(array, itemToRemove));
  console.log(eqArrays(array, itemToRemove));
};

const words = ['hello', 'world', 'lighthouse'];
without(words, ['lighthouse']);

module.exports = without;
