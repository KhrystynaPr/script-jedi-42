// https://www.codewars.com/kata/56b71b1dbd06e6d88100092a

function buildFun(n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}


// https://www.codewars.com/kata/514aa0dc21607ae236000017

let name = 'Abe';
const greet_abe = greet(name);
name = 'Ben';
const greet_ben = greet(name);

function greet(ourName) {
  return () => `Hello, ${ourName}!`;
}
