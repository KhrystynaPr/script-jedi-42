// https://www.codewars.com/kata/53844152aa6fc137d8000589

function always (n) {
  return () => n;
}


// https://www.codewars.com/kata/59bdbe9d46038724ca0000b9

const state = {
  modifier: 2,
};

function solution(arr, options) { 
  return arr.map(el => el + 2 * options.modifier);  
}
