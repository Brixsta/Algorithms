const bogoSort = (arr) => {
  let count = 1;
  while (!isSorted(arr)) {
    console.log(count);
    arr = shuffle(arr);
    count++;
  }

  return arr;
};

function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

function shuffle(arr) {
  let index = arr.length;
  let rand;
  while (index > 0) {
    rand = Math.floor(Math.random() * index);
    index--;
    [arr[rand], arr[index]] = [arr[index], arr[rand]];
  }
  return arr;
}

console.log(bogoSort([2, 1, 3, 92, 32, 13, 5, 2, 3, 5, 223, 112]));
