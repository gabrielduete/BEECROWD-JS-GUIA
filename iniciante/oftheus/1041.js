var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let line1 = lines.shift().split(" ");
let A = parseFloat(line1.shift());
let B = parseFloat(line1.shift());
if (A===0.0 && B===0.0){
  console.log("Origem");
}
else if(A===0.0){
  console.log("Eixo Y")
}
else if(B===0.0){
  console.log("Eixo X")
}
else if (A>0.0 && B>0.0){
  console.log("Q1");
}
else if (A<0.0 && B>0.0){
  console.log("Q2");
}
else if (A<0.0 && B<0.0){
  console.log("Q3");
}
else{
  console.log("Q4");
}