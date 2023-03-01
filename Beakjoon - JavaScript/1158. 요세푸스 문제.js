const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, k] = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}

const result = [];
let index = k - 1;

while (arr.length) {
  result.push(arr.splice(index, 1));
  index = (index + k - 1) % arr.length;
}

console.log('<' + result.join(', ') + '>');

// const arr = Array.from({ length: n }, (_, i) => i + 1);

// const result = [];
// let index = k - 1;

// while (true) {
//   result.push(arr[index]);
//   arr[index] = 0;

//   if (result.length === n) break;

//   let cnt = 0;
//   while (cnt !== k) {
//     index = (index + 1) % n;

//     if (arr[index] !== 0) cnt++;
//   }
// }

// console.log('<' + result.join(', ') + '>');
