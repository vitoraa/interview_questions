import { Node } from '../linked-list/linked-list.js'

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.length = 0
  }

  peek() {
    if (!this.isEmpty()) return this.first
    return undefined
  }

  enqueue(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }

    this.length++
  }

  dequeue() {
    if (this.isEmpty()) return null

    if (this.first === this.last) {
      const holding = this.first
      this.first = null
      this.last = null
      return holding
    }

    const holding = this.first
    this.first = this.first.next

    this.length--
    return holding
  }

  isEmpty() {
    return this.length === 0
  }
}

const stack = new Queue()
stack.enqueue('Google')
stack.enqueue('Amazon')
stack.enqueue('Microsoft')
console.log(stack.peek())
console.log(stack.dequeue())
console.log(stack.peek())
console.log(stack.dequeue())
console.log(stack.peek())
console.log(stack.dequeue())
console.log(stack.peek())
