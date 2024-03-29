const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};

console.log(insertionSort([6, 5, 12, 1, 3, 20]));

// const insertionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     let j = i;

//     while (j - 1 >= 0 && arr[j] < arr[j - 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j - 1];
//       arr[j - 1] = temp;
//       j--;
//     }
//   }

//   return arr;
// };

// console.log(insertionSort([4, 9, 3, 2, 4]));
