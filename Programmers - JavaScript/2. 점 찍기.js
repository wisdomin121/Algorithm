// 24분 30초

const getMaxY = (x, d) => {
  return Math.sqrt(Math.pow(d, 2) - Math.pow(x, 2));
};

function solution(k, d) {
  let result = 0;

  for (let x = 0; x <= d; x += k) {
    const maxY = getMaxY(x, d);
    const count = parseInt(maxY / k) + 1;

    result += count;
  }

  return result;
}

console.log(solution(2, 4)); // 6
console.log(solution(1, 5)); // 26

// x2 + y2 <= d2 : 두 점 사이의 거리와 반지름을 비교하는 공식
// 우리는 이미 반지름을 알고 있어서, x나 y 둘 중에 하나만 넣어도 공식으로 풀 수 있음
// ==> for문 하나로 가능하다 !
