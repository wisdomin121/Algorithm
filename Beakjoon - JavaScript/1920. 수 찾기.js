const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const results = [];
const as = new Set(input[1].trim().split(' ').map(Number));

input[3]
  .trim()
  .split(' ')
  .map((v) => results.push(as.has(+v) ? 1 : 0));

console.log(results.join('\n'));

// 메모리 : 41536KB / 시간 : 3792ms
// const as = input[1]
//   .trim()
//   .split(' ')
//   .map(Number)
//   .sort((a, b) => a - b);

// const search = (target) => {
//   let left = 0;
//   let right = as.length - 1;

//   while (left <= right) {
//     if (as[left] === target || as[right] === target) return 1;
//     if (as[left] > target || as[right] < target) return 0;

//     left++;
//     right--;
//   }

//   return 0;
// };

// const bs = input[3].trim().split(' ').map(Number);

// const results = [];
// for (let b of bs) {
//   results.push(search(b));
// }

// console.log(results.join('\n'));
