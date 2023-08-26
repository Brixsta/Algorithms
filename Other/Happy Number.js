const happyNumber = (num) => {
  let set = new Set();
  while (true) {
    if (num === 1) return true;
    num = num
      .toString()
      .split("")
      .map((i) => Number(i) ** 2)
      .reduce((a, c) => (a += c));
    if (set.has(num)) return false;
    set.add(num);
  }
};

console.log(happyNumber(19));

// Input: n = 19
// Output: True
// 19 is Happy Number,
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 0^2 = 1
// As we reached to 1, 19 is a Happy Number.

// Examples of Happy Numbers:
//1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100
