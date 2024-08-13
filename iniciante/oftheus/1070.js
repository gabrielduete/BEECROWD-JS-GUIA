var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let A = parseInt(lines.shift());
let cont = 0;
if(A%2!==0){
  console.log(A)
  while(cont<5){
    if((A+1)%2!==0){
      console.log(A+1);
      cont++;
    }
    A++;
  }
}
else{
  while(cont<6){
    if((A+1)%2!==0){
      console.log(A+1);
      cont++;
    }
    A++;
  }
}
