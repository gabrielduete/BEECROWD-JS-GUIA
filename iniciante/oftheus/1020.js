let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let A = parseInt(lines.shift());
let anos = parseInt(A/365);
A = A%365;
let meses = parseInt(A/30);
A = A%30;
let dias = parseInt(A);
console.log(anos + " ano(s)");
console.log(meses + " mes(es)");
console.log(dias + " dia(s)");