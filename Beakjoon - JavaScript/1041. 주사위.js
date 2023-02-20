const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const searchMinNums = () => {
  const arr = [
    [a, b, c], [a, b, d], [a, c, e], [a, d, e],
    [b, c, f], [b, d, f], [c, e, f], [d, e, f]
  ];

  let result = arr[0];
  for (let i = 1; i < 8; i++) {
    const first = result.reduce((a, b) => a + b);
    const second = arr[i].reduce((a, b) => a + b);

    if (first > second) {
      result = arr[i];
    }
  }

  return result;
};

const n = +input[0];
const [a, b, c, d, e, f] = input[1].split(' ').map(Number);

const minNums = searchMinNums().sort((a, b) => a - b);
const threeAdd = minNums.reduce((a, b) => a + b);
const twoAdd = minNums[0] + minNums[1];
const oneAdd = minNums[0];

if (n === 1) {
  console.log((a + b + c + d + e + f) - Math.max(a, b, c, d, e, f));
}
else if ((n * n) + ((n - 1) * 4) === n ** 3) {
  console.log((threeAdd * 4) + (twoAdd * ((8 * n) - 12)));
} 
else {
  console.log((threeAdd * 4) + (twoAdd * ((8 * n) - 12)) + (oneAdd * ((5 * (n ** 2)) - (16 * n) + 12)));
}