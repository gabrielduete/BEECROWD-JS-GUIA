const input = require('fs').readFileSync('stdin', 'utf-8')

const valores = input.split(' ')

const A = parseFloat(valores[0])
const B = parseFloat(valores[1])
const C = parseFloat(valores[2])

const {
  notTriangle,
  rightTriangle,
  obtusangleTriangle,
  acuteTriangle,
  equilatrelTriangle,
  isoscelesTriangle,
} = {
  notTriangle: A >= B + C || B >= A + C || C >= A + B,
  rightTriangle:
    A * A === B * B + C * C || B * B == A * A + C * C || C * C == A * A + B * B,
  obtusangleTriangle:
    A * A > B * B + C * C || B * B > A * A + C * C || C * C > A * A + B * B,
  acuteTriangle:
    A * A < B * B + C * C || B * B < A * A + C * C || C * C < A * A + B * B,
  equilatrelTriangle: A === B && A === C,
  isoscelesTriangle:
    (A === B && A !== C) || (A === C && A !== B) || (B === C && B !== A),
}

if (notTriangle) {
  console.log('NAO FORMA TRIANGULO')
} else if (rightTriangle) {
  console.log('TRIANGULO RETANGULO')
} else if (obtusangleTriangle) {
  console.log('TRIANGULO OBTUSANGULO')
} else if (acuteTriangle) {
  console.log('TRIANGULO ACUTANGULO')
}

if (equilatrelTriangle) {
  console.log('TRIANGULO EQUILATERO')
}

if (isoscelesTriangle) {
  console.log('TRIANGULO ISOSCELES')
}
