var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let line1 = lines.shift().split(" ");
let A = parseInt(line1.shift());
let B = parseInt(line1.shift());
if(B%A===0 || A%B===0){
  console.log("Sao Multiplos");
}
else{
  console.log("Nao sao Multiplos");
}