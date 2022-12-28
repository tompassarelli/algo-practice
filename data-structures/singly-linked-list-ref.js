class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class SinglyLinkedList{
  // The list has three properties, the head, the tail and the list size
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
		let newNode = new Node(val)
		if (!this.head) {
			this.head = newNode 
			this.tail = this.head
		} else {
			this.tail = newNode;
			this.tail.next = this.head;
		}
		this.length++
	}
	pop() {
		if (!this.head) {
			return undefined
		}
		// we want to remove last el of the list, how can we do that?
		// if we set second last el tail.next -> null that would work
		// we also can set this.tail -> second last el
		let temp = this.tail;
		this.tail = null;
		return temp
	}
	shift() {
	}
	unshift(val) {
	}
	get(index) {
	}
	set(index, val) {
	}
	insert(index, val) {
	}
	remove(index) {
	}
	reverse(){
	}
}

let sll = new SinglyLinkedList()
sll.push(1)
sll.push(2)
console.log(sll.head);
console.log(sll.tail);