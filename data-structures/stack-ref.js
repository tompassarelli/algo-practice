class StackNode {
  constructor(val) {
    this.value = val
    this.next = null // null < n1 < n2 < makes it efficient when we pop n2 to get n1
  }
}

class Stack {
  constructor(){
    this.size = 0
    this.head = null
    this.tail = null
  }
  push(val){
    let newNode = new StackNode(val)
    if (this.head == null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.tail
      this.tail = newNode
    }
    this.size++
  }
  pop(){
    // we can't pop if there are no elements in the list, it we do so, return null
    if (this.head == null) {
      return null
    }
    // ** keep a reference to the node we will be popping (tail) 
    // because we will lose it when we update tail to be tail.next **
    let nodeToPop = this.tail;

    // ** clear tail/head conditionally **
    // if size == 1, we are popping the last element, and no references should remain
    if (this.size == 1) {
      this.head = null
      this.tail = null
      this.size--
      return nodeToPop.value 
    }
    
    // ** default case: update tail by pointing this.tail to next (this.tail.next)**
    this.tail = this.tail.next; 
    this.size--
    // finally, we return the nodeToPop.value
    return nodeToPop.value
  }
  peek() {
    return this.tail.value
  }
}

module.exports = {
  StackNode: StackNode,
  Stack: Stack
}