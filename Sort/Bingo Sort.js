function bingoSort(arr) {
  let bingo = Math.min(...arr);
  let nextBingo = Math.max(...arr);
  let largest = nextBingo;
  let idx = 0;

  while (bingo < nextBingo) {
    let start = idx;
    for (let i = start; i < arr.length; i++) {
      if (arr[i] === bingo) {
        let temp = arr[i];
        arr[i] = arr[idx];
        arr[idx] = temp;
        idx++;
      } else if (arr[i] < nextBingo) {
        nextBingo = arr[i];
      }
    }
    bingo = nextBingo;
    nextBingo = largest;
  }

  return arr;
}

console.log(bingoSort([5, 1, 4, 3, 4, 2]));
