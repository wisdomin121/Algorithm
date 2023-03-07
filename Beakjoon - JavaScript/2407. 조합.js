const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
let [n, m] = fs.readFileSync(filePath).toString().trim().split(' ').map(BigInt);

const solution = () => {
  if (m === 0 || n === m) return 1;

  let up = 1n;
  for (let i = n; i > n - m; i--) {
    up *= BigInt(i);
  }
  
  let down = 1n;
  for (let i = m; i > 0; i--) {
    down *= BigInt(i);
  }

  return up / down;
}

console.log(solution().toString());