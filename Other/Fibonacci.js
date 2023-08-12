const fib = (num) => {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  while (num > 0) {
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
    num--;
  }
  return n1;
};

console.log(fib(5));
