var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var valor = input.split('\n')

var A = parseInt(valor.shift())
var B = parseInt(valor.shift())

var X = A + B

console.log('X = ' + X)