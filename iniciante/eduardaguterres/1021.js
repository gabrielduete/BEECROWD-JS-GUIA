var input = require("fs").readFileSync("/dev/stdin", "utf8");
var dinheiro = parseFloat(input);

var notas = [100, 50, 20, 10, 5, 2];
var moedas = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
var resto = dinheiro;
console.log("NOTAS:");

for (var i = 0; i < notas.length; i++) {
  var qtdNotas = Math.floor(resto / notas[i]);
  resto = resto % notas[i];
  console.log(qtdNotas + " nota(s) de R$ " + notas[i]);
}

console.log("MOEDAS:");

for (var i = 0; i < moedas.length; i++) {
  var qtdMoedas = Math.floor(resto / moedas[i]);
  resto = resto % moedas[i];
  console.log(qtdMoedas + " moeda(s) de R$ " + moedas[i].toFixed(2));
}
