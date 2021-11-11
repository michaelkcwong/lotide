const findKey = require('../findKey');
const assertEqual = require('../assertEqual');


const objects = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

console.log(findKey(objects, x => x.stars === 1));
assertEqual(findKey(objects, x => x.stars === 1), "Blue Hill");
assertEqual(findKey(objects, x => x.stars === 2), "Blue Hill");