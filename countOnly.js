const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) { //Start by declaring the function.
  const results = {};

  for (const item of allItems) { //Add code to loop over all the items in the array and print them to the console.
// inside the loop, 
// increment the counter for each item:
//   set a property with that string key to:
//     the value that was already there (or zero if nothing there) with 1 added to it.
    if (itemsToCount[item]) { //Add an if condition to only increment our count in results if the item is found in the itemsToCount object.
      if (results[item]) {
        results[item] += 1; 
      } else {
        results[item] = 1;
      }
    }
  }
  console.log(results);
  return results;
};

const firstNames = [ //Write the initial test code below the definition of your function.
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
//Confirm that all our tests are passing




