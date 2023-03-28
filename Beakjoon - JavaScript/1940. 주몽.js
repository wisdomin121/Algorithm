const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const m = +input[1];
const numbers = input[2].split(' ').map(Number);

const setNums = new Set(numbers);
const middle = Math.floor((m - 1) / 2);

let result = 0;

for (let number of numbers) {
  if (number > middle) continue;
  if (setNums.has(m - number)) result++;
}

console.log(result);
