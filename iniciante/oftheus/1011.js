let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let pi = 3.14159;
let raio = parseFloat(lines.shift());
let volume = (4.0/3) * pi * Math.pow(raio,3);
console.log(`VOLUME = ${volume.toFixed(3)}`);