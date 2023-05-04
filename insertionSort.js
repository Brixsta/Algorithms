const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      console.log(`current: ${current}`);
      console.log(`arr: ${arr}`);
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
};

console.log(insertionSort([6, 5, 12, 1, 3, 20]));
