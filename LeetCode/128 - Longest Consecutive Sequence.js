// SOLUTION WITH SET AND SORTING
// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;
//   nums = [...new Set(nums.sort((a, b) => a - b))];
//   let max = 1;
//   let curr = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] > nums[i - 1] && Math.abs(nums[i] - nums[i - 1]) === 1) {
//       curr++;
//       max = Math.max(max, curr);
//     } else {
//       curr = 1;
//     }
//   }
//   return max;
// };

// SORTING W/NO SET SOLUTION
// var longestConsecutive = function (nums) {
//   if (nums.length === 0 || nums === null) return 0;
//   nums.sort((a, b) => a - b);
//   let count = 1;
//   let max = 1;
//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i + 1] === nums[i]) {
//       continue;
//     } else if (
//       nums[i + 1] !== nums[i] &&
//       nums[i + 1] > nums[i] &&
//       Math.abs(nums[i + 1] - nums[i]) < 2
//     ) {
//       count++;
//       max = Math.max(count, max);
//     } else {
//       count = 1;
//     }
//   }
//   return max;
// };

// NO SORTING SOLUTION
var longestConsecutive = function (nums) {
  if (nums.length === 0) return nums;
  let set = new Set(nums);
  let count = 0;
  let max = 1;
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      count = 0;

      while (set.has(nums[i] + count)) {
        count++;
      }
      max = Math.max(max, count);
    }
  }
  return max;
};

console.log(longestConsecutive([1, 2, 0, 1]));
