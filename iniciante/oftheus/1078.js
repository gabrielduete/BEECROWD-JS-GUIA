var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const A = parseInt(lines.shift());
for(let i=1;i<=10;i++){
  console.log(`${i} x ${A} = ${i*A}`);
}