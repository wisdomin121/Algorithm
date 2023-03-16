const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let GCD;
let LCM;

let [nowA, nowB] = [a, b];

while (true) {
  const remainder = nowA % nowB;

  if (remainder === 0) {
    GCD = nowB;
    break;
  }

  nowA = nowB;
  nowB = remainder;
}

LCM = (a * b) / GCD;

console.log(`${GCD}\n${LCM}`);
