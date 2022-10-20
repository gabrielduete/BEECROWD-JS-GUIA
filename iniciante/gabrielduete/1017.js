const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const valores = input.split("\n")

const valor1 = parseFloat(valores.shift())
const valor2 = parseFloat(valores.shift())

const calculo = (valor1 * valor2) / 12

console.log(calculo.toFixed(3))