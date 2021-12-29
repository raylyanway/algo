class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  tail = null;
  size = 0;

  addLast(value) {
    this.size++;
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  addFirst(value) {
    this.size++;
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  indexOf(value) {
    let index = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (value === currentNode.value) return index;
      ++index;
      currentNode = currentNode.next;
    }
    return -1;
  }

  contains(value) {
    return this.indexOf(value) !== -1;
  }

  removeFirst() {
    if (this.isEmpty()) return;
    this.size--;
    const second = this.head.next;
    this.head.next = null;
    this.head = second;
  }

  removeLast() {
    if (this.isEmpty()) return;
    this.size--;
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      } else {
        this.tail = currentNode;
        currentNode.next = null;
        return;
      }
    }
    this.head = null;
    this.tail = null;
  }

  getSize() {
    return this.size;
  }

  convertToArray() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  reverse() {
    if (this.isEmpty()) return;
    let previousNode = this.head;
    let currentNode = this.head.next;
    while (currentNode !== null) {
      let futureNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = futureNode;
    }

    this.tail = this.head;
    this.tail.next = null;
    this.head = previousNode;
  }

  getKthFromTheEnd(position) {
    if (this.isEmpty() || position < 0 || !position || position > this.size)
      return;
    const positionOfSecondNode = position - 1;
    let firstNode = this.head;
    let secondNode = null;
    let currentNode = this.head;
    let index = 0;
    while (currentNode !== null) {
      if (index === positionOfSecondNode) {
        secondNode = currentNode;
      }
      if (index > positionOfSecondNode) {
        firstNode = firstNode.next;
        secondNode = secondNode.next;
      }
      if (secondNode === this.tail) {
        return firstNode.value;
      }
      currentNode = currentNode.next;
      index++;
    }
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    return this.head;
  }
}

const list = new LinkedList();
list.addLast(1);
list.addLast(2);
list.addLast(3);
list.addFirst(4);
// console.log(list.contains(0));
// console.log(list.contains(3));
// console.log(list.indexOf(3));
// console.log(list.indexOf(4));
// console.log(list.indexOf(0));
// list.removeFirst();
// list.removeLast();
// console.log(list.getSize());
// console.log(list.convertToArray());
// list.reverse();
// console.log(list.convertToArray());
// console.log(list.print());
console.log(list.getKthFromTheEnd(1));
