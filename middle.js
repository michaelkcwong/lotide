const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) {
  if (array.length <= 2) // if array length is <= 2 return empty array
    return [];
  if (array.length % 2 === 0) { // if array length is even return an array containing the two elements in the middle
    return [array[Math.floor((array.length - 1) / 2)],array[array.length / 2]];
  } else {
    return [array[Math.floor(array.length / 2)]]; //if array length is odd return an array containing single middle elemnent
  }
};

module.exports = middle;
