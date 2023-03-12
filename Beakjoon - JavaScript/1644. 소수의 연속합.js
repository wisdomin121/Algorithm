const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const n = +fs.readFileSync(filePath).toString().trim();

const solution = () => {
  if (n === 1) return 0;
  if (n === 2) return 1;

  const isChecked = new Array(n + 1).fill(false);
  const primeNums = [];

  for (let i = 2; i <= n; i++) {
    if (isChecked[i]) continue;

    primeNums.push(i);

    for (let j = i; j <= n; j += i) {
      isChecked[j] = true;
    }
  }

  let result = primeNums[primeNums.length - 1] === n ? 1 : 0;

  let left = 0; // 빼야 하는 인덱스
  let right = 2; // 더해야 하는 다음 인덱스
  let sum = primeNums[0] + primeNums[1];

  while (left !== primeNums.length - 1 || right !== primeNums.length) {
    if (sum === n) result++;

    if (sum <= n) {
      sum += primeNums[right];
      right++;
    } else if (sum > n) {
      sum -= primeNums[left];
      left++;
    }
  }

  return result;
};

console.log(solution());
