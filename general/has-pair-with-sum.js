const hasPairWithSum = (sum, array) => {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (sum === array[i] + array[j]) return true
    }
  }

  return false;
}

console.log(hasPairWithSum(10, [1, 4, 5, 8, 7]))