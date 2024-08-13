let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let name = lines.shift();
let salario = parseFloat(lines.shift());
let vendas = parseFloat(lines.shift());
console.log(`TOTAL = R$ ${(salario+(0.15*vendas)).toFixed(2)}`);