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

const without = function(sourceArray, itemToRemove) {
let newSet = new Set(itemToRemove);
let remove = [];
for (let i = 0; i < sourceArray.length; i++) {
  if (!newSet.has(sourceArray[i])) {
    remove.push(sourceArray[i]);
  }
}
return remove;
};

console.log(without([1, 2, 3], [1])) 
console.log(without(["1", "2", "3"], [1, 2, "3"]))
