class Stack {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  print() {
    const result = [];
    let node = this.start;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }

  push(value) {
    let node = new Node(value);
    if (!this.start) {
      this.start = node;
      this.end = node;
    } else {
      node.next = this.start;
      this.start = node;
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) {
      console.log(`There are no nodes to pop!`);
      return;
    } else if (this.size === 1) {
      const node = this.start;
      this.start = null;
      this.end = null;
      this.size--;
      console.log(`POP:${node.value}`);
      return node;
    } else {
      const node = this.start;
      this.start = node.next;
      this.size--;
      console.log(`POP:${node.value}`);
      return node;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const stack = new Stack();
stack.push(14);
stack.push(34);
stack.push(94);
stack.print();
stack.pop();
stack.pop();
stack.pop();
stack.print();
