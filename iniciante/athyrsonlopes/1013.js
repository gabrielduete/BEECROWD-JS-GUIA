var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let linhas = input.split('\n');

let entrada = linhas.shift().split(' ');
let a = parseInt(entrada[0]);
let b = parseInt(entrada[1]);
let c = parseInt(entrada[2]);
let result = parseInt((a + b + Math.abs(a - b)) / 2);
let maior = parseInt((result + c + Math.abs(result - c)) / 2);
console.log(maior, "eh o maior");
