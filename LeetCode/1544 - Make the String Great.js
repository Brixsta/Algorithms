var makeGood = function (s) {
  const stack = [];

  for (let char of s) {
    if (
      stack.length &&
      char.toLowerCase() === stack[stack.length - 1].toLowerCase() &&
      char !== stack[stack.length - 1]
    ) {
      stack.pop();
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
};
