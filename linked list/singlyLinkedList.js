class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
    console.log(`Length: ${this.length}`);
  }

  push(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }

  pop() {
    if (this.length === 0) {
      console.log(`There are no nodes to pop!`);
      return;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let node = this.head;
      let prev = node;
      while (node.next) {
        prev = node;
        node = node.next;
      }
      this.tail = prev;
      prev.next = null;
      this.length--;
    }
  }

  unshift(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  shift() {
    if (this.length === 0) {
      console.log(`There are no nodes to shift!`);
      return;
    } else if (this.length === 1) {
      this.tail = null;
      this.head = null;
      this.length--;
    } else {
      let temp = this.head.next;
      this.head = temp;
      this.length--;
    }
  }

  get(index) {
    if (this.length === 0) {
      console.log(`There are no nodes to get!`);
      return;
    } else if (index < 0 || index >= this.length) {
      console.log(`Invalid index!`);
      return;
    } else {
      let node = this.head;
      let counter = 0;

      while (counter < index) {
        node = node.next;
        counter++;
      }
      console.log(`GET:${node.data}`);
      return node;
    }
  }

  set(index, data) {
    if (this.length === 0) {
      console.log(`There are no nodes to set!`);
      return;
    } else if (index < 0 || index >= this.length) {
      console.log(`Invalid index!`);
      return;
    } else {
      let node = this.get(index);
      node.data = data;
    }
  }

  delete(index) {
    if (this.length === 0) {
      console.log(`There are no nodes to delete!`);
      return;
    } else if (index < 0 || index >= this.length) {
      console.log(`Invalid index!`);
      return;
    } else if (index === 0) {
      this.shift();
    } else if (index === this.length - 1) {
      this.pop();
    } else {
      let node = this.get(index - 1);
      let temp = node.next.next;
      node.next = temp;
      this.length--;
    }
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      console.log(`Invalid index!`);
      return;
    } else if (index === 0) {
      this.unshift(data);
    } else if (index === this.length) {
      this.push(data);
    } else if (this.length === 1) {
      let node = new Node(data);
      this.tail.next = node;
      this.tail = node;
      this.length++;
    } else {
      let node = new Node(data);
      let start = this.get(index - 1);
      let temp = start.next;
      start.next = node;
      node.next = temp;
      this.length++;
    }
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.reverse();
list.print();
