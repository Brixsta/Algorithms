var addTwoNumbers = function (l1, l2) {
  let l1rev = reverseList(l1);
  let l2rev = reverseList(l2);
  let dummy = new ListNode(99, null);
  let tail = dummy;

  let rem = 0;

  while (l1rev || l2rev || rem) {
    let sum = 0;
    sum += rem;

    if (l1rev) {
      sum += l1rev.val;
      l1rev = l1rev.next;
    }

    if (l2rev) {
      sum += l2rev.val;
      l2rev = l2rev.next;
    }

    rem = Math.floor(sum / 10);
    let node = new ListNode(sum % 10, null);
    tail.next = node;
    tail = tail.next;
  }

  return reverseList(dummy.next);
};

const reverseList = (head) => {
  let curr = head;
  let prev = null;

  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};
