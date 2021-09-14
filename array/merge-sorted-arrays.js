const mergeSortedArrays = (arr1, arr2) => {
  let totalLength = arr1.length + arr2.length
  let mergedArray = []
  let iterator1 = 0
  let iterator2 = 0

  while (mergedArray.length < totalLength) {
    if (iterator1 > arr1.length - 1) {
      mergedArray.push(arr2[iterator2])
      iterator2++
      continue
    }
    if (iterator2 > arr2.length - 1) {
      mergedArray.push(arr1[iterator1])
      iterator1++
      continue
    }

    if (arr1[iterator1] <= arr2[iterator2]) {
      mergedArray.push(arr1[iterator1])
      iterator1++
    } else {
      mergedArray.push(arr2[iterator2])
      iterator2++
    }
  }

  return mergedArray
}

console.log(mergeSortedArrays([0, 1, 6], [2, 3]))
console.log(mergeSortedArrays([0, 1, 6], [6, 13, 18]))
console.log(mergeSortedArrays([1000, 1111, 66666], [10, 77777, 888888]))
console.log(mergeSortedArrays([1000, 1111, 66666], []))