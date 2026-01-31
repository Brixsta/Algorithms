var partitionLabels = function (s) {
  const last = {};
  let end = 0;
  let start = 0;
  const partion = [];

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];

    last[letter] = s.lastIndexOf(letter);
  }

  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    end = Math.max(end, last[letter]);

    if (end === i) {
      partion.push(end - start + 1);
      start = i + 1;
    }
  }
  return partion;
};
