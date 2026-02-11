var calculate = function (s) {
  let stack = [];
  let num = 0;
  let sign = "+";

  s = s.replace(/\s+/g, "");

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!isNaN(c)) {
      num = num * 10 + Number(c);
    }

    if (isNaN(c) || i === s.length - 1) {
      if (sign === "+") stack.push(num);
      if (sign === "-") stack.push(-num);
      if (sign === "*") stack.push(stack.pop() * num);
      if (sign === "/") stack.push(Math.trunc(stack.pop() / num));
      sign = c;
      num = 0;
    }
  }

  return stack.reduce((a, b) => a + b, 0);
};
