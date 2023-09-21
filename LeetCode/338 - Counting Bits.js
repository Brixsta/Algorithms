var countBits = function (n) {
  const dp = new Array(n + 1);
  let offset = 1;
  dp[0] = 0;

  for (let i = 1; i < n + 1; i++) {
    if (offset * 2 === i) offset = i;
    dp[i] = 1 + dp[i - offset];
  }

  return dp;
};

console.log(countBits(5));

// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101
