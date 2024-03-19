const binarySearch = (arr, start, end, target) => {
  let mid = Math.floor((start + end) / 2);

  if (start > end) {
    console.log("Sorry could not find it!");
    return;
  }

  if (arr[mid] < target) {
    return binarySearch(arr, mid + 1, end, target);
  } else if (arr[mid] > target) {
    return binarySearch(arr, start, mid - 1, target);
  }

  return `found ${target} on index ${mid}!`;
};

console.log(binarySearch([1, 2, 3, 4, 5], 0, 4, 5));
