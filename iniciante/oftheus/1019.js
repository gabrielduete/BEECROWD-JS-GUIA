let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let A = parseInt(lines.shift());
let h = parseInt(A/3600);
A = A%3600;
let m = parseInt(A/60);
A = A%60;
let s = parseInt(A);
console.log(`${h}:${m}:${s}`);