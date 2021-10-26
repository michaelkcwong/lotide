const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let results = {};

for (const letter of string) {
  if (results[string]) {
    results[string] += 1;
  } else {
    results[string] = 1;
  }
}
return results;
}

console.log(countLetters("lighthouse in the house"));