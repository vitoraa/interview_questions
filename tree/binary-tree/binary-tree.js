class Node {
  constructor(value) {
    this.value = value
    this.rigth = null
    this.left = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    const newNode = new Node(value)

    if (this.root === null) {
      this.root = newNode
      return this.root
    }

    let nodeAux = this.root
    let nodeToInsert = null
    let nodePreAux = null

    while (!nodeToInsert) {
      if (nodeAux === null) {
        nodeToInsert = nodePreAux
      }

      nodePreAux = nodeAux

      if (value >= nodeAux?.value) {
        nodeAux = nodeAux.rigth
      } else if (value < nodeAux?.value) {
        nodeAux = nodeAux.left
      }
    }

    if (value >= nodeToInsert.value) {
      nodeToInsert.rigth = newNode
    } else {
      nodeToInsert.left = newNode
    }
  }

  lookup(value) {
    if (this.root === null) {
      return null
    }

    let nodeAux = this.root

    while (true) {
      if (nodeAux === null) return false
      if (nodeAux.value === value) return nodeAux

      if (value >= nodeAux.value) {
        nodeAux = nodeAux.rigth
      } else {
        nodeAux = nodeAux.left
      }
    }
  }
}

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

console.log(tree.root)
console.log(tree.lookup(90))