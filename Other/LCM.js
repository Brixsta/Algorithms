const primeFactors = (num) => {
  if (num <= 1) return "Invalid number.";
  const factors = [];
  const result = {};
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

  for (let i = 0; i < factors.length; i++) {
    let num = factors[i];
    if (!result[num]) {
      result[num] = 1;
    } else {
      result[num]++;
    }
  }

  return result;
};

const LCM = (num1, num2) => {
  const num1Primes = primeFactors(num1);
  const num2Primes = primeFactors(num2);
  const result = [];

  for (let key in num1Primes) {
    if (!num2Primes[key]) {
      result.push(Math.pow(Number(key), num1Primes[key]));
    } else {
      result.push(
        Math.max(
          Math.pow(Number(key), num1Primes[key]),
          Math.pow(Number(key), num2Primes[key])
        )
      );
    }
  }
  for (let key in num2Primes) {
    if (!num1Primes[key]) {
      result.push(Math.pow(Number(key), num2Primes[key]));
    }
  }

  return result.reduce((a, c) => (a *= c));
};

console.log(LCM(24, 5));

// You can find the LCM by taking (24*5)/GCD
