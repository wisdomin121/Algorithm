// 53분 10초

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((str) => str.trim());

const n = parseInt(input[0]);
const strs = input.slice(1);

const sameStrs = {};

for (const str of strs) {
  if (sameStrs[str[0]]) sameStrs[str[0]].push(str);
  else sameStrs[str[0]] = [str];
}

const results = [];

for (let key of Object.keys(sameStrs)) {
  const sameStr = sameStrs[key];

  if (sameStr.length === 1) continue;

  let maxLen = 1;
  let maxStrs = [sameStr[0], sameStr[1]];

  for (let i = 0; i < sameStr.length - 1; i++) {
    for (let j = i + 1; j < sameStr.length; j++) {
      const strOne = sameStr[i];
      const strTwo = sameStr[j];
      const checkLen = Math.min(strOne.length, strTwo.length);

      let len = 1;

      for (let k = 1; k < checkLen; k++) {
        if (strOne[k] === strTwo[k]) len++;
        else break;
      }

      if (maxLen < len) {
        maxLen = len;
        maxStrs = [strOne, strTwo];
      }
    }
  }

  results.push([maxLen, maxStrs]);
}

let maxLen = results[0][0];
let maxIdx = 0;

for (let i = 1; i < results.length; i++) {
  if (results[i][0] > maxLen) {
    maxLen = results[i][0];
    maxIdx = i;
  }
}

console.log(results[maxIdx][1].join('\n'));
