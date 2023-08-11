const getDigit = (num, i) => {
  return Math.floor(num / Math.pow(10, i)) % 10;
};

console.log(getDigit(530, 0));
