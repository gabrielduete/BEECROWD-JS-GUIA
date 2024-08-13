var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let line1 = lines.shift().split(" ");
let A = parseInt(line1.shift());
let B = parseInt(line1.shift());
switch (A){
  case (1):
    console.log(`Total: R$ ${(B*4.00).toFixed(2)}`);
    break;
  case (2):
    console.log(`Total: R$ ${(B*4.50).toFixed(2)}`);
    break;
  case (3):
    console.log(`Total: R$ ${(B*5.00).toFixed(2)}`);
    break;
  case (4):
    console.log(`Total: R$ ${(B*2.00).toFixed(2)}`);
    break;
  case (5):
    console.log(`Total: R$ ${(B*1.50).toFixed(2)}`);
    break;
  default:
    console.log("");
}