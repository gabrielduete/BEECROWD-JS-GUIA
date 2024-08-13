var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let line1 = lines.shift().split(" ");
let A = parseFloat(line1.shift());
let B = parseFloat(line1.shift());
let C = parseFloat(line1.shift());
let D = parseFloat(line1.shift());
let media = (2*A + 3*B + 4*C +D)/10;
console.log("Media: " + media.toFixed(1));
if (media>=7.0){
  console.log("Aluno aprovado.");
}
else if(media<5.0){
  console.log("Aluno reprovado.");
}
else{
  console.log("Aluno em exame.");
  let line2 = lines.shift().split();
  let E = parseFloat(line2.shift());
  console.log("Nota do exame: " + E.toFixed(1));
  if (((media+E)/2)>=5.0){
    console.log("Aluno aprovado.");
    console.log("Media final: " + ((media+E)/2).toFixed(1));
  }
}