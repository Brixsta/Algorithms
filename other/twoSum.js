const twoSum = (nums, target) => {
  let storage = {};
  for (let [index, num] of nums.entries()) {
    if (storage[num] !== undefined) return [storage[num], index];
    storage[target - num] = index;
  }
};

nums = [2, 7, 11, 15, 22, 25, 26, 29, 47, 52, 66, 75, 100];

console.log(twoSum(nums, 100));
