const caeser = (str, shift) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  const map = {};

  for (let i = 0; i < alphabet.length; i++) {
    let char = alphabet[i];

    map[char] = i + shift;
    if (map[char] > 25) {
      map[char] = map[char] - 26;
    } else if (map[char] < 0) {
      map[char] = map[char] + 26;
    }
  }

  for (let i = 0; i < str.length; i++) {
    let idx = map[str[i]];
    if (str[i] !== " ") {
      result += alphabet[idx];
    } else {
      result += " ";
    }
  }

  return result;
};
console.log(caeser("serr pbqr pnzc", 13)); //should decode to "FREE CODE CAMP"
