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

module.exports = flatten;
