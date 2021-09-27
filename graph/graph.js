class Graph {
  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }

  addEdge(node1, node2) {

  }

  addVertex(node) {
    if (!(node in this.adjacentList)) {
      this.adjacentList[node] = []
      this.numberOfNodes++
    }
  }
}

const graph = new Graph()
graph.addVertex(10)
graph.addVertex(10)
console.log(graph)