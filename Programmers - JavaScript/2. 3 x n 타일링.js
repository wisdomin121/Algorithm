// 27분 30초

function solution(n) {
  if (n % 2 === 1) return 0;

  const dp = new Array(n + 1).fill(0);
  dp[2] = 3;
  dp[4] = 11;

  for (let i = 6; i <= n; i += 2) {
    let addNum = dp[i - 2] * 3 + 2;

    for (let j = i - 4; j >= 2; j -= 2) {
      addNum += dp[j] * 2;
    }

    // ...?
    dp[i] = addNum % 1000000007;
  }

  return dp[n];
}
