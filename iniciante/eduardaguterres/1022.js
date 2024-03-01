var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var number = lines.shift();
var nResultado = 0;
var dResultado = 0;

for (var i = 0; i < number; i++) {
  var [n1, _, d1, variavel, n2, _, d2] = lines.shift().split(" ");
  switch (variavel) {
    case "+":
      nResultado = n1 * d2 + n2 * d1;
      dResultado = d1 * d2;
      break;
    case "-":
      nResultado = n1 * d2 - n2 * d1;
      dResultado = d1 * d2;
      break;
    case "*":
      nResultado = n1 * n2;
      dResultado = d1 * d2;
      break;
    case "/":
      nResultado = n1 * d2;
      dResultado = n2 * d1;
      break;
  }
  var nResultadoSimpli = nResultado;
  var dResultadoSimpli = dResultado;

  while (nResultadoSimpli % 2 === 0 && dResultadoSimpli % 2 === 0) {
    nResultadoSimpli = nResultado / 2;
    dResultadoSimpli = dResultado / 2;
  }

  console.log(
    nResultado +
      "/" +
      dResultado +
      " = " +
      nResultadoSimpli +
      "/" +
      dResultadoSimpli
  );
}

// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin", "utf8");
// const lines = input.trim().split("\n");
//
// const gcd = (a, b) => {
//     while (b !== 0) {
//         const temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// };

// const simplifyFraction = (numerator, denominator) => {
//     const sign = Math.sign(numerator) * Math.sign(denominator);
//     numerator = Math.abs(numerator);
//     denominator = Math.abs(denominator);

//     const divisor = gcd(numerator, denominator);
//     return [(sign * numerator) / divisor, denominator / divisor];
// };

// const number = parseInt(lines.shift(), 10);

// for (let i = 0; i < number; i++) {
//     const [n1, x, d1, operation, n2, y, d2] = lines[i].split(" ");
//     let nResultado, dResultado;

//     switch (operation) {
//         case "+":
//             nResultado = n1 * d2 + n2 * d1;
//             dResultado = d1 * d2;
//             break;
//         case "-":
//             nResultado = n1 * d2 - n2 * d1;
//             dResultado = d1 * d2;
//             break;
//         case "*":
//             nResultado = n1 * n2;
//             dResultado = d1 * d2;
//             break;
//         case "/":
//             nResultado = n1 * d2;
//             dResultado = n2 * d1;
//             break;
//     }

//     const [nResultadoSimpli, dResultadoSimpli] = simplifyFraction(nResultado, dResultado);

//     console.log(`${nResultado}/${dResultado} = ${nResultadoSimpli}/${dResultadoSimpli}`);
// }
