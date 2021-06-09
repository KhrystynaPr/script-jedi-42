//https://www.codewars.com/kata/is-this-my-tail/train/javascript

function correctTail(body, tail) {
  return body[body.length - 1] === tail;
}


//https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript

function bonusTime(salary, bonus) {
  return bonus ? "£" + salary * 10 : "£" + salary;
}


//https://www.codewars.com/kata/5a58d889880385c2f40000aa/train/javascript

function automorphic(n) {
  const sqString = Math.pow(n, 2).toString();
  return sqString.endsWith(n.toString()) ? "Automorphic" : "Not!!";
}



