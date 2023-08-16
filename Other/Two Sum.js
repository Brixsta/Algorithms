const twoSum = (arr, target) => {
  let storage = {};
  for (let i = 0; i < arr.length; i++) {
    if (storage[arr[i]] !== undefined) return [storage[arr[i]], arr[i]];
    storage[target - arr[i]] = arr[i];
  }
  return -1;
};

// const twoSum = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       const sum = arr[i] + arr[j];
//       if (sum === target) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
//   return -1;
// };

// const twoSum = (arr, target) => {
//   for (let i = 0; i < arr.length; i++) {
//     const numToFind = target - arr[i];
//     if (arr.includes(numToFind) && arr.indexOf(numToFind) !== i) {
//       return [arr[i], numToFind];
//     }
//   }
//   return -1;
// };

console.log(twoSum([1, 2, 3, 4, 5], 3));
