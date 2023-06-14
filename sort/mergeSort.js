const merge = (arr1, arr2) => {
  const result = [];
  let i = 0;
  let k = 0;

  while (i < arr1.length && k < arr2.length) {
    if (arr1[i] < arr2[k]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[k]);
      k++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (k < arr2.length) {
    result.push(arr2[k]);
    k++;
  }
  return result;
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort([6, 7, 8, 12, 3, 9, 2]));
