// 28분 16초

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, c] = input[0].split(' ').map(Number);
const xs = input.slice(1).map(Number);
xs.sort((a, b) => a - b);

let lowGap = 1;
let highGap = xs[n - 1] - xs[0];

while (lowGap <= highGap) {
  const mid = Math.floor((highGap + lowGap) / 2);

  let copyC = c - 1;
  let prevX = xs[0];

  for (let i = 1; i < n; i++) {
    if (xs[i] - prevX >= mid) {
      copyC--;
      prevX = xs[i];
    }
  }

  if (copyC <= 0) lowGap = mid + 1;
  else highGap = mid - 1;
}

console.log(highGap);
