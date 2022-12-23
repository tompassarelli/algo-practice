class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
}

class Stack {
    // The stack has three properties, the first node, the last node and the stack size
    constructor(){
      this.size = 0
      this.first = null;
      this.last = null;
    }
    // The push method receives a value and adds it to the "top" of the stack
    push(val){
      let newNode = new Node(val)
      // if statement to simplify setting `this.last` (on init)
      if(!this.first){
        this.first = newNode
        this.last = newNode
      } else {
        let oldNode = this.first
        this.first = newNode
        this.first.next = oldNode
      }
      this.size++
    }
    // The pop method removes the element at the "top" of the stack and returns its value
    pop(){
        // we can only pop if the list contains an element, so just return null if empty list
        if(!this.first) {
          return null
        }
        // if we are popping the last element, this.first==this.last.
        // we need to set last to null when we no elements exist (as the case when we initalized)
        if(this.first === this.last){
          this.last = null
        }
        // save reference to first node (the node will be "popped") because we will
        // need to dereference it as relates to the "remove" part of the "pop" procedure
        let oldNode = this.first
        // remove part: dereference this.first and reset to next in list
        this.first = this.first.next
        this.size--
        // return part: return the removed node's value
        return oldNode.value
    }
}

const stck = new Stack

stck.push(2)
stck.push(1)

console.log(stck.first) 
console.log(stck.last) 
console.log(stck.size) 

console.log(stck.pop())
