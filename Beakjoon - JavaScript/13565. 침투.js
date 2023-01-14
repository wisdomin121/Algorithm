const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [m, n] = input[0].split(' ').map(Number);
const grid = input.slice(1).map((v) => v.trim().split(''));

const queue = [];
for (let i = 0; i < n; i++) {
  if (grid[0][i] === '0') {
    queue.push([0, i]);
    grid[0][i] = '2';
  }
}

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
let index = 0;
let result = '';
outer: while (queue[index]) {
  const [x, y] = queue[index];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (-1 < nx && nx < m && -1 < ny && ny < n && grid[nx][ny] === '0') {
      if (nx === (m - 1)) {
        result = 'YES';
        break outer;
      }

      queue.push([nx, ny]);
      grid[nx][ny] = '2';
    } 
  }

  index++;
}

if (result === '') console.log('NO');
else console.log(result);