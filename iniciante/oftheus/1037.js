var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let A = parseFloat(lines.shift());
switch (true){
  case (A>=0 && A<=25):
    console.log("Intervalo [0,25]");
    break;
  case (A>25 && A<=50):
    console.log("Intervalo (25,50]");
    break;
  case (A>50 && A<=75):
    console.log("Intervalo (50,75]");
    break;
  case (A>75 && A<=100):
    console.log("Intervalo (75,100]");
    break;
  default:
    console.log("Fora de intervalo");
}