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
  if(Object.keys(object1.length) !== Object.keys(object2.length)) {
    return false
  }
  for(let key of object1) {
    
  }
};

/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

console.log(assertEqual(eqObjects()));
*/

for (let i = 0; i < array1.length; i++) {
  if (array1[i] !== array2[i]) {
    return false;
  }
}
return true;