const howSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === 0) return []
  if (target < 0) return null

  for (let number of numbers) {
    const remainder = target - number
    const remainderResult = howSum(remainder, numbers, memo)
    if (remainderResult !== null) {
      memo[target] = [...remainderResult, number]
      return memo[target]
    }
  }

  memo[target] = null
  return null
}

console.log(howSum(10, [3, 5]))
console.log(howSum(100, [3, 5]))
console.log(howSum(1000, [3, 5]))
console.log(howSum(300, [7, 14]))