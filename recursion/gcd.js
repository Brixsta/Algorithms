function gcd(n1, n2) {
  console.log(n1, n2);
  if (!n2) {
    return n1;
  }

  return gcd(n2, n1 % n2);
}

console.log(gcd(8, 12));
// gcd(32, 8) ➞ 8
