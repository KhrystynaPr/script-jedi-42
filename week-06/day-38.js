// https://www.codewars.com/kata/5636840bd87777688b00006c/train/javascript

function* generator() {
  let count = 1;

  while (true) {
    const argFromNext = yield count;
    count = argFromNext !== undefined ? argFromNext : count + 1;
  }
}
