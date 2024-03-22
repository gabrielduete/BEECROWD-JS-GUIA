var input = require("fs").readFileSync("/dev/stdin", "utf8");
// parseInt() é uma função que converte uma string em um número inteiro, mas aqui você está tentando chamá-la em um array.
var dist = parseInt(input.split("\n"));

console.log(dist * 2 + " minutos");
