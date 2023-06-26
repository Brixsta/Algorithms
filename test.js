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
      this.items[parentIdx] = el;
      this.items[idx] = parentEl;
      idx = parentIdx;
    }
  }
}

const MBH = new MaxBinaryHeap();
MBH.insert(100);
MBH.insert(20);
MBH.insert(44);
MBH.insert(13);
MBH.insert(200);
MBH.insert(3);
MBH.insert(900);
console.log(MBH);
