const quickSort = (arr) => {
  if (arr.length === 0) return '';

  const pivot = arr[0];
  const bigger = [];
  const smaller = [];

  for (let i = 1; i < arr.length; i++) {
    if (+(pivot + arr[i]) < +(arr[i] + pivot)) {
      bigger.push(arr[i]);
    } else {
      smaller.push(arr[i]);
    }
  }

  return quickSort(bigger) + pivot + quickSort(smaller);
};

function solution(numbers) {
  numbers = numbers.map((v) => (v = v.toString()));

  return quickSort(numbers);
}

console.log(solution([555, 565, 566, 55, 56, 5, 54, 544, 549]));
