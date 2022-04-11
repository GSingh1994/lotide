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

const eqObjects = (object1, object2) => {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      //check if keys are typeof array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      }
    }
  }
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(
      expected
    )}`;
  }
  return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
};

console.log(assertObjectsEqual({ a: '1', b: '2' }, { a: '1', b: '2' }));

module.exports = assertObjectsEqual;
