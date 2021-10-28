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

const assertObjectsEqual = function(actual, expected) {
    if (eqObjects(actual, expected)) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };


  assertObjectsEqual({a: '1', b: '2'}, {b: '2', a: '1'});
