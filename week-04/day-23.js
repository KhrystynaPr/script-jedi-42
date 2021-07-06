// https://www.codewars.com/kata/540de1f0716ab384b4000828

function spread(func, args) {
  return func(...args);
}


// https://www.codewars.com/kata/5258b272e6925db09900386a

function numbers (...args) { 
 return  args.every(x => typeof x === 'number');
}
