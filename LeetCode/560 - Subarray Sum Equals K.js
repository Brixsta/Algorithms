// BRUTE FORCE
// const subarraySum = (nums, k) => {
//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let sum = nums[i];
//     let j = i + 1;
//     if (sum === k) count++;
//     while (j < nums.length) {
//       sum += nums[j];
//       if (sum === k) {
//         count++;
//       }
//       j++;
//     }
//   }
//   return count;
// };
console.log(subarraySum([1, 1, 1], 2));
