// https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f

Function.prototype.bind = function (ctx) {
  const func = this;
  return function(...args) {
    const newCtx = this === global ? ctx : this;
    return func.apply(newCtx, args);
  };
};



// https://www.codewars.com/kata/559f3e20f4f29869cf0000ea

 function OrderPeople (people){
  return people.sort((a, b) => a.age - b.age);  
}
