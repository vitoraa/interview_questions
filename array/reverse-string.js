const reverseString = str => {
  var reversedString = ''

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }

  return reversedString
}

console.log(reverseString('ola'))