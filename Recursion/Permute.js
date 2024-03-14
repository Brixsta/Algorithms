const permute = (remaining, permutation) => {
  if (remaining.length == 0) {
    console.log(permutation.join(""));
  } else {
    for (let i = 0; i < remaining.length; i++) {
      let dupe = [...remaining];
      let removed = dupe.splice(i, 1);
      permutation.push(removed);
      permute(dupe, permutation);
      permutation.pop();
    }
  }
};

permute([1, 2, 3], []);
