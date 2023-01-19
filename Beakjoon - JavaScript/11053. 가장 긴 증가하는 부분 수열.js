const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const as = [0, ...input[1].split(' ').map(Number)];

let dp = [0, 1];
for (let i = 2; i <= n; i++) {
  let max = 0;

  for (let j = 1; j < i; j++) {
    if (as[i] > as[j]) {
      max = Math.max(max, dp[j]);
    }
  }

  dp.push(max + 1);
}

console.log(Math.max(...dp));