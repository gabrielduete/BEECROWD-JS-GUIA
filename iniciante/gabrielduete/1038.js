const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const valores = input.split(' ')

const cod = parseInt(valores.shift())
const quant = parseInt(valores.shift())

if (cod === 1){
    let total = 4.00 * quant
    console.log('Total: R$', total.toFixed(2))
}else if(cod === 2){
    let total = 4.50 * quant
    console.log('Total: R$', total.toFixed(2))
}else if (cod === 3){
    let total = 5.00 * quant
    console.log('Total: R$', total.toFixed(2))
}else if(cod === 4){
    let total = 2.00 * quant
    console.log('Total: R$', total.toFixed(2))
}else if (cod === 5){
    let total = 1.50 * quant
    console.log('Total: R$', total.toFixed(2))
}