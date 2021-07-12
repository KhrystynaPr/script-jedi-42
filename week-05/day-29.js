// https://www.codewars.com/kata/525a5b2185a9a4f5670006c1

const myObj = Object.create(MyObject.prototype);
MyObject.bind(myObj)();


// https://www.codewars.com/kata/558cb3df5f511f40d500001d

function nouveau (Constructor, ...args) {
  const objPrototype = Object.create(Constructor.prototype);
  const instance = Constructor.apply(objPrototype, args); 
  return instance === Object(instance) ? instance : objPrototype;
}
