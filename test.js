const shellSort = (arr) => {
  for (
    let gap = Math.floor(arr.length / 2);
    gap > 0;
    gap = Math.floor(gap / 2)
  ) {
    for (let i = gap; i < arr.length; i++) {
      let j = i;

      while (j - gap >= 0 && arr[j] < arr[j - gap]) {
        let temp = arr[j];
        arr[j] = arr[j - gap];
        arr[j - gap] = temp;
        j -= gap;
      }
    }
  }
  return arr;
};

console.log(shellSort([8, 7, 6, 5, 4, 3, 2, 1]));
