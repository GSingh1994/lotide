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

module.exports = letterPositions;
