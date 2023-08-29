// SPLICE SOLUTION
// var rotate = function (nums, k) {
//     k %= nums.length;
//     const temp = nums.splice(nums.length - k, k);
//     nums.unshift(...temp);
//     return nums;
//   };

// REVERSE SOLUTION
// var rotate = function (nums, k) {
//   if (nums === null || nums.length === 0) {
//     return;
//   }
//   k = k % nums.length;
//   if (k === 0) {
//     return;
//   }
//   nums.reverse();

//   reverse(nums, 0, k - 1);
//   return nums;
//   reverse(nums, k, nums.length - 1);
//   return nums;
// };

// function reverse(arr, start, end) {
//   while (start < end) {
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
//     start++, end--;
//   }
// }

var rotate = function (nums, k) {
  k %= nums.length;
  const dupe = [...nums];
  for (let i = 0; i < nums.length; i++) {
    let idx = i + k;
    if (idx > dupe.length - 1) idx -= dupe.length;
    nums[idx] = dupe[i];
  }
  return nums;
};

console.log(rotate([1, 2], 3));

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
