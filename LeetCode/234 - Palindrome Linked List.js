var isPalindrome = function (head) {
  const result = [];

  while (head) {
    result.push(head.val);
    head = head.next;
  }

  for (
    let start = 0, end = result.length - 1;
    start < Math.floor(result.length / 2);
    start++, end--
  ) {
    if (result[start] !== result[end]) return false;
  }

  return true;
};
