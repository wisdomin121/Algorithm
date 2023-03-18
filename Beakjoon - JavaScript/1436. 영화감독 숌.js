const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +fs.readFileSync(filePath).toString().trim();

let cnt = 0;
let nowNum = 666;

while (cnt !== n) {
  if (nowNum.toString().includes('666')) cnt++;
  nowNum++;
}

console.log(nowNum - 1);
