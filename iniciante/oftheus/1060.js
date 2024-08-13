var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());
let D = parseFloat(lines.shift());
let E = parseFloat(lines.shift());
let F = parseFloat(lines.shift());
let cont = 0;
if (A>0){
  cont++;
}
if (B>0){
  cont++;
}
if (C>0){
  cont++;
}
if (D>0){
  cont++;
}
if (E>0){
  cont++;
}
if (F>0){
  cont++;
}
console.log(`${cont} valores positivos`)