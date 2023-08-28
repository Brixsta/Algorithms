// LEETCODE 287
var findDuplicate = function (nums) {
  let init = 0;
  let slow = 0;
  let fast = 0;

  while (1) {
    fast = nums[nums[fast]];
    slow = nums[slow];
    if (fast === slow) break;
  }

  while (1) {
    console.log(init, slow);
    init = nums[init];
    slow = nums[slow];
    if (init === slow) break;
  }

  // slow: 3
  // init: 3
  return slow;
};
//floyds cyc

console.log(findDuplicate([1, 4, 4, 3, 2]));
