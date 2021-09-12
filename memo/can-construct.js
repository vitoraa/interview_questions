const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target]
  if (target === '') return true

  for (let word of wordBank) {
    if (target.substring(0, word.length) === word) {
      const targetRemainder = target.slice(word.length)
      memo[target] = canConstruct(targetRemainder, wordBank)
      return memo[target]
    }
  }

  memo[target] = false
  return false
}

console.log(canConstruct('abriu', ['a', 'br', 'iuz']))
console.log(canConstruct('abcdef', ['a', 'b', 'cde', 'f']))
console.log(canConstruct('abcdefg', ['a', 'b', 'cde', 'f']))
console.log(canConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['az', 'aa', 'aaaaa', 'aaaaaa', 'aaaaaaaa']))