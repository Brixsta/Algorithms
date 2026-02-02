var reverseList = function (head) {
  let prev = null;

  while (head) {
    let next = head.next;

    head.next = prev;

    prev = head; // update the prev for the following iteration

    head = next;
  }

  return prev;
};
