function gnomeSort(arr) {
  let index = 0;

  while (index < arr.length) {
    if (index === 0) index++;
    if (arr[index] >= arr[index - 1]) {
      index++;
    } else {
      let temp = arr[index];
      arr[index] = arr[index - 1];
      arr[index - 1] = temp;
      index--;
    }
  }
  return arr;
}

// CLEANER VERSION OF GNOME SORT
// const gnomeSort = (arr) => {
//   let i = 1;

//   while (i < arr.length) {
//     if (i === 0 || arr[i] >= arr[i - 1]) {
//       i++;
//     } else {
//       [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
//       i--;
//     }
//   }
//   return arr;
// };

console.log(gnomeSort([5, 1, 4, 3, 2]));
