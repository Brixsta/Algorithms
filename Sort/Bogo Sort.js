const isSorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
};

const shuffle = (arr) => {
  let count = arr.length;
  let temp;
  let index;

  while (count > 0) {
    index = Math.floor(Math.random() * count);
    count--;

    temp = arr[index];
    arr[index] = arr[count];
    arr[count] = temp;
  }

  return arr;
};

const bogoSort = (arr) => {
  if (isSorted(arr)) return arr;
  let i = 1;
  while (!isSorted(arr)) {
    console.log(i);
    arr = shuffle(arr);
    i++;
  }
  return arr;
};

console.log(bogoSort([5, 34, 32, 4, 3, 12, 22, 90, 23]));
