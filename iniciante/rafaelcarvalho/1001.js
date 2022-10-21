var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var valor = input.split('\n')

var a = parseInt(valor.shift())
var b = parseInt(valor.shift())

var x = a + b

console.log('X = ' + x)