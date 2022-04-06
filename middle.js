const middle = (array) => {
  let finalArray = [];
  if (array.length % 2 !== 0 && array.length > 2) {
    finalArray.push(array[(array.length + 1) / 2 - 1]);
  } else if (array.length % 2 === 0 && array.length > 2) {
    finalArray.push(array[array.length / 2 - 1]);
    finalArray.push(array[array.length / 2]);
  }
  return finalArray;
};

// TEST/ASSERTION FUNCTIONS
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

// TEST CODE
console.log(assertArraysEqual(middle([1]), []));
console.log(eqArrays(middle([1]), []));

console.log(assertArraysEqual(middle([1, 2]), []));
console.log(eqArrays(middle([1, 2]), []));

console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(eqArrays(middle([1, 2, 3]), [2]));

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(eqArrays(middle([1, 2, 3, 4]), [2, 3]));
