var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());
let D = parseFloat(lines.shift());
let E = parseFloat(lines.shift());
let contPares = 0;
let contImpares = 0;
let cont = 0;
let contNeg = 0;

if (A%2===0){
  contPares++;
}else{contImpares++};

if (B%2===0){
  contPares++;
}else{contImpares++};

if (C%2===0){
  contPares++;
}else{contImpares++};

if (D%2===0){
  contPares++;
}else{contImpares++};

if (E%2===0){
  contPares++;
}else{contImpares++};

if (A>0){
  cont++;
}else if(A<0 && A!==0){contNeg++};

if (B>0){
  cont++;
}else if(B<0 && B!==0){contNeg++};

if (C>0){
  cont++;
}else if(C<0 && C!==0){contNeg++};

if (D>0){
  cont++;
}else if(D<0 && D!==0){contNeg++};

if (E>0){
  cont++;
}else if(E<0 && E!==0){contNeg++};

console.log(`${contPares} valor(es) par(es)`);
console.log(`${contImpares} valor(es) impar(es)`);
console.log(`${cont} valor(es) positivo(s)`);
console.log(`${contNeg} valor(es) negativo(s)`);