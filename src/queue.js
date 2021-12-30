class Queue {
  queue = [];

  enqueue(value) {
    return this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  print() {
    return this.queue;
  }
}

class CircularQueue {
  head = 0;
  tail = 0;
  count = 0;

  constructor(size) {
    this.queue = new Array(size);
    this.size = size;
  }

  enqueue(value) {
    if (this.count === this.size) return;
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.size;
    ++this.count;
  }

  dequeue() {
    if (this.count === 0) return;
    const result = this.queue[this.head];
    this.queue[this.head] = undefined;
    this.head = (this.head + 1) % this.size;
    --this.count;
    return result;
  }

  isEmpty() {
    return this.queue.every((item) => item === undefined);
  }

  isFull() {
    return this.count === this.size;
  }

  print() {
    return this.queue;
  }
}

// const queue = new Queue();
const queue = new CircularQueue(5);

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);
queue.dequeue();
queue.enqueue(11);
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.enqueue(12);
queue.dequeue();
queue.dequeue();

console.log(queue.print());
console.log(queue.isEmpty());
console.log(queue.isFull());

// console.log(queue.isEmpty());

function reverse(queue) {
  let result = [];
  for (let i = queue.length - 1; i >= 0; i--) {
    result.push(queue[i]);
  }
  return result;
}

// console.log(reverse(queue.print()));
