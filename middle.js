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

const middle = function(array) {
  if (array.length <= 2) // if array length is <= 2 return empty array
    return [];
  if (array.length % 2 === 0) { // if array length is even return an array containing the two elements in the middle
    return [array[Math.floor((array.length - 1) / 2)],array[array.length / 2]];
  } else {
    return [array[Math.floor(array.length / 2)]]; //if array length is odd return an array containing single middle elemnent
  }
};


console.log(assertArraysEqual(middle([1]), ([])));
console.log(assertArraysEqual(middle([1, 2]), ([])));
console.log(assertArraysEqual(middle([1, 2 ,3]), ([2])));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), ([3])));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));