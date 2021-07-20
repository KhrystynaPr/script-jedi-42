// https://www.codewars.com/kata/5c743cec901022438549964a/train/javascript

const createIterator = (array) => {
  return {
    index: 0,
    next: function () {
      return this.index < array.length
        ? { value: array[this.index++], done: false }
        : { value: undefined, done: true };
    },
  }; 
};
