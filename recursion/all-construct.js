const allConstruct = (target, wordBank) => {
  if (target === '') return [[]]

  let allWaysConstruct = []

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const targetRemainder = target.slice(word.length)
      const waysConstructPartial = allConstruct(targetRemainder, wordBank)
      const targetWays = waysConstructPartial.map(way => [word, ...way])
      allWaysConstruct.push(...targetWays)
    }
  }

  return allWaysConstruct
}

console.log(allConstruct('purple', ['pur', 'p', 'l', 'e', 'ple']))
console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz', ['a', 'aa', 'aaa', 'aaaaa', 'aaaaaa']))