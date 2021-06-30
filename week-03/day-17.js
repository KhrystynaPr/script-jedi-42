// https://www.codewars.com/kata/573023c81add650b84000429

function countGrade(scores) {
  const scoreObj = {
    S: scores.filter((item) => item === 100).length,
    A: filter(scores, 100, 90),
    B: filter(scores, 90, 80),
    C: filter(scores, 80, 60),
    D: filter(scores, 60, 0),
    X: scores.filter((item) => item === -1).length,
  };
  return scoreObj;
}
function filter(arr, upperVal, lowerVal) {
  return arr.filter(item => item < upperVal && item >= lowerVal).length;
}


//https://www.codewars.com/kata/57308546bd9f0987c2000d07

function mirrorImage(arr) {
  let a = -1;
  let b = -1;
  arr.some((elem, index) => {
    if (index === arr.length - 1) {
      return false;
    }
    if (reverseEqual(elem, arr[index + 1])) {
      a = elem;
      b = arr[index + 1];
      return true;
    }
  });
  return [a, b];
}

function reverseEqual(a, b) {
  return a.toString() === b.toString().split("").reverse().join("");
}


//https://www.codewars.com/kata/5731861d05d14d6f50000626



