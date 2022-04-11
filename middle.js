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
module.exports = middle;
