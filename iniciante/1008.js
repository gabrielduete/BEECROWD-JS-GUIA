var input = require("fs").readFileSync('/dev/stdin', 'utf8')

var valores = input.split("\n")

var numeroFunc = parseInt(valores.shift())
var horasTrab =  parseInt(valores.shift())
var valorHora =  parseFloat(valores.shift())

var calculo = horasTrab * valorHora

console.log("NUMBER = " + numeroFunc)
console.log("SALARY = U$ " + calculo.toFixed(2))