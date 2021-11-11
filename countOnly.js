const assertEqual = require('./assertEqual')

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) { //Start by declaring the function.
  const results = {};

  for (const item of allItems) { //Add code to loop over all the items in the array and print them to the console.
// inside the loop, 
// increment the counter for each item:
// set a property with that string key to:
// the value that was already there (or zero if nothing there) with 1 added to it.
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

module.exports = countOnly;


