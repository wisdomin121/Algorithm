const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const schools = ['', ...input[1].trim().split(' ')];
const uvds = input
  .slice(2)
  .map((v) => v.split(' ').map(Number))
  .sort((a, b) => a[2] - b[2]);

const parents = new Array(n + 1).fill().map((_, i) => i);

const find = (value) => {
  if (parents[value] === value) return value;

  parents[value] = find(parents[value]);
  return parents[value];
};

const union = (a, b) => {
  a = find(a);
  b = find(b);

  if (a < b) parents[b] = a;
  else parents[a] = b;
};

let result = 0;

for (let [u, v, d] of uvds) {
  if (schools[u] === schools[v]) continue;
  if (find(u) === find(v)) continue;

  result += d;
  union(u, v);
}

for (let i = 1; i < n; i++) {
  if (find(i) !== find(i + 1)) {
    result = -1;
    break;
  }
}

console.log(result);
