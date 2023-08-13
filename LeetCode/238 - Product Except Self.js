var productExceptSelf = function (nums) {
  const zeros = nums.filter((i) => i === 0).length;
  if (zeros === nums.length) return nums;

  const product = nums.reduce((a, c) => a * c);
  let withoutZero = nums.filter((i) => i !== 0).reduce((a, c) => a * c);

  const result = nums.map((i) => {
    if (i !== 0) {
      return product / i;
    } else if (zeros === 1) {
      return withoutZero / 1;
    } else {
      return 0;
    }
  });
  return result;
};
console.log(productExceptSelf([1, 0, 3, 2]));
