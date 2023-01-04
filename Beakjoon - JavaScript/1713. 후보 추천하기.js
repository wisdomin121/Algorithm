const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const n = parseInt(input[0]);
const total = parseInt(input[1]);
const arr = input[2].split(' ').map(Number);

let frame = [];
let cnts = {};

for (let i = 0; i < total; i++) {
  if (frame.includes(arr[i])) {
    cnts[arr[i]] += 1;
    continue;
  }

  if (frame.length >= n) {
    let minCntIdx = []; 
    let minCnt = 1000; 
    
    for (let j = 0; j < n; j++) {
      if (cnts[frame[j]] < minCnt) {
        minCntIdx = [j];
        minCnt = cnts[frame[j]];
      }
      else if (cnts[frame[j]] === minCnt) {
        minCntIdx.push(j);
      }
    }

    delete cnts[frame[minCntIdx[0]]];
    frame.splice(minCntIdx[0], 1);
  }

  frame.push(arr[i]);
  cnts[arr[i]] = 1;
}

frame.sort((a, b) => a-b);
console.log(frame.join(' '));