//https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript

function padIt(str, n) {
  while (n--) {
    str = n % 2 === 0 ? "*" + str : str + "*";
  }
  return str;
}


//https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr) {
  const odd = [],
    even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else odd.push(arr[i]);
  }
  return [odd, even];
}


//https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript

function grabDoll(dolls) {
  const bag = [],
    doll;
  for (const doll of dolls) {
    if (doll === "Hello Kitty" || doll === "Barbie doll") bag.push(doll);
    else continue;
    if (bag.length > 2) break;
  }
  return bag;
}


//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj) {
  const five = [];
  for (const key in obj) {
    if (key.length === 5) five.push(key);
    if (obj[key].length === 5) five.push(obj[key]);
  }
  return five;
}
