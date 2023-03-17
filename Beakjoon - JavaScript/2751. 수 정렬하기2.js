const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const n = +input[0];
const nums = input.slice(1);

console.log(nums.sort((a, b) => a - b).join('\n'));
