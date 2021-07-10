// https://www.codewars.com/kata/52d56d9c6b02b2fa9a0006d9

Function.prototype.call = function() {
  const arrayOfArgs = Array.from(arguments).slice(1);
  return this.apply(arguments[0], arrayOfArgs);
};


// https://www.codewars.com/kata/53d4eec01f1a9b3020000786

name = 'The Window';
const alpha = {
    name : 'My Alpha',
    getNameFunc : function() {
        return function() {
            return this.name;
        }.bind(this);
    }
};
