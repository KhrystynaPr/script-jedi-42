//https://www.codewars.com/kata/playing-with-sets-equal-or-not/train/javascript

function areEqual(firstSet, secondSet) {
  if (firstSet.size !== secondSet.size) {
    return false;
  }
  for (const elem of firstSet) {
    if (!secondSet.has(elem)) {
      return false;
    }
  }
  return true;
}

function notEqual(firstSet, secondSet) {
  return !areEqual(firstSet, secondSet);
}


//https://www.codewars.com/kata/5609fd5b44e602b2ff00003a/train/javascript

function process2Arrays(arr1, arr2) {
  const firstSet = new Set(arr1);
  const secondSet = new Set(arr2);
  let bothArraysElem = 0;
  for (const elem of firstSet) {
    if (secondSet.has(elem)) {
      bothArraysElem++;
    }
  }
  const oneArrayElem = firstSet.size + secondSet.size - bothArraysElem * 2;
  const firstArrayRemainingElem = firstSet.size - bothArraysElem;
  const secondArrayRemainingElem = secondSet.size - bothArraysElem;
  return [
    bothArraysElem,
    oneArrayElem,
    firstArrayRemainingElem,
    secondArrayRemainingElem,
  ];
}
