// https://www.codewars.com/kata/5637ead70013386e30000027/solutions/javascript

function* generator(a) {
  let count = 1;
  while (true) {
    const arg = yield `${a} x ${count} = ${a * count}`;
    count++;
  }
}
