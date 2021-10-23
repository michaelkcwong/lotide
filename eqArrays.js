const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true;
};


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([2, 1, 3], [1, 2, 3]), true);
assertEqual(eqArrays([2, 1, 3], [1, 2, 3]), false);
assertEqual(eqArrays(["1", "2", 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 0, 2], [5, 3, 1]), true);
