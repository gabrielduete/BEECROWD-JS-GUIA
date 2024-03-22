var input = require("fs").readFileSync("/dev/stdin", "utf8");
var [horas, velocidade] = input.split("\n");

console.log(((horas * velocidade) / 12).toFixed(3));
