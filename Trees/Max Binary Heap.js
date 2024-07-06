class MaxBinaryHeap {
  constructor() {
    this.items = [];
  }

  insert(value) {
    this.items.push(value);
    let idx = this.items.length - 1;
    while (idx > 0) {
      let el = this.items[idx];
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentEl = this.items[parentIdx];
      if (el < parentEl) break;
      this.items[parentIdx] = el;
      this.items[idx] = parentEl;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.items[0];
    const last = this.items.pop();
    this.items[0] = last;
    let idx = 0;
    while (true) {
      let el = this.items[idx];
      let swap = null;
      let rightChildIdx = idx * 2 + 2;
      let leftChildIdx = idx * 2 + 1;
      let rightChild = this.items[rightChildIdx];
      let leftChild = this.items[leftChildIdx];
      if (el >= rightChild && el >= leftChild) {
        break;
      } else if (el < rightChild && el < leftChild && rightChild > leftChild) {
        swap = rightChildIdx;
      } else if (el < rightChild && el < leftChild && leftChild > rightChild) {
        swap = leftChildIdx;
      } else if (el < rightChild) {
        swap = rightChildIdx;
      } else if (el < leftChild) {
        swap = leftChildIdx;
      } else if (swap === null) {
        break;
      }
      let temp = this.items[idx];
      this.items[idx] = this.items[swap];
      this.items[swap] = temp;
    }

    console.log(`MAX:${max}`);
    console.log(this.items);
  }
}

const MBH = new MaxBinaryHeap();
MBH.insert(5);
MBH.insert(19);
MBH.insert(44);
MBH.insert(11);
MBH.insert(13);
MBH.insert(12);

console.log(MBH.items);

// find parent node Math.floor((idx - 1) / 2)
// left child node (idx * 2) + 1
// right child node (idx * 2) + 2
