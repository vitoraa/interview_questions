const canSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === 0) return true
  if (target < 0) return false

  for (let number of numbers) {
    const remainder = target - number
    memo[target] = canSum(remainder, numbers, memo)
    if (memo[target]) return true
  }

  memo[target] = false
  return false
}

console.log(canSum(1, [1]))
console.log(canSum(4, [1, 2]))
console.log(canSum(7, [3, 5]))
console.log(canSum(12, [5, 8]))
console.log(canSum(20, [3, 6, 9]))
console.log(canSum(1000, [1, 3, 6, 9]))
