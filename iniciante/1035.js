const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const valores = input.split(' ')

const A = parseInt(valores.shift())
const B = parseInt(valores.shift())
const C = parseInt(valores.shift())
const D = parseInt(valores.shift())

if ((B > C) && (D > A) && (C + D > A + B) & (C > 0) & (D > 0) & (A % 2 === 0)){
    console.log("Valores aceitos")
}else{
    console.log("Valores nao aceitos")
}