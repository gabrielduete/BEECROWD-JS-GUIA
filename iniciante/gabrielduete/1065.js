const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const values = input.split('\n')

var pairs = 0

values.forEach((value) => {
  const isPair = parseInt(value) % 2 === 0
  isPair && pairs++
})

console.log(`${pairs} valores pares`)
