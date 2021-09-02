var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var valores = input.split('\n')

var A = valores.shift()
var B = valores.shift()
var C = valores.shift()
var D = valores.shift()

var DIFERENCA = (A * B - C * D)

console.log("DIFERENCA = " + DIFERENCA)