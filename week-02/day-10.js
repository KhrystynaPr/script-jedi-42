//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3 

function alienLanguage(str) {
  const lowerCaseArray = str.toLowerCase().split(" ");
  const modifiedArray = lowerCaseArray.map((elem) => {
    const stringToReplace = elem.substr(0, elem.length - 1);
    return elem.replace(stringToReplace, stringToReplace.toUpperCase());
  });
  return modifiedArray.join(" ");
}



//https://www.codewars.com/kata/57284d23e81185ae6200162a

function fiveLine(s) {
  const stringWithoutSpaces = s.trim();
  let modifiedString = ``;
  for (let i = 1; i <= 5; i++) {
    modifiedString += `${stringWithoutSpaces.repeat(i)}${"\n"}`;
  }
  return modifiedString.trim();
}


//
