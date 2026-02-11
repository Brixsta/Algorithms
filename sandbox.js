const calculate = (s) => {
  let num = 0;
  for (let char of s) {
    num = num * 10 + Number(char);
  }

  console.log(num, s);
};

calculate("4723291");
