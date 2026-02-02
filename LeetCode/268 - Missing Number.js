var missingNumber = function (nums) {
  let sum = 0;
  let total = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (let i = 0; i <= nums.length; i++) {
    total += i;
  }

  return total - sum;
};
console.log(missingNumber([5, 0, 3, 2, 4]));
