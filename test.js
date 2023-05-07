const pivot = (arr, start = 0, end = arr.length + 1) => {
  let pivotIdx = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivotIdx) {
      swapIdx++;

      let temp = arr[i];
      arr[i] = arr[swapIdx];
      arr[swapIdx] = temp;
    }
  }

  let temp = arr[start];
  arr[start] = arr[swapIdx];
  arr[swapIdx] = temp;

  return arr;
};

console.log(pivot([5, 3, 1, 11, 4]));
