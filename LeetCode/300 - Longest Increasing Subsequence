var leetcode300 = function (nums) {
  const dp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  let max = -Infinity;

  for (let i = 0; i < dp.length; i++) {
    max = Math.max(max, dp[i]);
  }

  return max;
};

console.log(leetcode300([0, 1, 0, 3, 2, 3]));
