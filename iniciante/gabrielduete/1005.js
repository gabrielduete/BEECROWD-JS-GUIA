var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var valores = input.split("\n")

var A = parseFloat(valores.shift()) * 3.5
var B = parseFloat(valores.shift()) * 7.5

var media = (A + B) / 11

console.log('MEDIA = ' + media.toFixed(5))