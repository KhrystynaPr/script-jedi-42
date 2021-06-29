//https://www.codewars.com/kata/572cb264362806af46000793 

function threeInOne(arr) {
  const newArray = arr.slice();
  const modifiedArray = [];
  while (newArray.length > 0) {
    modifiedArray.push(newArray.splice(0, 3));
  }
  return modifiedArray.map((item) => item.reduce((a, b) => a + b));
}


//https://www.codewars.com/kata/572df796914b5ba27c000c90

function sortIt(arr) {
  const modifiedArray = arr.slice();
  const repeats = {};
  modifiedArray.forEach((elem) =>
    !repeats[elem] ? (repeats[elem] = 1) : (repeats[elem] += 1)
  );
  modifiedArray.sort((a, b) => {
    if (repeats[a] > repeats[b]) {
      return 1;
    }
    if (repeats[a] == repeats[b]) {
      return b - a;
    }
    return -1;
  });
  return modifiedArray;
}

 
//https://www.codewars.com/kata/572fdeb4380bb703fc00002c 

function isolateIt(arr) {
  return arr.map((item) => {
    const subArray = item.split("");
    if (item.length % 2 === 0) { 
      subArray.splice(item.length / 2, 0, "|");
      return subArray.join("");
    }
    subArray.splice(item.length / 2, 1, "|");
    return subArray.join("");
  });
}
