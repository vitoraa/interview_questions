const canConstruct = (target, wordBank) => {
  if (target === '') return true

  for (let word of wordBank) {
    if (target.substring(0, word.length) === word) {
      const targetRemainder = target.slice(word.length)
      return canConstruct(targetRemainder, wordBank)
    }
  }

  return false
}

console.log(canConstruct('abriu', ['a', 'br', 'iuz']))
console.log(canConstruct('abcdef', ['a', 'b', 'cde', 'f']))
console.log(canConstruct('abcdefg', ['a', 'b', 'cde', 'f']))
console.log(canConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaaaa', 'aaaaaa', 'aaaaaaaa']))