//A function that takes in an array and returns middle most element of the array.

const middle = function(array) {
  if (array.length <= 2)
    return [];
  if (array.length % 2 === 0) {
    return [array[Math.floor((array.length - 1) / 2)],array[array.length / 2]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};

module.exports = middle;
