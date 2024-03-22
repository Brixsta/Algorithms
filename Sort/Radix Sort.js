///////////////////////// HELPER FUNCTIONS /////////////////////
const maxDigit = (num) => {
  return Math.floor(Math.log10(num)) + 1;
};

const createBuckets = () => {
  let buckets = [];
  for (let i = 0; i < 10; i++) {
    buckets[i] = [];
  }
  return buckets;
};
///////////////////////////////////////////////////////////////

const radixSort = (arr) => {
  let max = -Infinity;

  // find the max digit
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (maxDigit(current) > max) max = maxDigit(current);
  }

  // create empty buckets 0-9
  let buckets = createBuckets();
  let pow10 = 1;

  for (let i = 0; i < max; i++) {
    for (let j = 0; j < arr.length; j++) {
      let last = Math.floor(arr[j] / pow10) % 10;
      buckets[last].push(arr[j]);
    }
    pow10 *= 10;
    arr = buckets.flat();
    // clear out buckets, and renew
    buckets = createBuckets();
  }
  return arr;
};

console.log(radixSort([5111, 4, 13, 5, 1111]));
