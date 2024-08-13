let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let line1 = lines.shift().split(" ");
let A = parseInt(line1.shift());
let B = parseInt(line1.shift());
let C = parseInt(line1.shift());
let maiorAB = (A+B+Math.abs(A-B))/2;
let resultado = (maiorAB+C+Math.abs(maiorAB-C))/2;
console.log(`${resultado} eh o maior`);
