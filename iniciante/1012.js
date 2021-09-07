var input = require('fs').readFileSync('/dev/stdin', 'utf8')

var valores = input.split(" ")

var A = parseFloat(valores.shift())
var B = parseFloat(valores.shift())
var C = parseFloat(valores.shift())

var TRIANGULO = ( A * C ) / 2
var CIRCULO = ( 3.14159 * Math.pow(C,2))
var TRAPEZIO = (( A + B) * C) / 2
var QUADRADO = B * B
var RETANGULO = A * B

console.log("TRIANGULO: " + TRIANGULO.toFixed(3))
console.log("CIRCULO: " + CIRCULO.toFixed(3) )
console.log("TRAPEZIO: " + TRAPEZIO.toFixed(3))
console.log("QUADRADO: " + QUADRADO.toFixed(3) )
console.log("RETANGULO: " + RETANGULO.toFixed(3))