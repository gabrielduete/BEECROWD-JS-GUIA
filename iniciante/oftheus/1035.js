var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let line1 = lines.shift().split(" ");
let A = parseInt(line1.shift());
let B = parseInt(line1.shift());
let C = parseInt(line1.shift());
let D = parseInt(line1.shift());
if (B>C && D>A && (C+D)>(A+B) && C>0 && D>0 && A%2===0){
  console.log("Valores aceitos");
}
else{
  console.log("Valores nao aceitos");
}