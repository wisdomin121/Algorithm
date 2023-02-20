const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.trim());

const results = [];

for (let number of input) {
  const len = number.length;

  if (number === "0") {
    console.log(results.join("\n"));
    break;
  } else if (len === 1) {
    results.push("yes");
    continue;
  }

  const halfLen = Math.floor(len / 2);
  const left = number.slice(0, halfLen);
  const right = number.slice(-halfLen).split("").reverse().join("");

  if (left === right) {
    results.push("yes");
  } else {
    results.push("no");
  }
}
