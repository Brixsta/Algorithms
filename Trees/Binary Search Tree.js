class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    } else {
      let current = this.root;
      while (true) {
        if (value === current) return;
        if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return;
          }
          current = current.right;
        }
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(1);
console.log(tree.root.left.left);
