var findDuplicate = function (nums) {
  let init = 0;
  let slow = 0;
  let fast = 0;

  while (true) {
    fast = nums[nums[fast]];
    slow = nums[slow];
    if (fast === slow) break;
  }

  while (true) {
    init = nums[init];
    slow = nums[slow];
    if (init === slow) break;
  }
  return slow;
};

console.log(findDuplicate([1, 2, 3, 4, 5, 2]));
