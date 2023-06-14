const pivot = (arr, start = 0, end = arr.length - 1) => {
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

  return swapIdx;
};

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
