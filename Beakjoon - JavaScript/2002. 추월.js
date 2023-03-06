const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map((v) => v.trim());

const n = parseInt(input[0]);
const entry = input.slice(1, n+1);
const exit = input.slice(n+1);

let stack = [entry.indexOf(exit[0])];
let result = 0;

for (let i = 1; i < n; i++) {
  const nowIndex = entry.indexOf(exit[i]);
  
  while (stack[stack.length - 1] > nowIndex) {
    stack.pop();
    result++;
  }

  stack.push(nowIndex);
}

console.log(result);
