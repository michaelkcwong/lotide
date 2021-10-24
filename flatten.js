const eqArrays = function(array1, array2) {
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


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const flatten = function(nestedArray) {
  let flattened = [];
  for (let i = 0; i < nestedArray.length; i++ ) {
    if (Array.isArray(nestedArray[i])) {
      for (let j = 0; j <nestedArray[i].length; j++) {
        flattened.push(nestedArray[i][j]);
      }
      } else {
        flattened.push(nestedArray[i]);
      }
    }
    return flattened;
  };


console.log(flatten([1, 2, [3, 4], 5, [6]]));