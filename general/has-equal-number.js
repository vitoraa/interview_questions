const hasEqualNumber = (list1, list2) => {
  let listObject = {}
  for (let number of list1) {
    listObject[number] = true
  }

  for (let number of list2) {
    if (number in listObject) return true
  }

  return false
}

console.log(hasEqualNumber([1], [1]))
console.log(hasEqualNumber([1, 2, 4, 2], [2, 2]))
console.log(hasEqualNumber([4, 4, 4, 4], [3, 6, 8, 0]))
console.log(hasEqualNumber([1, 2, 4, 2], [3, 6, 8, 0, 0, 7, 1]))