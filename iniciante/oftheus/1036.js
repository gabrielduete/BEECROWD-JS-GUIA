var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let line1 = lines.shift().split(" ");
let A = parseFloat(line1.shift());
let B = parseFloat(line1.shift());
let C = parseFloat(line1.shift());
let delta = Math.pow(B,2) - 4*A*C;
if(delta<0 || A===0){
  console.log("Impossivel calcular");
}
else{
  let r1 = (-(B)+ Math.sqrt(delta))/(2*A);
  let r2 = (-(B)- Math.sqrt(delta))/(2*A);
  console.log(`R1 = ${r1.toFixed(5)}`);
  console.log(`R2 = ${r2.toFixed(5)}`);
}