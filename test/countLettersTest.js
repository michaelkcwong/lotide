const countLetters = require('../countLetters');
const assertEqual = require('../assertEqual');

console.log(countLetters("lighthouse in the house"));
console.log(assertEqual(countLetters("LHL").L, 2));