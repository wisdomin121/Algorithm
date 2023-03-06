const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const n = +fs.readFileSync(filePath).toString().trim();

let start = (n - (n.toString().length * 9));

while (true) {
  let totalSum = start;

  for (let i = 0; i < start.toString().length; i++) {
    totalSum += +start.toString()[i];
  }

  if (totalSum === n) {
    console.log(start);
    break;
  }

  if (start > n) {
    console.log(0);
    break;
  }

  start++;
}