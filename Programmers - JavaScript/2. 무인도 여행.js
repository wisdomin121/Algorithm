// 21분 52초

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

const bfs = (i, j, maps) => {
  const queue = [[i, j]];
  let idx = 0;
  let result = 0;

  result += parseInt(maps[i][j]);
  maps[i][j] = 'X';

  while (queue.length !== idx) {
    const [x, y] = queue[idx];

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (0 <= nx && nx < maps.length && 0 <= ny && ny < maps[0].length && maps[nx][ny] !== 'X') {
        result += parseInt(maps[nx][ny]);
        maps[nx][ny] = 'X';
        queue.push([nx, ny]);
      }
    }

    idx++;
  }

  return result;
};

function solution(maps) {
  maps = maps.map((m) => {
    return m.split('');
  });

  const results = [];

  for (let x = 0; x < maps.length; x++) {
    for (let y = 0; y < maps[0].length; y++) {
      if ('X' !== maps[x][y]) {
        const result = bfs(x, y, maps);

        results.push(result);
      }
    }
  }

  return results.length === 0 ? [-1] : results.sort((a, b) => a - b);
}
