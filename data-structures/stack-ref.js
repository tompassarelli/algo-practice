class StackNode {
  constructor(val) {
    this.value = val
    this.next = null // null < n1 < n2 < ..
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
    
    // ** update tail **
    // new tail is going to be second the last node in list (tail node.next)
    this.tail = this.tail.next; 
    
    // ** update head conditionally **
    // if we are popping the head, ensure we clean up that reference  
    if (this.head == nodeToPop) {
      this.head = null
    }

    // ** update size before popping **
    // only reference remaining to old tail is nodeToPop, and after function ends
    // we will have no more references to old tail. So update size. 
    this.size--
    // finally, we return the nodeToPop.value (containing perhaps int, str, obj)
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
