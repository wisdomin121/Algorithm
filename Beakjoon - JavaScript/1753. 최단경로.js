const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

class Heap {
  constructor(k) {
    this.queue = [{ vertex: k, cost: 0 }];
  }

  add(value) {
    this.queue.push(value);
    this.bubbleUp(this.queue.length - 1);
  }

  bubbleUp(index) {
    if (index < 1) return;

    const node = this.queue[index];
    const parentIndex = Math.floor((index - 1) / 2);
    const parentNode = this.queue[parentIndex];

    if (parentNode.cost <= node.cost) return;

    this.queue[index] = parentNode;
    this.queue[parentIndex] = node;

    this.bubbleUp(parentIndex);
  }

  remove() {
    const target = this.queue[0];

    if (this.queue.length === 1) {
      this.queue.pop();
    } else {
      this.queue.splice(0, 1);
    }

    return [target.vertex, target.cost];
  }
}

const makeList = (uvws) => {
  let list = Array(v + 1);

  for (let [u, v, w] of uvws) {
    if (list[u]) list[u].push({ vertex: v, cost: w });
    else list[u] = [{ vertex: v, cost: w }];
  }

  return list;
};

const dijkstra = (k, list) => {
  let heap = new Heap(k);
  let results = Array(v + 1).fill('INF');
  results[k] = 0;

  while (heap.queue.length > 0) {
    const [nowVertex, nowCost] = heap.remove();

    if (typeof list[nowVertex] === 'undefined') continue;
    if (results[nowVertex] < nowCost) continue;

    for (let i = 0; i < list[nowVertex].length; i++) {
      const child = list[nowVertex][i];

      if (results[child.vertex] <= results[nowVertex] + child.cost) continue;

      results[child.vertex] = results[nowVertex] + child.cost;
      heap.add({ vertex: child.vertex, cost: results[nowVertex] + child.cost });
    }
  }

  return results;
};

const [v, _] = input[0].split(' ').map(Number);
const k = +input[1];
const uvws = input.slice(2).map((v) => v.split(' ').map(Number));

const list = makeList(uvws);
const results = dijkstra(k, list);

console.log(results.slice(1).join('\n'));