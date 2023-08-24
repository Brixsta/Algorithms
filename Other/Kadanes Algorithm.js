const kadanes = (arr) => {
  let sum = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    sum = Math.max(arr[i], sum + arr[i]);
    max = Math.max(max, sum);
    console.log(sum);
  }

  return max;
};

console.log(kadanes([1, -3, 5, 2, 3, -1, 0]));
//                   1  -3  5  2  3  -1  0          sum = 1  i = 1
//                   1  -3  5  2  3  -1  0          sum = -2  i = 2
//                   1  -3  5  2  3  -1  0          sum =  5  i = 3
//                   1  -3  5  2  3  -1  0          sum =  8  i = 4
//                   1  -3  5  2  3  -1  0          sum =  10  i = 5
