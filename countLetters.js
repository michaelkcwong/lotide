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
