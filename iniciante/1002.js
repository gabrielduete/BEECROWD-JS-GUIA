var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var raio = parseFloat(input)

var n = 3.14159

var calculo = n * Math.pow(raio, 2)

console.log('A=' + calculo.toFixed(4))
