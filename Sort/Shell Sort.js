const shellSort = (arr) => {
  for (
    let interval = Math.floor(arr.length / 2);
    interval > 0;
    interval = Math.floor(interval / 2)
  ) {
    for (let i = interval; i < arr.length; i++) {
      let current = arr[i];
      let j;
      for (j = i; j >= interval && arr[j - interval] > current; j -= interval) {
        arr[j] = arr[j - interval];
      }
      arr[j] = current;
    }
  }
  return arr;
};
//////////////////   USES A WHILE LOOP INSTEAD OF FOR LOOP DURING SWAPS   //////////////////

// const shellSort = (arr) => {
//   for (
//     let interval = Math.floor(arr.length / 2);
//     interval > 0;
//     interval = Math.floor(interval / 2)
//   ) {
//     for (let i = interval; i < arr.length; i++) {
//       console.log(arr);
//       let current = arr[i];
//       let j = i;
//       while (j >= interval && arr[j - interval] > current) {
//         arr[j] = arr[j - interval];
//         j -= interval;
//       }
//       arr[j] = current;
//     }
//   }
//   return arr;
// };

console.log(shellSort([5, 1, 4, 3, 2]));
