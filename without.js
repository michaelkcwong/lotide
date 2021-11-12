//A function that takes in a source array and an itemsToRemove arrays and returns only the items from the source array that are not in the itemsToRemove array.

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual')

const without = function(sourceArray, itemToRemove) {
  let newSet = new Set(itemToRemove);
  let remove = [];
  for (let i = 0; i < sourceArray.length; i++) {
    if (!newSet.has(sourceArray[i])) {
      remove.push(sourceArray[i]);
    }
  }
  return remove;
};

module.exports = without;