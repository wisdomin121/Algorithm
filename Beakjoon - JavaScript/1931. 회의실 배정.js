const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const n = +input[0];
const times = input.slice(1).map((v) => v.split(' ').map(Number));

times.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  else {
    return a[1] - b[1];
  }
});

let [start, end] = times[0];
let result = 1;

for (let i = 1; i < n; i++) {
  if (times[i][0] >= end) {
    [start, end] = times[i];
    result++;
  }
}

console.log(result);