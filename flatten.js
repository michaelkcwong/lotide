//A function that takes in an array that contains elements including nested array of elements and returns a flattened version of the array.

const flatten = function(nestedArray) {
  let flattened = [];
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i])) {
      for (let j = 0; j < nestedArray[i].length; j++) {
        flattened.push(nestedArray[i][j]);
      }
    } else {
      flattened.push(nestedArray[i]);
    }
  }
  return flattened;
};

module.exports = flatten;

