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
