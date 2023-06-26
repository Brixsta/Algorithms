class MaxBinaryHeap {
  constructor() {
    this.items = [];
  }

  insert(value) {
    this.items.push(value);
    let idx = this.items.length - 1;
    let el = this.items[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentEl = this.items[parentIdx];
      if (el <= parentEl) break;
      this.items[idx] = parentEl;
      this.items[parentIdx] = el;
      idx = parentIdx;
    }
  }
}

const MBH = new MaxBinaryHeap();
MBH.insert(101);
MBH.insert(40);
MBH.insert(80);
MBH.insert(4);
MBH.insert(20);
MBH.insert(9900);
console.log(MBH);
