const binarySearch = (arr, num) => {
  let start = 0;
  let end = arr.length;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === num) {
      console.log(`found it on index ${mid}!`);
      return;
    }

    if (arr[mid] < num) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
};

binarySearch([1, 2, 3, 4, 5, 6], 1);
