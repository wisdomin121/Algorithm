const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim());

const titles = input.slice(1);
const cntsObj = {};

for (let title of titles) {
  if (cntsObj[title]) cntsObj[title]++;
  else cntsObj[title] = 1;
}

// const cntsArr = Object.entries(cntsObj);
let cntsArr = [];
for (let title in cntsObj) {
  cntsArr.push([title, cntsObj[title]]);
}

// cntsArr.sort((a, b) => {
//   if (a[1] === b[1]) {
//     if (a[0] > b[0]) {
//       return 1;
//     } else {
//       return -1;
//     }
//   }

//   return b[1] - a[1];
// });
cntsArr.sort((a, b) => {
  if (a[1] > b[1]) return -1;
  if (a[1] < b[1]) return 1;

  if (a[0] > b[0]) return 1;
  if (a[0] < b[0]) return -1;
});

console.log(cntsArr[0][0]);
