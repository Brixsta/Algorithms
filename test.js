// const kadanes = (arr, sub) => {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;

//     for (let j = i; j < i + sub; j++) {
//       if (i + sub > arr.length) {
//         break;
//       }
//       sum += arr[j];
//       max = Math.max(sum, max);
//     }
//   }
//   return max;
// };

// function kadanes(arr, size) {
//   let sum = arr.slice(0, size).reduce((a, c) => (a += c));
//   let max = sum;
//   for (let i = size; i < arr.length; i++) {
//     let prev = arr[i - size];
//     let curr = arr[i];
//     sum += curr;
//     sum -= prev;
//     max = Math.max(max, sum);
//   }
//   return max;
// }

console.log(kadanes([91, 13, 24, 12, -1, 7, 24, 110], 3));
