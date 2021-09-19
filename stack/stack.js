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
      this.top = newNode
    } else {
      const holding = this.top
      this.top = newNode
      this.top.next = holding
    }

    this.length++
  }

  pop() {
    if (this.isEmpty()) return null

    const holding = this.top
    this.top = this.top.next

    this.length--
    return holding
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
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.peek())
