const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

let result = 0;
for (let i = 0; i < n; i++) {
  result += (A[i] * B[i]);
}

console.log(result);