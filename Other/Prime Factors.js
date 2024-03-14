const primeFactors = (num) => {
  if (num <= 1) return "Invalid number.";
  const factors = [];
  let count = 2;

  while (num !== 1) {
    if (num % count === 0) {
      factors.push(count);
      num = num / count;
      count = 2;
    } else {
      count++;
    }
  }
  return factors;
};

console.log(primeFactors(16));
