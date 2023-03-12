const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const bfs = (startX, startY) => {
  const queue = [[startX, startY]];
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];
  let index = 0;

  paper[startX][startY] = 2;

  while (index !== queue.length) {
    const [x, y] = queue[index];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (0 <= nx && nx < m && 0 <= ny && ny < n && paper[nx][ny] === 0) {
        paper[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }

    index++;
  }

  return queue.length;
};

const [m, n, _] = input[0].split(' ').map(Number);
const infos = input.slice(1).map((v) => v.split(' ').map(Number));

const paper = Array.from(Array(m), () => Array(n).fill(0));

for (let [lx, ly, rx, ry] of infos) {
  for (let i = ly; i < ry; i++) {
    for (let j = lx; j < rx; j++) {
      paper[i][j] = 1;
    }
  }
}

let result = [];

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    if (paper[i][j] !== 0) continue;

    result.push(bfs(i, j));
  }
}

result.sort((a, b) => a - b);

console.log(`${result.length}\n${result.join(' ')}`);
