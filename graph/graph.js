class Graph {
  constructor() {
    this.numberOfNodes = 0
    this.adjacentList = {}
  }

  addEdge(node1, node2) {
    if ((node1 in this.adjacentList) && (node2 in this.adjacentList)) {
      this.adjacentList[node1].push(node2)
      this.adjacentList[node2].push(node1)
    }
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
graph.addVertex(20)
graph.addVertex(30)
graph.addVertex(40)
graph.addEdge(10, 20)
graph.addEdge(10, 30)
graph.addEdge(10, 40)
console.log(graph)