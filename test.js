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

console.log(shellSort([5, 1, 4, 3, 2]));
