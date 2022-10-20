var input = require("fs").readFileSync('/dev/stdin', 'utf8')

var valores = input.split("\n")

var nome = valores.shift()
var salarioFixo = parseFloat(valores.shift())
var vendasEfetuadas = parseFloat(valores.shift())

var calculo = salarioFixo + (vendasEfetuadas * 0.15)

console.log("TOTAL = R$ " + calculo.toFixed(2))