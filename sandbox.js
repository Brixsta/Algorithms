var calculate = function (s) {
  let stack = [];

  // remove spaces
  s = s.replace(/\s+/g, "");

  for (let i = 0; i < s.length; i++) {
    let number = "";

    while (i < s.length && !"*/+-".includes(s[i])) {
      number += s[i];
      i++;
    }

    // add number to the stack
    if (number.length) {
      stack.push(Number(number));
      i--;
    }

    // add operator to the stack
    if ("*/+-".includes(s[i])) {
      stack.push(s[i]);
    }

    // handle multiplication and divsion
    if (
      typeof stack[stack.length - 1] === "number" &&
      "*/".includes(stack[stack.length - 2]) &&
      typeof stack[stack.length - 3] === "number"
    ) {
      let num2 = stack.pop();
      let operator = stack.pop();
      let num1 = stack.pop();
      let result = 0;
      if (operator === "*") {
        result = num1 * num2;
      } else {
        result = Math.trunc(num1 / num2);
      }
      stack.push(result);
    }
  }
  // handle addition and subtraction
  console.log(stack);
  let result = stack[0];
  for (let i = 1; i < stack.length; i += 2) {
    let operator = stack[i];
    let num = stack[i + 1];

    if (operator === "+") {
      result += num;
    } else {
      result -= num;
    }
  }

  return result;
};

calculate(" 3+5 / 2 ");
