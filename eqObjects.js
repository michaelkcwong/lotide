const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1); 
  const key2 = Object.keys(object2);

//First, use the Object.keys function on both objects and compare their lengths. If not equal, there's no point in going further: return false
  if(key1.length !== key2.length) { 
    return false;
  }
//After that check, loop through the keys returned by Object.keys for one of the objects (not both). Use for..of since the keys are an array. 
const array1 = Array.isArray(object1);
const array2 = Array.isArray(object1);

//Inside our loop, compare both objects' values for that key. Use === to ensure that the types are the same!
//As soon as there is not a match, we can return false

for(let key of key1) {
  if(array1[key] !== array2[key2]) {
    return false
  } else {
    return true
  }
  }
};

//Our control flow will therefore only get to the end of the loop if all the keys matched. We can and should thus return true at the end (after the loop)


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertEqual(eqObjects(ab, abc), false); // => false