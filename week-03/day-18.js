//https://www.codewars.com/kata/573156709a231dcec9000ee8

function tailAndHead(arr) {
  const arrOfSum = [];
  for (let i = 0; i < arr.length - 1; i++) {
    arrOfSum.push(sum(arr[i], arr[i + 1]));
  }
  return arrOfSum.reduce((a, b) => a * b);
}

function sum(a, b) {
  const aString = a.toString();
  return +aString[aString.length - 1] + +b.toString()[0];
}


//https://www.codewars.com/kata/5732b0351eb838d03300101d

function blackAndWhite(arr) {
  if (Array.isArray(arr)) {
    return arr.includes(5) && arr.includes(13) ? "It's a black array" : "It's a white array";
  }
  return "It's a fake array";
}


//https://www.codewars.com/kata/5735956413c2054a680009ec

function rndCode() {
  const allStr = "ABCDEFGHIJKLM";
  const allNum = "0123456789";
  const allSym = "~!@#$%^&*";

  const str = getRandomChar(allStr, 2);
  const num = getRandomChar(allNum, 4);
  const sym = getRandomChar(allSym, 2);
  return `${str}${num}${sym}`;
}

function getRandomChar(str, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += str[getRandomNum(0, str.length)];
  }
  return result;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
