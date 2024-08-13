var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let line1 = lines.shift().split(" ");
let A = parseFloat(line1.shift());
let B = parseFloat(line1.shift());
let C = parseFloat(line1.shift());
if (((A+B)>C) && ((A+C)>B) && ((B+C)>A)){
  console.log(`Perimetro = ${(A+B+C).toFixed(1)}`);
}
else{
  console.log(`Area = ${(((A+B)*C)/2).toFixed(1)}`)
}