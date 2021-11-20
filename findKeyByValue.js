//A function that takes in an object and a value and returns the first key that corresponds to that value.

const findKeyByValue = function(obj, value) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

