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

let name;
function greet_abe() {
  name = 'Abe';
  return `Hello, ${name}!`;
};


function greet_ben() {
  name = 'Ben'; 
  return `Hello, ${name}!`;
};
