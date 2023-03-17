const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim();

const regex = /^(100+1+|01)+$/;

if (input.match(regex)) {
  console.log('SUBMARINE');
} else {
  console.log('NOISE');
}