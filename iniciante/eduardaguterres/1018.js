var input = require("fs").readFileSync("/dev/stdin", "utf8");
var valor = parseInt(input.split("\n"));

var notas = [100, 50, 20, 10, 5, 2, 1];
var resto = valor;

console.log(valor);

for (var i = 0; i < notas.length; i++) {
  var qtdNotas = Math.floor(resto / notas[i]);
  resto = resto % notas[i];
  console.log(qtdNotas + " nota(s) de R$ " + notas[i] + ",00");
}
