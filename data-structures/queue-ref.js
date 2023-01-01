class QueueNode {
  constructor(value) {
    this.value = value
    this.next = null // n1 -> n2 -> null | so dequeueing n1 efficient (just n1.next to grab n2)
  }
}

class Queue {
  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }
  enqueue(val) {
    let newNode = new QueueNode(val)
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      // we have to set the current tail.next -> newNode
      // on the queue ds, update tail -> newNode
      this.tail.next = newNode
      this.tail = newNode
    }
    this.size++
  }
  dequeue() {
    if (this.head == null) {
      return null
    }
    // store ref to node we will be dequeueing
    let nodeToDequeue = this.head
    // head.next will become the new head
    this.head = this.head.next
    // update size after dereferencing head from the queue ds
    this.size--
    // finally return its value
    return nodeToDequeue.value
  }

  peek() {
    return this.head.value;
  }
}

module.exports = {
  QueueNode,
  Queue
}