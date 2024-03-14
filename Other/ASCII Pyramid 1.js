// ASCII PYRAMIDS

//*****
//****
//***
//**
//*

function pyramid(rows) {
  stars = "*****";

  for (let i = 0; i < rows; i++) {
    console.log(stars);
    stars = stars.slice(1);
  }
}

console.log(pyramid(5));
