class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }
}

let myLinkedList = new LinkedList(10)
console.log(myLinkedList)