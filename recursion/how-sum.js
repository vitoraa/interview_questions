const howSum = (target, numbers) => {
  if (target === 0) return []
  if (target < 0) return null

  for (let number of numbers) {
    const remainder = target - number
    const remainderResult = howSum(remainder, numbers)
    if (remainderResult !== null) {
      return [...remainderResult, number]
    }
  }

  return null
}

console.log(howSum(10, [3, 5]))
console.log(howSum(100, [3, 5]))
console.log(howSum(1000, [3, 5]))
console.log(howSum(300, [7, 14]))