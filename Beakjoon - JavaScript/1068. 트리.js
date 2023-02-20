const fs = require('fs');
const filePath = process.platform==='linux' ? '/dev/stdin':'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const deleteNode = (targetNode, tree, initial=false) => {
  let queue = tree[targetNode];
  
  tree[targetNode] = false;

  let index = 0;
  while (queue.length > index) {
    deleteNode(queue[index], tree);
    index++;
  }

  if (initial) {
    for (let i = 0; i < tree.length; i++) {
      let targetIndex;

      if (!tree[i]) continue;
      else targetIndex = tree[i].indexOf(targetNode);
      
      if (targetIndex !== -1) {
        tree[i].splice(targetIndex, 1);
      } 
    }
  }
}

const n = +input[0];
const parents = input[1].split(' ').map(Number);
const targetNode = +input[2];

let tree = Array.from(Array(n), () => Array());
let root;

for (let i = 0; i < n; i++) {
  const parent = parents[i];

  if (parent === -1) root = i;
  else {
    tree[parent].push(i);
  } 
}

if (targetNode === root) {
  console.log(0);
} else {
  deleteNode(targetNode, tree, true);

  let result = 0;
  for (let i = 0; i < n; i++) {
    if (typeof tree[i] === 'object' && tree[i].length === 0) {
      result++;
    }
  }

  console.log(result);
}