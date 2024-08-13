let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());
let resultado = ((A*2)+(B*3)+(C*5))/10;
console.log(`MEDIA = ${resultado.toFixed(1)}`);