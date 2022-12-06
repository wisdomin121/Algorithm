const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [m, n] = input[0].split(' ').map(Number);
const box = input.slice(1).map((v) => v.split(' ').map(Number));

let tomatoPos = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] === 1) {
      tomatoPos.push([i, j]);
    }
  }
}

// 동서남북
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let idx = 0;
while (tomatoPos[idx]) {
  const [x, y] = tomatoPos[idx];
  const number = box[x][y];

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (0 <= nx && nx < n && 0 <= ny && ny < m && box[nx][ny] === 0) {
      box[nx][ny] = number + 1;
      tomatoPos.push([nx, ny]);
    }
  }

  idx++;
}

let maxNumber = 0;
outer: for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] === 0) {
      maxNumber = 0;
      break outer;
    }
    if (maxNumber < box[i][j]) maxNumber = box[i][j];
  }
}

console.log(maxNumber - 1);