var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let line1 = lines.shift().split(" ");
let A = parseInt(line1.shift());
let B = parseInt(line1.shift());
let C = parseInt(line1.shift());

if (A > B && B > C){
  console.log(C);
  console.log(B);
  console.log(A);
  console.log("");
  console.log(A);
  console.log(B);
  console.log(C);
}

else if (A > C && C> B){
  console.log(B);
  console.log(C);
  console.log(A);
  console.log("");
  console.log(A);
  console.log(B);
  console.log(C);
}

else if (B > A && A > C){
  console.log(C);
  console.log(A);
  console.log(B);
  console.log("");
  console.log(A);
  console.log(B);
  console.log(C);
}

else if (B > C && C > A){
  console.log(A);
  console.log(C);
  console.log(B);
  console.log("");
  console.log(A);
  console.log(B);
  console.log(C);
}

else if (C > A && A > B){
  console.log(B);
  console.log(A);
  console.log(C);
  console.log("");
  console.log(A);
  console.log(B);
  console.log(C);
}

else if (C > B && B > A){
  console.log(A);
  console.log(B);
  console.log(C);
  console.log("");
  console.log(A);
  console.log(B);
  console.log(C);
}