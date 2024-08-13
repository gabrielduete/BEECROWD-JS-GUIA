let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let C = parseFloat(lines.shift());
console.log(`NUMBER = ${A}`);
console.log(`SALARY = U$ ${(B*C).toFixed(2)}`);