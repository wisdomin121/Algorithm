// 41분 39초

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...packs] = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let nowIdx = this.queue.length - 1;
    const nowNum = this.queue[nowIdx];

    while (0 < nowIdx) {
      const parentIdx = Math.floor((nowIdx - 1) / 2);
      const parentNum = this.queue[parentIdx];

      if (parentNum < nowNum) break;

      this.queue[parentIdx] = nowNum;
      this.queue[nowIdx] = parentNum;
      nowIdx = parentIdx;
    }
  }

  dequeue() {
    const result = this.queue[0];
    let lastNum = this.queue.pop();

    if (this.queue.length > 0) {
      this.queue[0] = lastNum;
      this.bubbleDown();
    }

    return result;
  }

  bubbleDown() {
    let nowIdx = 0;
    const nowNum = this.queue[nowIdx];
    const len = this.queue.length;

    while (true) {
      const leftIdx = 2 * nowIdx + 1;
      const rightIdx = 2 * nowIdx + 2;
      let leftNum;
      let rightNum;
      let swap;

      if (leftIdx < len) {
        leftNum = this.queue[leftIdx];

        if (nowNum > leftNum) {
          swap = leftIdx;
        }
      }

      if (rightIdx < len) {
        rightNum = this.queue[rightIdx];

        if (
          (typeof swap === 'undefined' && nowNum > rightNum) ||
          (typeof swap !== 'undefined' && leftNum > rightNum)
        ) {
          swap = rightIdx;
        }
      }

      if (typeof swap === 'undefined') break;

      this.queue[nowIdx] = this.queue[swap];
      this.queue[swap] = nowNum;
      nowIdx = swap;
    }
  }
}

const solution = () => {
  if (n === 1) return 0;

  const pq = new PriorityQueue();

  for (let i = 0; i < n; i++) {
    pq.enqueue(packs[i]);
  }

  let result = 0;

  while (pq.queue.length > 1) {
    const numOne = pq.dequeue();
    const numTwo = pq.dequeue();

    const addNum = numOne + numTwo;

    result += addNum;
    pq.enqueue(addNum);
  }

  return result;
};

console.log(solution());
