var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var valores = input.split("\n")

A = valores.shift()
B = valores.shift()

var PROD = A * B

console.log('PROD = ' + PROD)