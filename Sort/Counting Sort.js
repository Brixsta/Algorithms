const countingSort = (arr) => {
  const max = Math.max(...arr);
  const countArr = Array(max + 1);
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!countArr[arr[i]]) {
      countArr[arr[i]] = 0;
    }
    countArr[arr[i]]++;
  }

  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] > 0) {
      result.push(i);
      countArr[i]--;
    }
  }
  return result;
};

console.log(countingSort([20, 1, 6, 3, 3, 3, 2, 4, 5, 5, 20]));
