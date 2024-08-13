let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let resultado = ((A*3.5)+(B*7.5))/11;
console.log(`MEDIA = ${resultado.toFixed(5)}`);