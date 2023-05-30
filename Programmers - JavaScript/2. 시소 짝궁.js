function solution(weights) {
  let result = 0;

  // 같은 weight를 가진 사람을 찾아냄
  const obj = {};

  for (let weight of weights) {
    if (obj[weight]) {
      result += obj[weight];
      obj[weight]++;
    } else obj[weight] = 1;
  }

  // 같은 weight는 하나로 생각하기
  weights = Object.keys(obj).map(Number);

  for (let weight of weights) {
    if (weights.includes((weight * 2) / 3)) result += obj[weight] * obj[(weight * 2) / 3];
    if (weights.includes((weight * 2) / 4)) result += obj[weight] * obj[(weight * 2) / 4];
    if (weights.includes((weight * 3) / 4)) result += obj[weight] * obj[(weight * 3) / 4];
  }

  return result;
}
