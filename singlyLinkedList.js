class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    this.length++;
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  prepend(value) {
    this.length++;
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      this.head = node;
      this.head.next = temp;
    }
  }

  printList() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  get(index) {
    if (index > this.length - 1 || index < 0) {
      console.log("GET: Invalid index. Try again.");
      return;
    }
    let node = this.head;

    if (index === 0) {
      console.log(`GET: ` + node.value);
      return this.head;
    } else {
      while (index > 0) {
        node = node.next;
        index--;
      }

      console.log(`GET: ` + node.value);
    }
  }

  set(index, value) {
    if (index > this.length - 1 || index < 0) {
      console.log("SET: Invalid index. Try again.");
      return;
    }

    let node = this.head;

    if (index === 0) {
      this.head.value = value;
    } else {
      while (index > 0) {
        node = node.next;
        index--;
      }

      node.value = value;
    }
  }

  insert(index, value) {
    let initialIdx = index;
    if (index > this.length - 1 || index < 0) {
      console.log("INSERT: Invalid index. Try again.");
      return;
    } else {
      let newNode = new Node(value);
      this.length++;

      // user inserts node at index 0
      if (index === 0) {
        let temp = this.head;
        this.head = newNode;
        this.head.next = temp;
      }

      let node = this.head;
      while (index > 0) {
        node = node.next;
        index--;
      }
      let temp = node.next;
      node.next = newNode;
      newNode.next = temp;
      console.log(`INSERT: ${newNode.value} at Index: ${initialIdx}.`);
    }
  }

  remove(index) {
    let initialIdx = index;
    if (index > this.length - 1 || index < 0) {
      console.log("REMOVE: Invalid index. Try again.");
      return;
    }

    if (this.length === 0) {
      console.log("REMOVE: List is empty. Try again.");
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let node = this.head;
      this.length--;

      // if user enters index 0
      if (index === 0) {
        let temp = this.head.next;
        this.head = temp;
      }

      while (index - 1 > 0) {
        node = node.next;
        index--;
      }
      let deletedNode = node;
      let temp = node.next.next;
      node.next = temp;

      console.log(`REMOVE: Node at Index: ${initialIdx}`);
    }
  }
}

const myList = new SinglyLinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.append(4);
myList.append(5);
myList.remove(4);

myList.printList();
