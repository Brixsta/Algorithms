var permute = function (nums) {
  if (nums.length === 0) return [[]];

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let remaining = nums.slice(0, i).concat(nums.slice(i + 1));

    const perms = permute(remaining);

    for (const p of perms) {
      result.push([current, ...p]);
    }
  }

  return result;
};

permute([1, 2, 3]);
