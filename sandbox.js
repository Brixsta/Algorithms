const toBinary = (num) => {
  let i = 1;
  let rem;
  let result = 0;
  while (num > 0) {
    rem = num % 2;
    result += rem * i;
    i *= 10;
    num = Math.floor(num / 2);
  }

  console.log(result);
};

toBinary(255);
