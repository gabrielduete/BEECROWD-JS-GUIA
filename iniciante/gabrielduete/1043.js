const input = require('fs').readFileSync('/dev/stdin', 'utf-8')

const valores = input.split(' ')

const A = parseFloat(valores[0])
const B = parseFloat(valores[1])
const C = parseFloat(valores[2])

const isTriangle = (A + B) > C && (A + C) >B  && (B + C) > A

isTriangle ? console.log('Perimetro =', (A + B + C).toFixed(1)) : console.log('Area =', ((A + B) * C / 2).toFixed(1))
