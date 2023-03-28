const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const numbers = input[1].split(' ').map(Number);

const dp = [numbers[0]];

for (let i = 1; i < n; i++) {
  const number = numbers[i];

  dp.push(Math.max(number, dp[i - 1] + number));
}

console.log(dp);
console.log(Math.max(...dp));
