const tail = require('../tail');
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [6,7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6,7]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});


// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);
// assertEqual(tail([5,6,7]).toString(), [6,7].toString());
// assertEqual(tail([1,2,3,4,5,6]));