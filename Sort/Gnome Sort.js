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

console.log(gnomeSort([5, 1, 4, 3, 2]));
