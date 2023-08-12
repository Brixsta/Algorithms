function fibonacci(num, memo) {
  memo = memo || {};
  if (num === 0 || num === 1) return num;
  if (memo[num]) {
    return memo[num];
  } else {
    return (memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo));
  }
}

// function fibonacci(num) {
//   if (num === 0 || num === 1) return num;

//   return fibonacci(num - 1) + fibonacci(num - 2);
// }

console.log(fibonacci(50));

// 0 1 1 2 3 5 8
