class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
    this.size = 0;
  }

  enqueue(data) {
    this.items[this.tail] = data;
    this.tail++;
    this.size++;
  }

  dequeue() {
    if (this.size === 0) {
      console.log(`No more items to dequeue!`);
      return;
    }
    const node = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    this.size--;
    console.log(node);
    return node;
  }

  print() {
    console.log(this.items);
  }
}

const queue = new Queue();
queue.enqueue(89);
queue.enqueue(14);
queue.enqueue(25);
queue.enqueue(51);
queue.dequeue();
queue.print();
