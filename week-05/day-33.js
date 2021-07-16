// https://www.codewars.com/kata/array-number-reduce/train/javascript

Array.prototype.reduce = function (process, initial) {
  for (const elem of this) {
    if (!initial) {
      initial = elem;
      continue;
    }
    initial = process(initial, elem);
  }
  return initial;
};


// https://www.codewars.com/kata/52ed80dfe7bf9ae61d000056/train/javascript

Object.deepFreeze = function (object) {
  for (const key in object) {
    Object.deepFreeze(object[key]);
  }
  return Object.freeze(object);
};
