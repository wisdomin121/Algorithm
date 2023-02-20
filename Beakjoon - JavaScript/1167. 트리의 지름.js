const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const v = +input[0];

const tree = Array.from(Array(v + 1), () => []);
for (let i = 1; i <= v; i++) {
  let [index, ...info] = input[i].split(' ').map(Number);

  for (let j = 0; j < info.length - 1; j += 2) {
    const [node, dist] = [info[j], info[j + 1]];
    
    tree[index].push([node, dist]);
  }
}

const solution = (startIndex) => {
  const isVisited = Array(v + 1).fill(false);
  const queue = [[startIndex, 0]];

  let mostFarNode = { node: 0, dist: 0 };
  let index = 0;

  while (queue[index]) {
    const [nowNode, nowDist] = queue[index];
    
    isVisited[nowNode] = true;

    if (mostFarNode.dist < nowDist) {
      mostFarNode = { node: nowNode, dist: nowDist };
    }

    for (let [nextNode, nextDist] of tree[nowNode]) {
      if (isVisited[nextNode]) continue;

      queue.push([nextNode, nextDist + nowDist]);
    }

    index++;
  }

  return mostFarNode;
}

console.log(v === 1 ? 0 : solution(solution(1).node).dist);