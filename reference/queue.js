class Node {
    constructor(value) {
      this.value = value
      this.next = null
    }
}

class Queue {
    // The stack has three properties, the first node, the last node and the stack size
    constructor(){
      this.size = 0
      this.first = null;
      this.last = null;
    }
    // The push method receives a value and adds it to the "top" of the stack
    enqueue(val){
      let newNode = new Node(val)
      // if statement to simplify setting `this.last` (on init)
      if(!this.first){
        this.first = newNode
        this.last = newNode
      } else {
        // change the .next on leader node to point to enqueued node
        // when we shift leader, we can take its .next and set that to `first`
        this.last.next = newNode
        // last here represents the last element to be processed by the queue
        this.last = newNode
      }
      this.size++
    }
    // dequeue is basically arr.shift(), shift element out of queue
    dequeue(){
        // we can only pop if the list contains an element, so just return null if empty list
        if(!this.first) {
          return null
        }
        // if we are shifting the last element, this.first==this.last.
        // we need to set last to null when we no elements exist (as the case when we initalized)
        if(this.first === this.last){
          this.last = null
        }
        // save reference to first node (the node will be "popped") because we will
        // need to dereference it as relates to the "remove" part of the "pop" procedure
        let dequeuedNode = this.first
        // remove part: dereference this.first and reset to next in list
        this.first = this.first.next
        this.size--
        // return part: return the removed node's value
        return dequeuedNode.value
    }
}

const q = new Queue

stck.push(2)
stck.push(1)

console.log(q.first) 
console.log(q.last) 
console.log(q.size) 

console.log(q.pop())
