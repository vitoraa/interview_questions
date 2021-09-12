const canSum = (target, numbers) => {
  if (target === 0) return true
  if (target < 0) return false

  for (let number of numbers) {
    const remainder = target - number
    if (canSum(remainder, numbers)) return true
  }

  return false
}

console.log(canSum(1, [1]))
console.log(canSum(4, [1, 2]))
console.log(canSum(7, [3, 5]))
console.log(canSum(12, [5, 7]))
console.log(canSum(20, [3, 6, 9]))
console.log(canSum(200, [3, 6, 9]))
