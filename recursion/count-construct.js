const countConstruct = (target, wordBank) => {
  if (target === '') return 1

  let total = 0

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const targetRemainder = target.slice(word.length)
      const numWaysForRest = countConstruct(targetRemainder, wordBank)
      total += numWaysForRest
    }
  }

  return total
}

console.log(countConstruct('abc', ['ab', 'a', 'b', 'c']))
console.log(countConstruct('abcd', ['ab', 'a', 'b', 'c']))
console.log(countConstruct('abcde', ['ab', 'a', 'b', 'c', 'abcde', 'de', 'd', 'e']))
console.log(countConstruct('ab', ['ab', 'a', 'b', 'c']))
console.log(countConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab', ['ab', 'a', 'b', 'c']))