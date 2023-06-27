const longestSubArray = (arr, num) => {
  let maxSum = arr.slice(0, num).reduce((a, c) => (a += c));

  let tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
};

console.log(longestSubArray([45, 100, 5, 4, 91, 10, 100, 100, 100], 3));
