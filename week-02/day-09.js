//https://www.codewars.com/kata/57274562c8dcebe77e001012

function cutIt(arr) {
  const minLength = arr.reduce((accumulator, current) => {
    return current.length < accumulator.length ? current : accumulator;
  }).length;
  return arr.map((elem) => elem.slice(0, minLength));
}


//https://www.codewars.com/kata/57277a31e5e51450a4000010

function firstToLast(str, c) {
  const firstIndex = str.search(c);
  return firstIndex < 0 ? -1 : str.lastIndexOf(c) - firstIndex;
}


//https://www.codewars.com/kata/57280481e8118511f7000ffa

function splitAndMerge(string, separator) {
  return string
    .split(" ")
    .map((element) => element.split("").join(separator))
    .join(" ");
}
