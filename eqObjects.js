const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (let key of key1) {
    if (Array.isArray(object1[key] !== Array.isArray(object2[key]))) {
      return false;
    } else {
      return true;
    }
  }
};

//const array1 = Array.isArray(object1); Can use variable to make it less messy
//const array2 = Array.isArray(object2);

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

//First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
  
//After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array.
  
//Within our loop, we can use Array.isArray against both values to see if array comparisons need to be made.
//If both values are indeed arrays: pass them to eqArrays and ensure that it returns true.
//Otherwise (else): assume that they are primitives and continue to use === to compare the two values.

//Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
//As soon as there is not a match, we can return false

//Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)

//Tests
//Primitives as Values
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false); // => false

//Arrays as Values
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(ab, abc), false); // => false


