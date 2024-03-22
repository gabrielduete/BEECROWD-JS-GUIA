var input = require("fs").readFileSync("/dev/stdin", "utf8");
var idade = parseInt(input.split("\n"));

var anos = idade / 365;
var mes = (idade % 365) / 30;
var dias = (idade % 365) % 30;

console.log(parseInt(anos) + " ano(s)");
console.log(parseInt(mes) + " mes(es)");
console.log(dias + " dia(s)");
