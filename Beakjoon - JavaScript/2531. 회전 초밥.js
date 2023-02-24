const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, _, k, c] = input[0].split(' ').map(Number);
const types = input.slice(1).map(Number);

for (let i = 0; i < k - 1; i++) {
  types.push(types[i]);
}

const cntObj = {};
cntObj[c] = 1;

let cnt = 1;

for (let i = 0; i < k; i++) {
  if (cntObj[types[i]]) {
    cntObj[types[i]]++;
  } else {
    cntObj[types[i]] = 1;
    cnt++;
  }
}

let result = cnt;

for (let i = k; i < n + k - 1; i++) {
  // 첫 번째 초밥 빼기
  cntObj[types[i - k]]--;
  if (cntObj[types[i - k]] === 0) cnt--;

  // 새로운 초밥 넣기
  if (cntObj[types[i]]) {
    cntObj[types[i]]++;
  } else {
    cntObj[types[i]] = 1;
    cnt++;
  }

  result = Math.max(result, cnt);
}

console.log(result);
