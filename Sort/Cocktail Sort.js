const cocktail = (arr) => {
  let swapped;
  let start = 0;
  let end = arr.length - 1;

  do {
    swapped = false;
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        sort(arr, i, i + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
    end--;

    for (let i = end - 1; i >= start; i--) {
      if (arr[i] > arr[i + 1]) {
        sort(arr, i, i + 1);
        swapped = true;
      }
    }
    start++;
  } while (swapped);
  return arr;
};

function sort(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

console.log(cocktail([5, 1, 4, 2, 3]));
