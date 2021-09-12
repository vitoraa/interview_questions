const gridTraveler = (n, m) => {
  if (n === 1 && m === 1) return 1
  if (n === 0 || m === 0) return 0

  return gridTraveler(n - 1, m) + gridTraveler(n, m - 1)
}

console.log(gridTraveler(1, 1))
console.log(gridTraveler(2, 2))
console.log(gridTraveler(2, 3))
console.log(gridTraveler(3, 3))