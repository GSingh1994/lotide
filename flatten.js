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

const flatten = (array) => {
  let finalResult = [];
  //loop outer array
  for (let arr of array) {
    if (Array.isArray(arr)) {
      //loop inner array
      for (let a of arr) {
        finalResult.push(a);
      }
    } else {
      finalResult.push(arr);
    }
  }
  return finalResult;
};
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(
  assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
);
console.log(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]));
