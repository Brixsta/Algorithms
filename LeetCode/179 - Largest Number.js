var largestNumber = function (nums) {
  if (nums.every((i) => i === 0)) return "0";
  nums = nums.map((i) => i.toString()).sort(compare);
  return nums.join("");
};

function compare(a, b) {
  if (a + b > b + a) {
    return -1;
  } else {
    return 1;
  }
}

console.log(largestNumber([3, 30, 34, 5, 9]));

// Input: nums = [3, 30, 34, 5, 9];
// Output: "9534330";
