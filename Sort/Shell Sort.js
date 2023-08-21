const shellSort = (arr) => {
  for (
    let interval = Math.floor(arr.length / 2);
    interval > 0;
    interval = Math.floor(interval / 2)
  ) {
    for (let i = interval; i < arr.length; i++) {
      let temp = arr[i];
      let j;
      for (j = i; j >= interval && arr[j - interval] > temp; j -= interval) {
        arr[j] = arr[j - interval];
      }
      arr[j] = temp;
    }
  }
  return arr;
};
//////////////////   USES A WHILE LOOP INSTEAD OF FOR LOOP DURING SWAPS   //////////////////

//   const shellSort = (arr) => {
//   for (
//     let gap = Math.floor(arr.length / 2);
//     gap > 0;
//     gap = Math.floor(gap / 2)
//   ) {
//     for (let i = gap; i < arr.length; i++) {
//       console.log(arr);
//       let temp = arr[i];
//       let j = i;
//       while (j >= gap && arr[j - gap] > temp) {
//         arr[j] = arr[j - gap];
//         j -= gap;
//       }
//       arr[j] = temp;
//     }
//   }
//   return arr;
// };

console.log(shellSort([5, 1, 4, 3, 2]));
