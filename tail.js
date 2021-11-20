//A function that takes in an array and returns everything except the first element of the array.

const tail = function(list) {
  if (list) {
    return list.slice(1);
  } else {
    return undefined;
  }
};

module.exports = tail;

