const mergeSortedArrayOfArrays = (arr) => {
  let totalLength = arr.reduce((total, arr1) => total + arr1.length, 0)
  let mergedArray = []
  let iteratorArray = Array(arr.length).fill(0)

  while (mergedArray.length < totalLength) {
    let index = undefined
    let min = undefined
    for (let i = 0; i < iteratorArray.length; i++) {
      if (arr[i].length >= iteratorArray[i] + 1) {
        if (min === undefined || arr[i][iteratorArray[i]] < min) {
          min = arr[i][iteratorArray[i]]
          index = i
        }
      }
    }
    mergedArray.push(min)
    iteratorArray[index]++
  }

  return mergedArray
}

console.log(mergeSortedArrayOfArrays([[0, 1, 6], [2, 3]]))
console.log(mergeSortedArrayOfArrays([[0, 1, 6], [6, 13, 18], [0, 3, 27]]))
