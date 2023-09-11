// 1시간 4분 47초

const rotate = (lock, n) => {
  const newLock = [];

  for (let i = 0; i < n; i++) {
    const newRow = [];

    for (let j = 0; j < n; j++) {
      newRow.push(lock[j][i]);
    }

    newLock.unshift(newRow);
  }

  return newLock;
};

const resize = (key, n, m) => {
  const topBottomList = new Array((n - 1) * 2 + m).fill(0);
  const leftRightList = new Array(n - 1).fill(0);

  for (let i = 0; i < m; i++) {
    key[i].unshift(...leftRightList);
    key[i].push(...leftRightList);
  }

  for (let i = 0; i < n - 1; i++) {
    key.unshift(topBottomList);
    key.push(topBottomList);
  }

  return key;
};

const check = (sx, sy, key, lock, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (
        (lock[i][j] === 1 && key[sx + i][sy + j] === 1) ||
        (lock[i][j] === 0 && key[sx + i][sy + j] === 0) ||
        (lock[i][j] === 1 && !key[sx + i][sy + j] === 0) ||
        (lock[i][j] === 0 && !key[sx + i][sy + j] === 1)
      )
        return false;
    }
  }

  return true;
};

function solution(key, lock) {
  const [n, m] = [lock.length, key.length];
  key = resize(key, n, m);

  for (let i = 0; i < 4; i++) {
    for (let x = 0; x < n + m - 1; x++) {
      for (let y = 0; y < n + m - 1; y++) {
        if (check(x, y, key, lock, n)) return true;
      }
    }

    lock = rotate(lock, n);
  }

  return false;
}

console.log(
  solution(
    [
      [0, 0, 0],
      [1, 0, 0],
      [0, 1, 1],
    ],
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ]
  )
); // true
