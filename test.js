const kadanes = (nums) => {
  let max = nums[0];
  let sum = max;
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(max, sum);
  }
  return max;
};

console.log(kadanes([1, 0, -3, 4, 2, 5, -1, -6, 4]));
