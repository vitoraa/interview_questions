const gridTraveler = (n, m, memo = {}) => {
  const key = m + ',' + n
  if (key in memo) return memo[key]
  if (n === 1 && m === 1) return 1
  if (n === 0 || m === 0) return 0

  memo[key] = gridTraveler(n - 1, m, memo) + gridTraveler(n, m - 1, memo)

  return memo[key]
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 2))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 3))
console.log(gridTraveler(20, 20))