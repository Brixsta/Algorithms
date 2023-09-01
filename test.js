var minSubArrayLen = function (target, nums) {
  let sum = 0;
  let arr = [];
  let left = 0;
  let min = Infinity;
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i]);
    sum += nums[i];
    while (sum >= target) {
      min = Math.min(min, arr.length);
      sum -= nums[left];
      arr.shift();
      left++;
    }
  }
  return min !== Infinity ? min : 0;
};
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
//                                1     3     5
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.
