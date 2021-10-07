var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let valor = parseFloat(input);

const notas = [100, 50, 20, 10, 5, 2];
const moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];

console.log("NOTAS:");
notas.forEach(e => {
    let totalNotas = parseInt(valor / e)
    console.log(`${totalNotas} nota(s) de R$ ${e.toFixed(2)}`)
    valor = valor % e
})

console.log("MOEDAS:");
moedas.forEach(e => {
    let totalMoedas = parseInt(valor / e)
    console.log(`${totalMoedas} moeda(s) de R$ ${e.toFixed(2)}`)
    valor = (valor % e) + 0.00001
})