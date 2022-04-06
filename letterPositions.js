const letterPositions = (sentence) => {
  const results = {};
  const splitSentence = sentence.split(' ').join('');
  for (const letter in splitSentence) {
    let currentLetter = splitSentence[letter]; //get current letter of loop
    if (results[currentLetter]) {
      results[currentLetter].push(Number(letter));
    } else {
      results[currentLetter] = [Number(letter)];
    }
  }
  return results;
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

const result1 = letterPositions('lighthouse in the house');
console.log(assertArraysEqual(result1['h'][0], 3));
console.log(eqArrays(result1['h'][0], 3));
