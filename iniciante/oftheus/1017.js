let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let S = A*B;
let resultado = (S/12).toFixed(3);
console.log(resultado);