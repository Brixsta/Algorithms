var productExceptSelf = function (nums) {
  const left = new Array(nums.length).fill(1);
  const right = new Array(nums.length).fill(1);
  const result = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < result.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
};

console.log(productExceptSelf([1, 2, 3, 4]));
