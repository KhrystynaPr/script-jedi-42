// https://www.codewars.com/kata/520d9c27e9940532eb00018e

function solution(...args) {
  const set = new Set(args);
  return set.size !== args.length;
}


// https://www.codewars.com/kata/541629460b198da04e000bb9

function last(list) {
  const lastArg = arguments[arguments.length - 1];
  if (Array.isArray(lastArg) || typeof lastArg === "string") {
    return lastArg[lastArg.length - 1];
  }
  return lastArg;
}
