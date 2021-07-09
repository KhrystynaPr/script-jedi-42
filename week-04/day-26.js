// https://www.codewars.com/kata/5388a9d60b24c52f4c000b5f

/*підглянула вирішення з пояснення на youtube.
Щоб нагло не копіпастити, трошки її переробила.*/

Function.prototype.bind = function (ctx) {
  const func = this;
  const args = Array.prototype.slice.call(arguments, 1);
  return function(){
    return func.apply(
      this && this !== global ? this : ctx,
      args.concat(Array.prototype.slice.apply(arguments))
    );
  }
};



// https://www.codewars.com/kata/559f3e20f4f29869cf0000ea

 function OrderPeople (people){
  return people.sort((a, b) => a.age - b.age);  
}
