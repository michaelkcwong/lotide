//A function that takes in an array and callback and returns a slice of the array based on the criteria specified in the callback.

const takeUntil = function(array, callback) {
  let outPut = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      outPut = array.slice(0,array.indexOf(array[i]));
    }
  }
  return outPut;
};

module.exports = takeUntil;


