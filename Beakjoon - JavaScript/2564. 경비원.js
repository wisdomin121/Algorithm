const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const [width, height] = input[0].split(' ').map(Number);
const n = parseInt(input[1]);
const positions = input.slice(2, 2 + n).map((v) => v.split(' ').map(Number));
const dong = input[input.length-1].split(' ').map(Number);

const dongLR = [1, 2].includes(dong[0]) ? [dong[1], width - dong[1]] : [dong[1], height - dong[1]];

let result = 0;
for (let i = 0; i < n; i++) {
  const [direction, position] = positions[i];
  const lr = [1, 2].includes(direction) ? [position, width - position] : [position, height - position]

  switch (dong[0]) {
    case 1:
      if (direction === 1) result += Math.abs(dong[1] - position);
      else if (direction === 2) result += Math.min(dongLR[0] + height + lr[0], dongLR[1] + height + lr[1]);
      else if (direction === 3) result += (dongLR[0] + lr[0]);
      else if (direction === 4) result += (dongLR[1] + lr[0]);
      break;
    
    case 2:
      if (direction === 1) result += Math.min(dongLR[0] + height + lr[0], dongLR[1] + height + lr[1]);
      else if (direction === 2) result += Math.abs(dong[1] - position);
      else if (direction === 3) result += (dongLR[0] + lr[1]);
      else if (direction === 4) result += (dongLR[1] + lr[1]);
      break;
    
    case 3:
      if (direction === 1) result += (dongLR[0] + lr[0]);
      else if (direction === 2) result += (dongLR[1] + lr[0]);
      else if (direction === 3) result += Math.abs(dong[1] - position);
      else if (direction === 4) result += Math.min(lr[0] + width + dongLR[0], lr[1] + width + dongLR[1]);
      break;

    case 4:
      if (direction === 1) result += (dongLR[0] + lr[1]);
      else if (direction === 2) result += (dongLR[1] + lr[1]);
      else if (direction === 3) result += Math.min(lr[0] + width + dongLR[0], lr[1] + width + dongLR[1]);
      else if (direction === 4) result += Math.abs(dong[1] - position);
      break;
  }
}

console.log(result);
