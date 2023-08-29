var rotate = function (nums, k) {
  k %= nums.length;
  if (nums.length === 1) return nums;
  const dupe = [...nums];
  for (let i = 0; i < nums.length; i++) {
    let idx = i + k;
    if (idx > dupe.length - 1) idx -= dupe.length;
    nums[idx] = dupe[i];
  }
  return nums;
};
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));

// // Input: nums = [1,2,3,4,5,6,7], k = 3
// // Output: [5,6,7,1,2,3,4]
// // Explanation:
// // rotate 1 steps to the right: [7,1,2,3,4,5,6]
// // rotate 2 steps to the right: [6,7,1,2,3,4,5]
// // rotate 3 steps to the right: [5,6,7,1,2,3,4]
