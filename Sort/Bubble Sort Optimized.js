const bubbleSort = (arr) => {
  let swapped;
  for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;
    for (let j = 0; j < arr.length - 1; j++) {
      console.log(arr, i);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped === false) break;
  }
  return arr;
};

console.log(bubbleSort([10, 5, 4, 3, 2, 1, 6, 7, 9, 8]));
