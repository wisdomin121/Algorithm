function solution(n, times) {
  let start = 1;
  let end = times[times.length - 1] * n;
  let mid = parseInt((start + end) / 2);

  while (start <= end) {
    const count = times.reduce((result, time) => result + parseInt(mid / time), 0);

    if (count >= n) end = mid - 1;
    else start = mid + 1;

    mid = parseInt((start + end) / 2);
  }

  return start;
}
