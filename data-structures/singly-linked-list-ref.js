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

		// store ref to this.tail as we will be dereferencing it
		let nodeToPop = this.tail;

 		// clear head/tail conditionally in the case we are popping last element
    if (this.length == 1) {
  		this.head = null;
			this.tail = null;
			this.length--
			return nodeToPop.value
    }

		// update nodeBeforeTail -> new tail
		let current = this.head;
		let nodeBeforeTail = current
		while (current.next) {
			nodeBeforeTail = current;
			current = current.next;
		}

		// set new tail
		this.tail = nodeBeforeTail;

		// finally deref tail and ret nodeToPop.value
		nodeBeforeTail.next = null;
		this.length--;
		return nodeToPop.value;
	}
	// The shift method removes the head of the list, ret value
	shift() {
		if (this.head == null) {
			return null
		}
		// we don't have to change any pointers on the nodes because 
		// the structure is of the type n1 -> n2 -> ... 
		// so by removing n1, the node structure will still remain fine

		// however... we do new to set a new head. 
		// in order to set a new head, can set this.head = this.head.next 
		// if this.head.next == null, we need to update tail to be null
		// but if we were to do that right away, it would complicate the actual current
		// head we need to pop
		// so we can first store the current head that we want to pop, then update
		// the this.head reference
		let nodeToShift = this.head

		if (this.length == 1) {
			this.head == false
			this.tail == false
			this.length--
			return nodeToShift.value
		}
		// okay so we have at least 2 elements, so just have to update head/size
		this.head = nodeToShift.next
		this.length--

		return nodeToShift.value
	}
	// The unshift method takes a value as parameter and assigns it as the head of the list
	unshift(val) {
		// again we evaluate the SLL ds itself if we need to change anything AND nodes
		// as far as Nodes are concerned.. new Node -> current head
		// as far as the SLL is concerned.. the head should be updated to -> newNode

		let newNode = new Node(val)
		newNode.next = this.head
		this.head = newNode
	}
	// The get method takes an index number as parameter and returns the value of the node at that index
	get(idx) {
		// so our linkedlist will have lookup by index
		// our nodes our indexed in the sense that head-> 0, but we have to traverse
		// the list to identify the nth index of the list. 
		
		// we would also want to optimize our lookup such that if the idx provided 
		// was the length-1 of the array (last node), we can just return tail instantly
		if (idx == this.length-1) {
			return this.tail.value 
		}

		// if idx out of bounds of array, ret null
		if (idx >= this.length || idx < 0) {
			return null	
		}

		// okay safe to traverse array to lookup 
		let count = 0;
		let current = this.head;
		// we init current to head so that we can
		// return current instantly if head, otherwise the loop will push the pointer up
		// and conditionally exit at the point the loop has selected the appropriate node
		// even though we don't do any loop processing when idx==count, at the point that
		// idx==count, current will be set correctly to idx target
		
		// this avoids constantly checking if count=current in the loop body conditionally
		// on every iteration 
		while(count !== idx) {
			current = current.next
			count++
		}
		return current;
	}
	// The set method takes an index number and a value as parameters, 
	// and modifies the node value at the given index in the list
	set(idx, val) {
	}
	// The insert method takes an index number and a value as parameters, 
	// and inserts the value at the given index in the list
	insert(idx, val) {
	}
	// The remove method takes an index number as parameter
	// and removes the node at the given index in the list
	remove(idx) {
	}
	// The reverse method reverses the list and all pointers 
	// so that the head becomes the tail and the tail becomes the head
	reverse(){
	}
}

let sll = new SinglyLinkedList()
sll.push(1)
sll.push(2)
console.log(sll.head);
console.log(sll.tail);