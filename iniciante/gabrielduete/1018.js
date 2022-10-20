const input = require('fs').readFileSync('/dev/stdin', 'utf8')

let valor = parseInt(input)

console.log(valor)

var totalNotas = parseInt(valor / 100)
console.log( totalNotas + " nota(s) de R$ 100,00")
valor = valor % 100

totalNotas = parseInt(valor / 50)
console.log( totalNotas + " nota(s) de R$ 50,00")
valor = valor % 50

totalNotas = parseInt(valor / 20)
console.log( totalNotas + " nota(s) de R$ 20,00")
valor = valor % 20

totalNotas = parseInt(valor / 10)
console.log( totalNotas + " nota(s) de R$ 10,00")
valor = valor % 10

totalNotas = parseInt(valor / 5)
console.log( totalNotas + " nota(s) de R$ 5,00")
valor = valor % 5

totalNotas = parseInt(valor / 2)
console.log( totalNotas + " nota(s) de R$ 2,00")
valor = valor % 2

totalNotas = parseInt(valor / 1)
console.log( totalNotas + " nota(s) de R$ 1,00")