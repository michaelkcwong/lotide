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

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([3, 2, 1], [1, 2, 3]);
assertArraysEqual([1, 0, 2], [5, 3, 1]);
assertArraysEqual([1, 0], [5, 3, 1]);
assertArraysEqual([1, 0, 2], [5, 1]);
assertArraysEqual(["k"], []);
assertArraysEqual([1, 2], [2]);
assertArraysEqual([1, 2], [3]);
assertArraysEqual([], [1, 2]);
assertArraysEqual([], ["k"]);
assertArraysEqual([], [1]);
assertArraysEqual([1, 2], [1]);
assertArraysEqual([], []);
assertArraysEqual([12], [1]);