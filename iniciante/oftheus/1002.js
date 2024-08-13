let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let pi = 3.14159;
let raio = parseFloat(lines.shift());
let area = pi * (Math.pow(raio,2));
let resultado = area.toFixed(4);
console.log(`A=${resultado}`);