const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim());

const n = +input[0];
const diameters = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const solution = () => {
  let result = Infinity;

  for (let i = 0; i < n - 3; i++) {
    for (let j = i + 1; j < n; j++) {
      const snowmanOne = diameters[i] + diameters[j];

      let left = 0;
      let right = n - 1;

      while (left < right) {
        if (left === i || left === j) {
          left++;
          continue;
        }

        if (right === i || right === j) {
          right--;
          continue;
        }

        const snowmanTwo = diameters[left] + diameters[right];
        const diff = snowmanOne - snowmanTwo;

        if (Math.abs(diff) < result) {
          result = Math.abs(diff);
        }

        if (snowmanOne < snowmanTwo) {
          right -= 1;
        } else if (snowmanOne > snowmanTwo) {
          left += 1;
        } else {
          return 0;
        }
      }
    }
  }

  return result;
};

console.log(solution());
