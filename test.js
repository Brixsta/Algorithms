var largestNumber = function (nums) {
  return nums
    .map((i) => Number(i))
    .sort((a, b) => b - a)
    .join("");
};

console.log(largestNumber([3, 30, 34, 5, 9]));

// Input: nums = [3,30,34,5,9]
// Output: "9534330"
