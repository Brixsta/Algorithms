class Stack {
  constructor() {
    this.storage = [];
  }

  push(data) {
    this.storage.push(data);
  }

  pop() {
    if (this.storage.length === 0) {
      console.log("No items to pop!");
      return;
    }
    let node = this.storage[this.storage.length - 1];
    console.log(node);
    return this.storage.pop();
  }

  print() {
    console.log(this.storage);
  }
}

const stack = new Stack();
stack.push(15);
stack.push(4);
stack.push(12);
stack.pop();
