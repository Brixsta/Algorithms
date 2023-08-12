function fibonacci(num, memo) {
  memo = memo || {};
  if (num === 0 || num === 1) return num;
  if (memo[num]) {
    return memo[num];
  } else {
    const result = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
    memo[num] = result;
    return result;
  }
}

console.log(fibonacci(40));
