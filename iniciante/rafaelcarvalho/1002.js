var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var r = parseFloat(input)

var n = 3.14159

var calculo = n * Math.pow(r, 2)

console.log('A=' + calculo.toFixed(4))
