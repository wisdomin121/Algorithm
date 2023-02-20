const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const strings = input.slice(1).map((v) => v.trim());
const regex = /^(100+1+|01)+$/;

let results = [];
for (let str of strings) {
  if (str.match(regex)) {
    results.push('YES');
  } else {
    results.push('NO');
  }
}

console.log(results.join('\n'));