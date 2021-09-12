const bestSum = (target, numbers) => {
  if (target === 0) return []
  if (target < 0) return null
  let bestCombination = null

  for (let number of numbers) {
    const remainder = target - number
    const remainderCombination = bestSum(remainder, numbers)
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, number]
      if (!bestCombination || combination.length < bestCombination.length) {
        bestCombination = combination
      }
    }
  }

  return bestCombination
}

console.log(bestSum(10, [2, 5, 10]))
console.log(bestSum(20, [2, 5, 10]))
console.log(bestSum(50, [2, 5, 10]))
console.log(bestSum(100, [2, 5, 10]))
console.log(bestSum(200, [2, 5, 10]))