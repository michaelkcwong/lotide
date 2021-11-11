const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([3, 2, 1], [1, 2, 3]);
assertArraysEqual([1, 0, 2], [5, 3, 1]);
assertArraysEqual([1, 0], [5, 3, 1]);
assertArraysEqual([1, 0, 2], [5, 1]);
assertArraysEqual(["k"], []);
assertArraysEqual([1, 2], [2]);
assertArraysEqual([1, 2], [3]);
assertArraysEqual([], [1, 2]);
assertArraysEqual([], ["k"]);
assertArraysEqual([], [1]);
assertArraysEqual([1, 2], [1]);
assertArraysEqual([], []);
assertArraysEqual([12], [1]);