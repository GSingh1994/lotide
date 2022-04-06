//TESTING FUNCTION
const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = (sentence) => {
  const splitSentence = sentence.split(' ').join('');
  const totalLetters = {};
  for (const letter of splitSentence) {
    if (totalLetters[letter]) {
      totalLetters[letter] += 1;
    } else {
      totalLetters[letter] = 1;
    }
  }
  return totalLetters;
};

//TESTS
const result1 = countLetters('LHL');

assertEqual(result1['L'], 2);

const result2 = countLetters('lighthouse in the house');
assertEqual(result2['h'], 4);
