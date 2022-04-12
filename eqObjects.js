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
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      //check if keys are typeof array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        return eqArrays(object1[key], object2[key]);
      }
    }
  }
  return Object.keys(object1).length === Object.keys(object2).length;
};

module.exports = eqObjects;
