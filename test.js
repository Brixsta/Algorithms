const isPrime = (num) => {
  if (num === 0 || num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const sieve = (num) => {
  const result = [];
  while (num >= 2) {
    if (isPrime(num)) result.push(num);
    num--;
  }

  return result.sort();
};

console.log(sieve(10));
