const input = require('fs').readFileSync('/dev/stdin', 'utf-8')

const valores = input.split(' ')

const A = parseInt(valores[0])
const B = parseInt(valores[1])

const isMultiple = A % B === 0 || B % A === 0

isMultiple ? console.log('Sao Multiplos') : console.log('Nao sao Multiplos')
