const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual')

const flatten = function(nestedArray) {
  let flattened = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      for (let j = 0; j < nestedArray[i].length; j++) {
        flattened.push(nestedArray[i][j]);
      }
    } else {
      flattened.push(nestedArray[i]);
    }
  }
  return flattened;
};

module.exports = flatten;

