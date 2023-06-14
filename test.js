class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let node = new Node(data);
    this.length++;
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  unshift(data) {
    if (!this.head) {
      console.log("There are no nodes to unshift!");
      return;
    } else {
      let newNode = new Node(data);
      let node = this.head;
      newNode.next = node;
      this.head = newNode;
      this.length++;
    }
  }

  pop() {
    if (!this.head) {
      console.log("There are no nodes to pop!");
      return;
    } else {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return;
      }
      let node = this.head;
      let prev = node;
      while (node.next) {
        prev = node;
        node = node.next;
      }
      prev.next = null;
      this.tail = prev;
      this.length--;
    }
  }

  shift() {
    if (!this.head) {
      console.log("There are no nodes to shift!");
      return;
    } else {
      let node = this.head;
      this.head = node.next;
      this.length--;
    }
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }

    console.log(`length:`, this.length);
  }
}

const list = new LinkedList();
list.push(5);
list.push(26);
list.push(145);
list.unshift(99);
list.print();
