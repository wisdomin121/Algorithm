const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

const solution = () => {
  let isAscending = input[0] === 1 ? true : false;

  for (let i = 0; i <= 6; i++) {
    if (Math.abs(input[i + 1] - input[i]) !== 1) {
      return 'mixed';
    }
  }

  return isAscending ? 'ascending' : 'descending';
}

console.log(solution());