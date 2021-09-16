class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) %
        this.data.length
    }
    return hash
  }

  set(key, value) {
    let hashKey = this._hash(key)
    this.data[hashKey] = value
  }

  get(key) {
    let hashKey = this._hash(key)
    return this.data[hashKey]
  }
}

const myHashTable = new HashTable(50)
myHashTable.set('grapes', 1000)
let a = myHashTable.get('grapes')
console.log(myHashTable, a)