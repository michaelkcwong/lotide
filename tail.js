const assertEqual = require('./assertEqual')

const tail = function(list) {
  if (list) {
    return list.slice(1);
  } else {
    return undefined;
  }
};

module.exports = tail;

