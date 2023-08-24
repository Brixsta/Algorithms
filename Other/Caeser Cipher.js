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

// CHAT GPT SOLUTION PRETTY COOL!!
// function caesar(text, shift) {
//   let result = "";

//   for (let i = 0; i < text.length; i++) {
//     let char = text[i];
//     if (char.match(/[a-zA-Z]/)) {
//       const isUpperCase = char === char.toUpperCase();
//       const offset = isUpperCase ? 65 : 97;
//       const shiftedCharCode =
//         ((char.charCodeAt(0) - offset + shift) % 26) + offset;
//       const shiftedChar = String.fromCharCode(shiftedCharCode);
//       result += shiftedChar;
//     } else {
//       result += char; // If character is not a letter, leave it unchanged
//     }
//   }

//   return result;
// }
// console.log(caesar("serr pbqr pnzc", 13)); //should decode to "FREE CODE CAMP"
