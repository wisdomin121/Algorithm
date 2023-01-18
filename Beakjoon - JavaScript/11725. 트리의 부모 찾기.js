const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const deleteParent = (matrix, parent) => {
  const queue = matrix[parent];
  let index = 0;

  while (queue.length > index) {
    const child = queue[index];
    const parentIndex = matrix[child].indexOf(parent);

    if (parentIndex !== -1) {
      matrix[child].splice(parentIndex, 1);
      deleteParent(matrix, child);
    } 

    index++;
  }
}

const n = +input[0];
const connectedEdges = input.slice(1).map((v) => v.split(' ').map(Number));
let matrix = Array.from(Array(n + 1), () => Array());

for (let [a, b] of connectedEdges) {
  matrix[a].push(b);
  matrix[b].push(a);
}

deleteParent(matrix, 1);

let result = Array(n + 1).fill(-1);
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    result[matrix[i][j]] = i;
  }
}

console.log(result.slice(2).join('\n'));