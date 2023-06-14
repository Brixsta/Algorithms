const fib = (num) => {
  let n1 = 0;
  let n2 = 1;

  while (num > 0) {
    let nextTerm = n1 + n2;
    console.log(n1);
    n1 = n2;
    n2 = nextTerm;
    num--;
  }
};

console.log(fib(10));
