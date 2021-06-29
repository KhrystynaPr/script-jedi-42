//https://www.codewars.com/kata/572ab0cfa3af384df7000ff8

function shuffleIt(arr, ...n) {
  const result = [...arr];
  n.forEach(item => [result[item[0]], result[item[1]]] = [result[item[1]], result[item[0]]]);
  return result;
}


//https://www.codewars.com/kata/5fd8aa5743b49e0012d43e50 

function loopArr(arr, direction, steps) {
  if (direction === "left") {
    const a = arr.slice(0, steps);
    const b = arr.slice(steps);
    return b.concat(...a);
  }
  const a = arr.slice(arr.length - steps);
  const b = arr.slice(0, arr.length - steps);
  return a.concat(...b);
}


//https://www.codewars.com/kata/572af273a3af3836660014a1

function infiniteLoop(arr, d, n) {
  const arrayOfLengths = arr.map((elem) => elem.length);
  let totalArray = [];
  arr.forEach((elem) => totalArray.push(...elem));
  let modifiedArray = [];
  if (d === "left") {
    const a = totalArray.slice(0, n);
    const b = totalArray.slice(n);
    modifiedArray = b.concat(...a);
  } else {
    const a = totalArray.slice(totalArray.length - n);
    const b = totalArray.slice(0, totalArray.length - n);
    modifiedArray = a.concat(...b);
  }
  return separateToArrays(arrayOfLengths, modifiedArray);
}

function separateToArrays(arrayOfLengths, modifiedArray) {
  const result = [];
  for (const length of arrayOfLengths) {
    const cutedArray = modifiedArray.slice(0, length);
    modifiedArray = modifiedArray.slice(length);
    result.push(cutedArray);
  }
  return result;
}
