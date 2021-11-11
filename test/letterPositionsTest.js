
const letterPositions = require('../letterPositions');
const assertArraysEqual = require('../assertArraysEqual');


console.log(assertArraysEqual(letterPositions("hello").h, [0]));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("hello").l, [2,3]));
console.log(assertArraysEqual(letterPositions("hello").o, [4]));
console.log(letterPositions("hello").h);
console.log(letterPositions("hello").e);
console.log(letterPositions("hello").l);
console.log(letterPositions("hello").l);
console.log(letterPositions("hello").o);
console.log(letterPositions("hello"));