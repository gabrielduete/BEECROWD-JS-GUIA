const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const Y = parseInt(input)

const calculo = Y * 2

console.log(calculo + ' minutos')