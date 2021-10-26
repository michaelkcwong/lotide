const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let results = {};
let stringCount = string.split(" ");
for (const letter of stringCount) {
  if (results[letter]) {
    results[string] += 1;
  } else {
    results[letter] = 1;
  }
}
return results;
}

console.log(countLetters("lighthouse in the house"));