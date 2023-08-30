var majorityElement = function (nums) {
  let freq = 1;
  let maxNum = nums[0];
  let test = Math.floor(nums.length / 2) + 1;
  nums = nums.sort();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      freq++;
      if (freq === test) return nums[i];
    } else {
      freq = 1;
    }
  }
  return maxNum;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
