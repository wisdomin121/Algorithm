const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const completed = [];

// 한 숫자를 지웠을 때, 여러 개의 빙고가 나오는 상황을 고려했어야 함
const checkBingo = () => {
  let bingo = 0;

  if (
    !completed.includes('rightTop') &&
    plates[0][4] === 0 &&
    plates[1][3] === 0 &&
    plates[2][2] === 0 &&
    plates[3][1] === 0 &&
    plates[4][0] === 0
  ) {
    completed.push('rightTop');
    bingo++;
  }
  if (
    !completed.includes('rightBottom') &&
    plates[0][0] === 0 &&
    plates[1][1] === 0 &&
    plates[2][2] === 0 &&
    plates[3][3] === 0 &&
    plates[4][4] === 0
  ) {
    completed.push('rightBottom');
    bingo++;
  }

  for (let i = 0; i < 5; i++) {
    let col = plates[i][0];
    let row = plates[0][i];

    for (let j = 1; j < 5; j++) {
      if (col !== plates[i][j]) col = false;
      if (row !== plates[j][i]) row = false;

      if (col === false && row === false) {
        break;
      }
    }

    if (!completed.includes(`col${i}`) && col === 0) {
      completed.push(`col${i}`);
      bingo++;
    }
    if (!completed.includes(`row${i}`) && row === 0) {
      completed.push(`row${i}`);
      bingo++;
    }
  }

  return bingo;
};

const deleteNumber = (number) => {
  for (let i = 0; i < plates.length; i++) {
    const index = plates[i].indexOf(number);

    if (index !== -1) {
      plates[i][index] = 0;

      let cntBingo = checkBingo();

      return cntBingo;
    }
  }
};

const plates = input.slice(0, 5).map((v) => v.trim().split(' ').map(Number));
const numbers = input
  .slice(5)
  .map((v) => v.trim().split(' ').map(Number))
  .reduce((a, b) => {
    return [...a, ...b];
  });

let bingo = 0;
for (let i = 0; i < 25; i++) {
  const number = numbers[i];

  const cntBingo = deleteNumber(number);

  if (cntBingo > 0) {
    bingo += cntBingo;

    if (bingo >= 3) {
      console.log(i + 1);
      break;
    }
  }
}
