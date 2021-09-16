class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
  }

  prepend(value) {
    const newNode = new Node(value)
    newNode.next = this.head
    this.head = newNode
    this.length++
  }

  printList() {
    const array = []
    let currentNode = this.head
    while (currentNode !== null) {
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    return array
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.append(value)
    }

    if (index === 0) {
      return this.prepend(value)
    }

    let newNode = new Node(value)
    let currentNode = this.head

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.next
    }

    newNode.next = currentNode.next
    currentNode.next = newNode
    this.length++
  }
}

let myLinkedList = new LinkedList(10)
myLinkedList.append(11)
myLinkedList.append(12)
myLinkedList.append(13)
myLinkedList.append(14)
myLinkedList.prepend(9)
myLinkedList.prepend(8)
myLinkedList.insert(7, 999)
console.log(myLinkedList.printList())