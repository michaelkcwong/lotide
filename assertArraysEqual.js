const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    return true;
  }
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
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
//assertArraysEqual([1, 2], [1]);
assertArraysEqual([], []);
assertArraysEqual([12], [1]);