var removeDuplicates = function (s, k) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (stack.length && stack[stack.length - 1][0] === char) {
      stack[stack.length - 1][1]++;

      if (stack[stack.length - 1][1] === k) stack.pop();
    } else {
      stack.push([char, 1]);
    }
  }

  let result = "";

  for (let i = 0; i < stack.length; i++) {
    let char = stack[i][0];
    let freq = stack[i][1];

    while (freq > 0) {
      result += char;
      freq--;
    }
  }

  return result;
};
