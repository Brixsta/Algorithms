class Node {
  constructor(val) {
    this.next = null;
    this.val = val;
  }
}

const myNode = new Node(11);
const myNode1 = new Node(121);
const myNode2 = new Node(22);

myNode.next = myNode1;
myNode1.next = myNode2;

let head = myNode;
while (head) {
  console.log(head.val);
  head = head.next;
}
