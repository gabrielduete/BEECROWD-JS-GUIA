let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let A = parseInt(lines.shift());
let notasCem = 0;
let notasCinquenta = 0;
let notasVinte = 0;
let notasDez = 0;
let notasCinco = 0;
let notasDois = 0;
let notasUm = 0;
console.log(`${A}`)
while(A>=100){
  notasCem++;
  A=A-100;
}
while(A>=50){
  notasCinquenta++;
  A=A-50;
}
while(A>=20){
  notasVinte++;
  A=A-20;
}
while(A>=10){
  notasDez++;
  A=A-10;
}
while(A>=5){
  notasCinco++;
  A=A-5;
}
while(A>=2){
  notasDois++;
  A=A-2;
}
while(A>=1){
  notasUm++;
  A=A-1;
}
console.log(`${notasCem} nota(s) de R$ 100,00`);
console.log(`${notasCinquenta} nota(s) de R$ 50,00`);
console.log(`${notasVinte} nota(s) de R$ 20,00`);
console.log(`${notasDez} nota(s) de R$ 10,00`);
console.log(`${notasCinco} nota(s) de R$ 5,00`);
console.log(`${notasDois} nota(s) de R$ 2,00`);
console.log(`${notasUm} nota(s) de R$ 1,00`);