const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

const [n, m, ...vips] = input;

const solution = () => {
  if (n === m || n === 1 || (n - m) === 1) return 1;

  const dp = [1, 1, 2];
  for (let i = 3; i <= n; i++) {
    dp.push(dp[i - 1] + dp[i - 2]);
  }

  if (m === 0) return dp[n];

  let result = 1; 
  let start = 0;
  for (let vip of vips) {
    result *= dp[vip - start - 1];
    start = vip;
  }

  result *= dp[n - start];
  
  return result;
};

console.log(solution());
