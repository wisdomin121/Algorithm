const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

class PrinterQueue {
  constructor() {
    this.queue = [];
    this.size = 0;
  }

  enqueue(importance, index) {
    this.queue.push([index, importance]);
    this.size++;
  }

  dequeue() {
    let [nowIndex, nowImportance] = this.queue[0];

    if (this.check(nowImportance)) {
      this.queue = [...this.queue.slice(1)];
      this.size--;
      return nowIndex;
    } else {
      this.queue = [...this.queue.slice(1), this.queue[0]];
      return false;
    }
  }

  check(nowImportance) {
    for (let i = 1; i < this.size; i++) {
      if (this.queue[i][1] > nowImportance) {
        return false;
      }
    }

    return true;
  }
}

const n = +input[0];

let results = [];

for (let i = 1; i <= (n * 2); i += 2) {
  const [n, m] = input[i].split(' ').map(Number);
  const importances = input[i + 1].split(' ').map(Number);

  if (n === 1) {
    results.push(1);
    continue;
  }

  let queue = new PrinterQueue();
  for (let j = 0; j < importances.length; j++) {
    const importance = importances[j];
    queue.enqueue(importance, j);
  }

  let result = 1;
  while(true) {
    const dequeue = queue.dequeue();

    if (dequeue === m) {
      break;
    } else if (dequeue === false) {
      continue;
    } else {
      result++;
    }
  }

  results.push(result);
}

console.log(results.join('\n'));