var reverse = function (x) {
  let output = 0;
  while (x !== 0) {
    output = output * 10 + (x % 10);
    x = (x - (x % 10)) / 10;
  }
  return output;
};

// var reverse = function (x) {
//   let isNegative = false;
//   if (x < 0) isNegative = true;
//   x = Math.abs(x);
//   let result = Number(x.toString().split("").reverse().join(""));
//   if (isNegative) result *= -1;
//   if (result > Math.pow(2, 31) || result < Math.pow(-2, 31)) return 0;
//   return result;
// };

// var reverse = function (x) {
//     let isNegative = false;
//     if (x < 0) isNegative = true;
//     x = Math.abs(x).toString().split("");

//     let l = 0;
//     let r = x.length - 1;

//     while (l < r) {
//       [x[l], x[r]] = [x[r], x[l]];
//       l++;
//       r--;
//     }

//     x = Number(x.join(""));
//     if (isNegative) x *= -1;

//     return x < Math.pow(2, 31) && x > Math.pow(-2, 31) ? x : 0;
//   };

// var reverse = function (x) {
//     let isNegative = false;
//     if (x < 0) isNegative = true;
//     x = Math.abs(x).toString().split("");

//     for (let i = 0; i < Math.floor(x.length / 2); i++) {
//       let temp = x[i];
//       x[i] = x[x.length - 1 - i];
//       x[x.length - 1 - i] = temp;
//     }

//     x = Number(x.join(""));
//     if (isNegative) x *= -1;

//     return x < Math.pow(2, 31) && x > Math.pow(-2, 31) ? x : 0;
//   };

console.log(reverse(-123));

// Input: x = -123;
// Output: -321;
