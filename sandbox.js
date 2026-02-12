var removeKdigits = function (num, k) {
  let stack = [];

  for (let i = 0; i < num.length; i++) {
    let curr = Number(num[i]);
    console.log(curr, stack);
    if (curr < Number(stack[stack.length - 1]) && k > 0) {
      k--;
      stack.pop();
      stack.push(num[i]);
    } else {
      stack.push(num[i]);
    }
  }
  if (num.length === 1) return "0";

  console.log(Number(stack.join("")).toString(), k);
  return Number(stack.join("")).toString();
};

removeKdigits("112", 1);

// "11"
