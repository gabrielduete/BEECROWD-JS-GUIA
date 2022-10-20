var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var valoresGeral = input.split("\n")

var valores1 = valoresGeral.shift().split(" ")
var valores2 = valoresGeral.shift().split(" ")

var codigoProd = parseInt(valores1.shift())
var numeroPecas = parseInt(valores1.shift())
var valorProd = parseFloat(valores1.shift())

var codigoProd2 = parseInt(valores2.shift())
var numeroPecas2 = parseInt(valores2.shift())
var valorProd2 = parseFloat(valores2.shift())

var calculo = (numeroPecas * valorProd) + (numeroPecas2 * valorProd2)

console.log("VALOR A PAGAR: R$ " + calculo.toFixed(2))
