function isPrime(num) {
  if (num === 0 || num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function upToPrime(num) {
  const primes = [];
  while (num >= 2) {
    if (isPrime(num)) primes.push(num);
    num--;
  }

  return primes.sort((a, b) => a - b);
}

console.log(upToPrime(10));
