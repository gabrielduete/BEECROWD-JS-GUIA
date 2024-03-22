var input = require("fs").readFileSync("/dev/stdin", "utf8");
var tempo = parseInt(input.split("\n"));

var segundos = tempo % 60;
var minutos = (tempo / 60) % 60;
var horas = tempo / 3600;

console.log(`${Math.floor(horas)}:${Math.floor(minutos)}:${segundos}`);
