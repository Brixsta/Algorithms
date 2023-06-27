class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.start) {
      this.start = node;
      this.end = node;
      this.size++;
    } else {
      this.end.next = node;
      this.end = node;
      this.size++;
    }
  }

  dequeue() {
    let node = this.start;
    this.start = this.start.next;
    console.log(`DEQUEUE:${node.value}`);
    this.size--;
    return node;
  }

  print() {
    let node = this.start;
    const result = [];
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    console.log(result);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const queue = new Queue();
queue.enqueue(11);
queue.enqueue(20);
queue.enqueue(40);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.print();
