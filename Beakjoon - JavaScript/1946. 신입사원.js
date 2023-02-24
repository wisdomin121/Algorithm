const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const T = +input[0];
let start = 2
let end = start + parseInt(input[1]);

let results = [];
for (let i = 0; i < T; i++) {
  let scores = input.slice(start, end).map((v) => v.split(' ').map(Number));
  scores.sort((a, b) => a[0] - b[0]);

  let result = 1;
  let minValue = scores[0][1];
  for (let i = 1; i < scores.length; i++) {
    if (minValue > scores[i][1]) {
      minValue = scores[i][1];
      result++;
    }
  }
  
  results.push(result);

  start = end + 1;
  end = start + parseInt(input[start - 1]);
}

console.log(results.join('\n'));