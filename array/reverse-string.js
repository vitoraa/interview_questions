/* const reverseString = str => {
  var reversedString = ''

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }

  return reversedString
} */

const reverseString = str => str.split('').reverse().join('')

console.log(reverseString('olá tudo bem Vom Vx'))