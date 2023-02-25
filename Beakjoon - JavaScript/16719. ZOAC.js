const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const str = fs.readFileSync(filePath).toString().trim().split('');

const visited = new Array(str.length).fill(false);
const results = [];

const dfs = (start, end) => {
  if (start === end) return;

  const minLetter = str.slice(start, end).sort()[0];
  const minIndex = str.slice(start, end).indexOf(minLetter) + start;

  visited[minIndex] = true;

  let result = '';
  for (let i = 0; i < visited.length; i++) {
    if (visited[i]) {
      result += str[i];
    }
  }

  results.push(result);

  dfs(minIndex + 1, end);
  dfs(start, minIndex);
};

dfs(0, str.length);

console.log(results.join('\n'));
