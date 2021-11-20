//Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

//A function that takes in an object and a value and returns the first key that corresponds to that value.

const assertEqual = require('./assertEqual')

const findKeyByValue = function(obj, value) { //function which takes in an object and a value
  const keys = Object.keys(obj); //Using Object.keys to search through object keys
  for (let key of keys) { //for of loop to scan the object
    if (obj[key] === value) { //return the first key which contains the given value
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

