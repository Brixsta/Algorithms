// PIVOT FUNCTION

// [1, 3, 5, 9, 6]

function pivotFunc(arr, i, k) {
  let pivot = arr[i];
  let swapIdx = 0;

  for (let x = 1; x <= k; x++) {
    if (arr[x] <= pivot) {
      swapIdx++;
      let temp = arr[x];
      arr[x] = arr[swapIdx];
      arr[swapIdx] = temp;
    }
  }

  let temp = arr[i];
  arr[i] = arr[swapIdx];
  arr[swapIdx] = temp;

  return arr[swapIdx];
}

console.log(pivotFunc([6, 5, 4, 2, 9], 0, 4));
