const getMatrix = (tickets) => {
  const matrix = {};

  for (let [a, b] of tickets) {
    if (matrix[a]) {
      matrix[a].push(b);
    } else {
      matrix[a] = [b];
    }
  }

  return matrix;
};

function solution(tickets) {
  const matrix = getMatrix(tickets);
  let answer = ['Z'];

  const dfs = (matrix, result, idx) => {
    const arrival = result[idx];

    if (result.length === tickets.length + 1 || !matrix[arrival]) return result;

    for (let i = 0; i < matrix[arrival].length; i++) {
      const dest = matrix[arrival].shift();

      result.push(dest);
      dfs(matrix, result, idx + 1);

      if (result.length === tickets.length + 1 && answer.join('') > result.join('')) {
        answer = [...result];
      }

      matrix[arrival].push(dest);
      result.pop();
    }
  };

  dfs(matrix, ['ICN'], 0);

  return answer;
}

console.log(
  solution([
    ['ICN', 'A'],
    ['ICN', 'B'],
    ['B', 'ICN'],
  ])
);
