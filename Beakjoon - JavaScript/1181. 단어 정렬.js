const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const strs = input.slice(1).map((v) => v.trim());

strs.sort((a, b) => {
  if (a.length === b.length) {
    return a > b ? 1 : -1;
  }

  return a.length > b.length ? 1 : -1;
});

const result = [...new Set(strs)];

console.log(result.join('\n'));
