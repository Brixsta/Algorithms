var mergeNodes = function (head) {
  let dummy = new ListNode(9999, null);

  let curr = head.next;
  let tail = dummy;
  let score = 0;
  while (curr) {
    if (curr.val === 0) {
      let node = new ListNode(score, null);
      tail.next = node;
      tail = tail.next;
      score = 0;
    } else {
      score += curr.val;
    }
    curr = curr.next;
  }

  return dummy.next;
};
