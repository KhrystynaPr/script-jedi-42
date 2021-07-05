// https://www.codewars.com/kata/559f860f8c0d6c7784000119

function anyArrows(arrows) {
  const goodArrow = (elem) =>
    !elem.hasOwnProperty("damaged") || elem.damaged === false;
  return arrows.some(goodArrow);
}


// https://www.codewars.com/kata/586909e4c66d18dd1800009b

function multiplyAll (array) {
  return (num) => array.map(elem => elem * num);
}
