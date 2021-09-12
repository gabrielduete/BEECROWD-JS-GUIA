const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const valores = input.split("\n")

const X = parseInt(valores.shift())
const Y = parseFloat(valores.shift())

var calculo = X / Y

console.log(calculo.toFixed(3) + " km/l")