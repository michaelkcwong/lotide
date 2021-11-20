//A function that takes in 2 arrays and returns true if the arrays are equal and false otherwise.

const assertEqual = require('./assertEqual');

const eqArrays = function(array1, array2) {

  array1 = array1.flat();
  array2 = array2.flat();

  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;



