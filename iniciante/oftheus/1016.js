let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let A = parseInt(lines.shift());
console.log(`${A*2} minutos`);
