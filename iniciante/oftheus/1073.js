var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const A = parseInt(lines.shift());
let cont = 1;
while(cont<=A){
  if(cont%2===0){
    console.log(`${cont}^2 = ${cont*cont}`);
  }
  cont++;
}