// var reverseWords = function (s) {
//   return s
//     .trim()
//     .split(" ")
//     .filter((i) => i !== "")
//     .reverse()
//     .join(" ");
// };

var reverseWords = function (s) {
  return s.trim().split(/\s/gm).reverse().join(" ");
};

console.log(reverseWords("          a good   example"));
