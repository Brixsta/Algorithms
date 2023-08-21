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

console.log(shellSort([201, 5, 4, 3, 2, 1, 200]));
