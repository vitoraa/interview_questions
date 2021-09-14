/* const hasPairWithSum = (sum, array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (sum === array[i] + array[j]) return true
    }
  }

  return false;
} */

const hasPairWithSum = (sum, array) => {
  let allNumbers = new Set()

  for (let i = 0; i < array.length; i++) {
    if (allNumbers.has(array[i])) {
      return true
    }
    allNumbers.add(sum - array[i])
  }

  return false;
}


console.log(hasPairWithSum(15, [1, 4, 5, 8, 9]))