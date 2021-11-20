//A function that takes in 2 objects and return true if they are equal and false otherwise.

const eqObjects = function(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);

  if (key1.length !== key2.length) {
    return false;
  }

  for (let key of key1) {
    if (Array.isArray(object1[key] !== Array.isArray(object2[key]))) {
      return false;
    } else {
      return true;
    }
  }
};

module.exports = eqObjects;

