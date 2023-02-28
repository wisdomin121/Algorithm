const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];
const infos = input.slice(1).map((v) => v.split(' ').map(Number));
const tree = Array.from(Array(n + 1), () => []);

infos.map((info) => {
  const [from, to, dist] = info;

  tree[from].push([to, dist]);
  tree[to].push([from, dist]);
});

const solution = (startIndex) => {
  const isVisited = Array(n + 1).fill(false);
  const queue = [[startIndex, 0]];

  let mostFarNode = { node: 0, dist: 0 };

  while (queue.length > 0) {
    const [nowNode, nowDist] = queue.shift();

    if (isVisited[nowNode]) continue;
    else isVisited[nowNode] = true;

    if (mostFarNode.dist < nowDist) {
      mostFarNode = { node: nowNode, dist: nowDist };
    }

    for (let [nextNode, nextDist] of tree[nowNode]) {
      queue.push([nextNode, nextDist + nowDist]);
    }
  }

  return mostFarNode;
}

console.log(n === 1 ? 0 : solution(solution(1).node).dist);