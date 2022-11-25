const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const objects = input.slice(1).map((v) => v.split(' ').map(Number));

let dp = Array.from(Array(n+1), () => Array(k+1).fill(0));

for (let i = 1; i <= n; i++) {
  const [w, v] = objects[i-1];
  
  for (let j = 1; j <= k; j++) {
    if (w > j) {
      dp[i][j] = dp[i-1][j];
    } else {
      dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j-w] + v);
    }
  }
}

console.log(dp[n][k]);