//https://www.codewars.com/kata/5728203b7fc662a4c4000ef3 

function alienLanguage(str) {
  const lowerCaseArray = str.toLowerCase().split(" ");
  const modifiedArray = lowerCaseArray.map(elem => {
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


//https://www.codewars.com/kata/57284d23e81185ae6200162a/train/javascript

function topSecret(str) {
  return str
    .split("")
    .map((char) => decrypt(char))
    .join("");
}

function decrypt(char) {
  const charCode = char.charCodeAt();
  if (!(isUpperCaseLetter(charCode) || isLowerCaseLetter(charCode))) {
    return char;
  }
  const newCharCode = charCode - 3;
  if (newCharCode < 65 && isUpperCaseLetter(charCode)) {
    return String.fromCharCode(91 - (65 - newCharCode));
  }
  if (newCharCode < 97 && isLowerCaseLetter(charCode)) {
    return String.fromCharCode(123 - (97 - newCharCode));
  }
  return String.fromCharCode(newCharCode);
}

function isLowerCaseLetter(charCode) {
  return charCode >= 97 && charCode <= 122;
}

function isUpperCaseLetter(charCode) {
  return charCode >= 65 && charCode <= 90;
}
//question1: The top secret file number is...
answer1 = "2207";
//question2: Super agent's name is...
answer2 = "jBFJo";
//question3: He stole the treasure is...
answer3 = "bird's nest";
