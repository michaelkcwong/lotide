//A function that takes in a sentence and returns a count of each of the letters in the sentence.

const assertEqual = require('./assertEqual');

const countLetters = function(string) {
  const results = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;
