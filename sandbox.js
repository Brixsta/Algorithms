const test = () => {
  const stack = [];
  const nums = [1, 4, 2, 39, 23, 11, 50];

  // fill stack
  for (let i = 0; i < nums.length; i++) {
    stack.push(nums[i]);
  }

  while (stack.length) {
    console.log(stack.pop());
  }
};

test();
