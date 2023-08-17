const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

// const bubbleSort = (arr) => {
//   let swapped;
//   for (let i = 0; i < arr.length - 1; i++) {
//     swapped = false;
//     for (let j = 0; j < arr.length - 1; j++) {
//       console.log(arr, i);
//       if (arr[j] > arr[j + 1]) {
//         swap(arr, j, j + 1);
//         swapped = true;
//       }
//     }
//     if (swapped === false) break;
//   }
//   return arr;
// };

// function swap(arr, idx1, idx2) {
//   let temp = arr[idx1];
//   arr[idx1] = arr[idx2];
//   arr[idx2] = temp;
// }

console.log(bubbleSort([10, 5, 4, 3, 2, 1, 6, 7, 9, 8]));
