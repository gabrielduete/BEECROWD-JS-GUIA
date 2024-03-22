var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

const [distancia, gasolina] = lines.map(Number);

console.log((distancia / gasolina).toFixed(3) + " km/l");
