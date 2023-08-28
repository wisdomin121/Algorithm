// 13분 3초

function solution(want, number, discount) {
  let result = 0;

  for (let i = 0; i < discount.length - 9; i++) {
    const saleItems = new Map();

    for (let item of discount.slice(i, i + 10)) {
      if (saleItems.has(item)) {
        saleItems.set(item, saleItems.get(item) + 1);
      } else {
        saleItems.set(item, 1);
      }
    }

    for (let j = 0; j < want.length; j++) {
      const wantItem = want[j];
      const wantCnt = number[j];

      if (saleItems.get(wantItem) !== wantCnt) break;
      if (j === want.length - 1) result++;
    }
  }

  return result;
}

const datas = [
  {
    want: ['banana', 'apple', 'rice', 'pork', 'pot'],
    number: [3, 2, 2, 2, 1],
    discount: [
      'chicken',
      'apple',
      'apple',
      'banana',
      'rice',
      'apple',
      'pork',
      'banana',
      'pork',
      'rice',
      'pot',
      'banana',
      'apple',
      'banana',
    ],
  },
  {
    want: ['apple'],
    number: [10],
    discount: [
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
      'banana',
    ],
  },
];

for (let data of datas) {
  console.log(solution(data.want, data.number, data.discount));
}
