// 58분 30초

function solution(clothes) {
  const clothesObj = {};

  for (let [name, type] of clothes) {
    if (clothesObj[type]) clothesObj[type] += 1;
    else clothesObj[type] = 1;
  }

  const result = Object.entries(clothesObj).reduce((acc, [_, cnt]) => {
    return acc * (cnt + 1);
  }, 1);

  return result - 1;
}
