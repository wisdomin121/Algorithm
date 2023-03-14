const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const getOriginal = (n, m) => {
  let startW = ['W', 'B', 'W', 'B', 'W', 'B', 'W', 'B'];
  let startB = ['B', 'W', 'B', 'W', 'B', 'W', 'B', 'W'];

  let startWBoard = [];
  let startBBoard = [];

  for (let i = 0; i < n; i++) {
    startWBoard.push(i % 2 === 0 ? startW : startB);
    startBBoard.push(i % 2 === 0 ? startB : startW);
  }

  return [startWBoard, startBBoard];
};

const searchWrong = (board, startN, startM, originalBoard) => {
  let cnt = 0;

  for (let i = startN; i < startN + 8; i++) {
    for (let j = startM; j < startM + 8; j++) {
      if (board[i][j] !== originalBoard[i - startN][j - startM]) {
        cnt++;
      }
    }
  }

  return cnt;
};

const [n, m] = input[0].split(' ').map(Number);
const board = input.slice(1).map((v) => v.trim().split(''));

const [startWBoard, startBBoard] = getOriginal(n, m);

let startWResult = Infinity;
let startBResult = Infinity;

outer: for (let i = 0; i < n - 7; i++) {
  for (let j = 0; j < m - 7; j++) {
    startWResult = Math.min(startWResult, searchWrong(board, i, j, startWBoard));
    startBResult = Math.min(startBResult, searchWrong(board, i, j, startBBoard));

    if (startWResult === 0 || startBResult === 0) break outer;
  }
}

console.log(Math.min(startWResult, startBResult));
