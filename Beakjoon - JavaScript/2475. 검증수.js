const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map((v) => (+v) ** 2);

console.log(input.reduce((a, b) => a + b) % 10);