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

console.log(JSON.stringify(traverse(tree.root)))

function traverse(node) {
  const treeTraverse = { value: node.value }
  treeTraverse.left = node.left === null ? null : traverse(node.left)
  treeTraverse.rigth = node.rigth === null ? null : traverse(node.rigth)
  return tree
}