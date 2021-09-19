import { Node } from '../linked-list/linked-list.js'

class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }

  peek() {
    if (!this.isEmpty()) return this.top
    return undefined
  }

  first() {
    if (!this.isEmpty()) return this.bottom
    return undefined
  }

  push(value) {
    const newNode = new Node(value)
    if (this.isEmpty()) {
      this.bottom = newNode
    } else {
      this.top.next = newNode
    }
    this.top = newNode
    this.length++
  }

  pop() {
    if (!this.isEmpty()) {

      this.length--
    }
  }

  isEmpty() {
    return this.length === 0
  }
}

const stack = new Stack()
stack.push('Google')
stack.push('Amazon')
stack.push('Microsoft')
console.log(stack.peek())
console.log(stack.first())