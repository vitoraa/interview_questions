class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    let hashKey = this._hash(key)
    if (!this.data[hashKey]) {
      this.data[hashKey] = []
    } else {
      for (let item of this.data[hashKey]) {
        if (item[0] === key) {
          item[1] = value
          return
        }
      }
    }
    this.data[hashKey].push([key, value])
  }

  get(key) {
    let hashKey = this._hash(key)
    for (let item of this.data[hashKey]) {
      if (item[0] === key) {
        return item[1]
      }
    }
    return undefined
  }
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 1000)
myHashTable.set('banana', 2000)
myHashTable.set('mellon', 3000)
myHashTable.set('mellon', 40000)
let a = myHashTable.get('mellon')
console.log(myHashTable, a)