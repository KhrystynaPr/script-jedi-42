//https://www.codewars.com/kata/59859f435f5d18ede7000050

function wordToBin(str){ 
  return str.split("").map(elem => "0" + elem.charCodeAt().toString(2))
}


//https://www.codewars.com/kata/57f75cc397d62fc93d000059

function calc(x) {
  const total1 = x
    .split("")
    .map((elem) => elem.charCodeAt())
    .join("");
  const total2 = total1.replaceAll("7", "1");
  return getSum(total1) - getSum(total2);
}

function getSum(elem) {
  return elem.split("").reduce((acumulator, current) => +acumulator + +current);
}

if (!String.prototype.replaceAll) {
  String.prototype.replaceAll = function (str, newStr) {
    return this.replace(new RegExp(str, "g"), newStr);
  };
}
