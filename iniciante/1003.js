var input = require("fs").readFileSync('stdin', 'utf-8')

var valores = input.split("\n")

var A = parseInt(valores.shift())
var B = parseInt(valores.shift())

var SOMA = A + B

console.log(`SOMA = ${SOMA}`)