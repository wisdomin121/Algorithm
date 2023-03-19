const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

let result = 0;

for (let i = 0; i < n - 2; i++) {
  const one = numbers[i];
  
  for (let j = i + 1; j < n - 1; j++) {
    const two = numbers[j];

    for (let k = j + 1; k < n; k++) {
      const three = numbers[k];
      const totalSum = one + two + three;

      if (totalSum <= m && (m - totalSum) < (m - result)) {
        result = totalSum;
      }
    }
  }
}

console.log(result);