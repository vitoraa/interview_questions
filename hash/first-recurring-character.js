const firstRecurringCharacter = (arr) => {
  const mySet = new Set()
  for (let element of arr) {
    if (mySet.has(element)) return element
    mySet.add(element)
  }
  return undefined
}

console.log(firstRecurringCharacter([1, 2, 3]))
console.log(firstRecurringCharacter([1, 2, 2, 4]))
console.log(firstRecurringCharacter([1, 2, 4, 5, 7, 5, 8, 4]))