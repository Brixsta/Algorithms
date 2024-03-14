// ASCII PYRAMIDS

//*
//**
//***
//****
//*****

function pyramid(rows) {
  let stars = "";

  for (let i = 0; i < rows; i++) {
    stars += "*";

    console.log(stars);
  }
}

console.log(pyramid(5));
