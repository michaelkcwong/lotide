//It will take in two parameters as well:
//The array to work with
//The callback (which Lodash calls "predicate")
//The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.
//To keep things simple, the callback should only be provided one value: The item in the array.
//Since takeUntil returns arrays, the best assertion function to use would be assertArraysEqual to compare its return value against an expected array.

//A function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.

const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let outPut = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) { //callback will take thoe elements which hold nuntrue to the condition
      outPut = array.slice(0,array.indexOf(array[i]));
    }
  }
  return outPut;
};

module.exports = takeUntil;


