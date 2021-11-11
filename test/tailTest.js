const tail = require('../tail');
const assertEqual = require('../assertEqual')


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);
assertEqual(tail([5,6,7]).toString(), [6,7].toString());
assertEqual(tail([1,2,3,4,5,6]));