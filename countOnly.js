//A function that takes in a collection of items and returns a specific subset of those items.

const countOnly = function(allItems, itemsToCount) { 
  const results = {};

  for (const item of allItems) { 
    if (itemsToCount[item]) { 
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


