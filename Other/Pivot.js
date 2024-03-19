const pivotFunc = (arr, i, k) => {
  let middle = Math.floor((i + k) / 2);
  let pivot = arr[middle];

  let l = i;
  let r = k;

  let done = false;

  while (done == false) {
    while (arr[l] < pivot) {
      l++;
    }
    while (arr[r] > pivot) {
      r--;
    }

    if (l >= r) {
      done = true;
    } else {
      let temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
      l++;
      r--;
    }
  }
  return l;
};

console.log(pivotFunc([5, 1, 6, 4, 2], 0, 4));

// const pivot = (arr, start = 0, end = arr.length - 1) => {
//   let pivotIdx = arr[start];
//   let swapIdx = start;

//   for (let i = start + 1; i < end + 1; i++) {
//     if (arr[i] < pivotIdx) {
//       swapIdx++;

//       let temp = arr[i];
//       arr[i] = arr[swapIdx];
//       arr[swapIdx] = temp;
//     }
//   }

//   let temp = arr[start];
//   arr[start] = arr[swapIdx];
//   arr[swapIdx] = temp;

//   return swapIdx;
// };
