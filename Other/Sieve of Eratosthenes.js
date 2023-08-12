const sieve = (input) => {
  const arr = [];
  const primes = [];

  for (let i = 0; i <= input; i++) {
    arr.push(i);
  }

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== false) primes.push(arr[i]);

    for (let j = i + i; j < arr.length; j += i) {
      console.log(`i: ${i} arr[j]: ${arr[j]}`);
      arr[j] = false;
    }
  }

  return primes;
};

console.log(sieve(100));
