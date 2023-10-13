// 29분 42초

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const xys = input.slice(1).map((xy) => xy.trim().split(' ').map(Number));
xys.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  else return a[0] - b[0];
});

let result = 0;
let newX = xys[0][0];

for (const [x, y] of xys) {
  if (y < newX) continue;

  if (x >= newX) {
    result += y - x;
  } else if (x < newX) {
    result += y - newX;
  }

  newX = y;
}

console.log(result);
