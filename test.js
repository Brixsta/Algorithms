const euclid = (a, b) => {
  while (a !== b) {
    console.log(a, b);
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  return a;
};

console.log(euclid(234, 51));
