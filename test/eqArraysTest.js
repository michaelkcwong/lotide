const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([2, 1, 3], [1, 2, 3]), true);
assertEqual(eqArrays([2, 1, 3], [1, 2, 3]), false);
assertEqual(eqArrays(["1", "2", 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 0, 2], [5, 3, 1]), true);