// ASCII PYRAMIDS

//*
//**
//***
//****
//*****
//****
//***
//**
//*

function pyramid(peak) {
  let stars = "";

  for (let i = 0; i < peak * 2 - 1; i++) {
    if (i < peak) {
      stars += "*";
    } else {
      stars = stars.slice(1);
    }

    console.log(stars);
  }
}

console.log(pyramid(10));
