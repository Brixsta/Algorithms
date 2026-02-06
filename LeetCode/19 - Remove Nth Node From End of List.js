var removeNthFromEnd = function (head, n) {
  let curr = head;
  let len = 0;
  while (curr) {
    len++;
    curr = curr.next;
  }

  let skips = len - n;
  let dummy = new ListNode(999, null);
  let newHead = dummy;
  curr = head;

  while (curr) {
    if (skips !== 0) {
      let node = new ListNode(curr.val);
      newHead.next = node;
      newHead = newHead.next;
    }
    curr = curr.next;
    skips--;
  }
  dummy = dummy.next;
  return dummy;
};
