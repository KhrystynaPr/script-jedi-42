//https://www.codewars.com/kata/5735e39313c205fe39001173

function countAnimals(animals, count) {
  const result = [];
  for (const char of count) {
    animals.includes(char) ? result.push(findCharCount(animals, char)) : result.push(0);
  }
  return result;
}

function findCharCount(str, char) {
  return str.match(new RegExp(char, "g")).length;
}


//https://www.codewars.com/kata/573975d3ac3eec695b0013e0

function findSimilarity(str, word) {
  const arrOfStr = str.split(" ");
  const result = [];
  for (const str of arrOfStr) {
    if (getRegStr(word).test(str)) {
      result.push(str);
    }
  }
  return result.join(" ");
}

function getRegStr(word) {
  const regstr = word
    .replace(/./g, ".")
    .replace(/^./, word[0])
    .replace(/.$/, word[word.length - 1]);
  return new RegExp("^" + regstr + "$");
}
