const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const n = parseInt(fs.readFileSync(filePath).toString());

let dp = [0, 3, 7];

for (let i = 3; i <= n; i++) {
  // const newDp = dp[i-1] + (dp[i-2] * 2) + (dp[i-1] - dp[i-2]);
  const newDp =((2 * dp[i - 1]) + dp[i - 2]) % 9901;
  dp.push(newDp);
}

console.log(dp[n]);

// const fs = require('fs');
// const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
// const n = parseInt(fs.readFileSync(filePath).toString());

// let dp = new Array(n + 1).fill(0);
// dp[1] = 3;
// dp[2] = 7;

// for (let i = 3; i <= n; i++) {
//   dp[i] = ((2 * dp[i - 1]) + dp[i - 2]) % 9901;
// }

// console.log(dp[n]);