const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const n = parseInt(input[0]);
const triangle = input.slice(1).map((v) => v.split(' ').map(Number));

let dp = [triangle[0]];

for (let i = 1; i < n; i++) {
  let newDp = [];
  for (let j = 0; j <= i; j++) {
    let parent;
    
    if (j === 0) {
      parent = dp[i - 1][j];
    } else if (j === i) {
      parent = dp[i - 1][j - 1];
    } else {
      parent = Math.max(dp[i - 1][j - 1], dp[i - 1][j]);
    }

    newDp.push(triangle[i][j] + parent);
  }

  dp.push(newDp);
}

console.log(Math.max(...dp[n-1]));
