//https://www.codewars.com/kata/59859f435f5d18ede7000050

function wordToBin(str){ 
  return str.split("").map(elem => "0" + elem.charCodeAt().toString(2))
}


//https://www.codewars.com/kata/57f75cc397d62fc93d000059

function calc(x) {
  let total1 = x
    .split("")
    .map((elem) => elem.charCodeAt())
    .join("");
  let total2 = total1.replaceAll("7", "1");
  let sum1 = total1
    .split("")
    .reduce((acumulator, current) => +acumulator + +current);
  let sum2 = total2
    .split("")
    .reduce((acumulator, current) => +acumulator + +current);
  return sum1 - sum2;
}
