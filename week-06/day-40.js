// https://www.codewars.com/kata/542106e2dda52658bf00001a/train/javascript

const { exec } = require("child_process");

async function execute(command, callback) {
  await exec(command, (error, str) => {
    return error ? callback(error) : callback(null, str);
  });
}
