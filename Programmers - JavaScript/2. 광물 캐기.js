const getArr = (minerals, totalPicks) => {
  const arr = [];
  let obj = { dia: 0, iron: 0, stone: 0 };

  for (let i = 0; i < minerals.length; i++) {
    if (i !== 0 && i % 5 === 0) {
      arr.push(obj);
      obj = { dia: 0, iron: 0, stone: 0 };
    }

    if (minerals[i] === 'diamond') obj.dia++;
    else if (minerals[i] === 'iron') obj.iron++;
    else obj.stone++;
  }

  if (obj.dia !== 0 || obj.iron !== 0 || obj.stone !== 0) arr.push(obj);

  while (arr.length > totalPicks) {
    arr.pop();
  }

  arr.sort((a, b) => {
    if (a.dia === b.dia && a.iron === b.iron) return b.stone - a.stone;
    else if (a.dia === b.dia) return b.iron - a.iron;

    return b.dia - a.dia;
  });

  return arr;
};

function solution(picks, minerals) {
  const arr = getArr(
    minerals,
    picks.reduce((a, b) => a + b)
  );
  let result = 0;

  for (let cnts of arr) {
    let nowPick;

    for (let i = 0; i < 3; i++) {
      if (picks[i] !== 0) {
        nowPick = i === 0 ? 'dia' : i === 1 ? 'iron' : 'stone';
        picks[i]--;
        break;
      }
    }

    if (!nowPick) break;
    else if (nowPick === 'dia') {
      result += cnts.dia + cnts.iron + cnts.stone;
    } else if (nowPick === 'iron') {
      result += cnts.dia * 5 + cnts.iron + cnts.stone;
    } else {
      result += cnts.dia * 25 + cnts.iron * 5 + cnts.stone;
    }
  }
  console.log(arr);
  return result;
}
