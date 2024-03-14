// ASCII PYRAMIDS

//    *
//   **
//  ***
// ****
//*****

function pyramid(rows) {
  let rhs = "";
  let lhs = Array(rows).fill(" ").join(" ");
  for (let i = 0; i < rows; i++) {
    lhs = lhs.slice(1);
    rhs += "*";
    console.log(lhs + rhs);
  }
}

pyramid(4);
