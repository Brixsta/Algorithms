var addTwoNumbers = function (l1, l2) {
  let rem = 0;
  let dummy = new ListNode(99, null);
  let tail = dummy;

  while (l1 || l2 || rem) {
    let sum = 0;
    sum += rem;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    let node = new ListNode(sum % 10, null);
    rem = Math.floor(sum / 10);

    tail.next = node;
    tail = tail.next;
  }

  return dummy.next;
};
