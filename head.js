//A function that takes in an array and returns the first element in the array.

const assertEqual = require('./assertEqual')

const head = function(list) {
  if (list) {
    return list[0];
  } else {
    return undefined;
  }
};

module.exports = head;