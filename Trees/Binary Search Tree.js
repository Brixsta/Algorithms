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
        if (value === current.value) return;
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

  find(value) {
    if (!this.root) {
      return false;
    } else {
      let current = this.root;
      let found = false;
      while (current && !found) {
        if (value < current.value) {
          current = current.left;
        } else if (value > current.value) {
          current = current.right;
        } else {
          found = true;
        }
      }
      if (found) {
        console.log(current);
        return current;
      } else {
        console.log(`Sorry could not find ${value}!`);
        return false;
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

// equation to find parent: Math.floor((n-1)/2)
// equation to find children: (n*2) +1 or +2
// where n = the index

const BST = new BinarySearchTree();
BST.insert(5);
BST.insert(1);
BST.insert(4);
BST.insert(3);
BST.insert(8);
BST.find(4);
