class Node{
	constructor(val){
	  this.value = val
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
	// push val ~ int, string, obj
	push(val) {
		let newNode = new Node(val)
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			// update the list to include the newNode (tail.next -> newNode)
			// STATE: head->n1, tail->n1, n1->n2(newNode)
			this.tail.next = newNode // modifies the .next of the obj that tail referneces
			// update tail pointer
			this.tail = newNode // modifies tail to point to a new obj ref
			// FINAL STATE: head->n1, tail->n2, n1->n2
		}
		this.size++
	}
	// The pop method removes tail and returns its value
	pop() {
		// we can only remove nodes if some nodes exist
		if (this.length == 0) {
			return null
		}

		let nodeToPop = this.tail;

 		// clear head/tail conditionally in the case we are popping last element
    if (this.length == 1) {
  		this.head = null;
			this.tail = null;
			this.length--
			return nodeToPop.value
    }

		// update nodeBeforeTail -> new tail
		let nodeBeforeTail = this.head
		while (nodeBeforeTail.next.next !== null) {
			nodeBeforeTail = nodeBeforeTail.next
		}

		// deref the nodeToPop from the node chain 
		// and set nodeBeforeTail is tail by .next=null
		this.tail = nodeBeforeTail;
		nodeBeforeTail.next = null;
		this.length--;

		return nodeToPop.value;
	}
	// The shift method removes the head of the list
	shift() {
	}
	// The unshift method takes a value as parameter and assigns it as the head of the list
	unshift(val) {
	}
	// The get method takes an index number as parameter and returns the value of the node at that index
	get(index) {
	}
	// The set method takes an index number and a value as parameters, and modifies the node value at the given index in the list
	set(index, val) {
	}
	// The insert method takes an index number and a value as parameters, and inserts the value at the given index in the list
	insert(index, val) {
	}
	// The remove method takes an index number as parameter and removes the node at the given index in the list
	remove(index) {
	}
	// The reverse method reverses the list and all pointers so that the head becomes the tail and the tail becomes the head
	reverse(){
	}
}

let sll = new SinglyLinkedList()
sll.push(1)
sll.push(2)
console.log(sll.head);
console.log(sll.tail);