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
    if (this.root === null) {
      const newNode = new Node(value)
      this.root = newNode
      return this.root
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
tree.insert(11)

JSON.stringify(traverse(tree.root))

function traverse(node) {
  const treeTraverse = { value: node.value }
  treeTraverse.left = node.left === null ? null : traverse(node.left)
  treeTraverse.rigth = node.rigth === null ? null : traverse(node.rigth)
  return tree
}