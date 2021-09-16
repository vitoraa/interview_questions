class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = {
      value,
      next: null
    }
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(11)
myLinkedList.append(12)
myLinkedList.append(13)
myLinkedList.append(14)
console.log(myLinkedList)