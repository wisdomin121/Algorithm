const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, _] = input[0].split(' ').map(Number);
const pokemonsArr = input.slice(1, n + 1).map((v) => v.trim());
const pokemonsMap = new Map(pokemonsArr.map((v, i) => [v, i + 1]));
const problems = input.slice(n + 1).map((v) => v.trim());

const results = [];

for (let problem of problems) {
  // 문자열일 때
  if (Number.isNaN(+problem)) {
    results.push(pokemonsMap.get(problem));
  }

  // 숫자일 때
  else {
    problem = +problem - 1;

    results.push(pokemonsArr[problem]);
  }
}

console.log(results.join('\n'));
