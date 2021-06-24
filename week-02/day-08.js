//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

function whatNumberIsIt(n) {
  switch (n) {
    case Number.MAX_VALUE:
      return "Input number is Number.MAX_VALUE";
    case Number.MIN_VALUE:
      return "Input number is Number.MIN_VALUE";
    case Number.NEGATIVE_INFINITY:
      return "Input number is Number.NEGATIVE_INFINITY";
    case Number.POSITIVE_INFINITY:
      return "Input number is Number.POSITIVE_INFINITY";
    default:
      return Number.isNaN(n) ? "Input number is Number.NaN" : "Input number is " + n;
  }
}


//https://www.codewars.com/kata/57238ceaef9008adc7000603

function toHex(n) {
  const hexColor = n.toString(16);
  return hexColor.length < 2 ? "0" + hexColor : hexColor;
}

function colorOf(r, g, b) {
  return "#" + toHex(r) + toHex(g) + toHex(b);
}


//https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

function howManySmaller(arr, n) {
  let count = 0;
  for (let elem of arr) {
     const roundedEl = parseFloat(elem.toFixed(2));
    if (roundedEl < n) {
      count++;
    }
  }
  return count;
}
