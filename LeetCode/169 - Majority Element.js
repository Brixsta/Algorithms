// FREQUENCY COUNTER SOLUTION
// var majorityElement = function (nums) {
//     let test = Math.floor(nums.length / 2) + 1;
//     const map = {};

//     for (let i = 0; i < nums.length; i++) {
//       map[nums[i]] = map[nums[i]] + 1 || 1;
//       if (map[nums[i]] === test) return nums[i];
//     }
//   };

// O(1) SPACE COMPLEXITY SOLUTION
// var majorityElement = function (nums) {
//     let freq = 1;
//     let maxNum = nums[0];
//     let test = Math.floor(nums.length / 2) + 1;
//     nums = nums.sort();
//     for (let i = 1; i < nums.length; i++) {
//       if (nums[i] === nums[i - 1]) {
//         freq++;
//         if (freq === test) return nums[i];
//       } else {
//         freq = 1;
//       }
//     }
//     return maxNum;
//   };

// SHOW-OFF SOLUTION xD
var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
