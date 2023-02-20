const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const letters = input.slice(1).map((v) => v.trim());

const result = [];

let [start, end] = [0, n - 1];

while (start <= end) {
  let [s, e] = [start, end];
  let isPlus;
  while (letters[s] === letters[e]) {
    s++;
    e--;

    if (s >= e || letters[s] < letters[e]) {
      isPlus = true;
      break;
    } else if (letters[s] > letters[e]) {
      isPlus = false;
      break;
    }
  }

  if (isPlus === true || letters[start] < letters[end]) {
    result.push(letters[start]);
    start++;
  } else if (isPlus === false || letters[start] > letters[end]) {
    result.push(letters[end]);
    end--;
  }

  if (result.length % 80 === 0) {
    result[result.length - 1] += '\n';
  }

  if (start === end) {
    result.push(letters[start]);
    break;
  }
}

console.log(result.join(''));
