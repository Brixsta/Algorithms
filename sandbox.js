var numberOfWeakCharacters = function (properties) {
  const stack = [];

  for (let i = 0; i < properties.length; i++) {
    let atk = properties[i][0];
    let def = properties[i][1];

    if (!stack.length) stack.push([atk, def]);

    if (
      stack.length &&
      atk > stack[stack.length - 1][0] &&
      def > stack[stack.length - 1][1]
    ) {
      console.log("HERE", atk, def);
      stack.push([atk, def]);
    }
  }
  console.log(stack);
  return stack.length;
};

numberOfWeakCharacters("[[5,5],[6,3],[3,6]]");
