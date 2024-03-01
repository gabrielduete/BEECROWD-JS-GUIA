var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.trim().split("\n");

const [A, B, C, D] = lines.map(Number);

let dif = A * B - C * D;
console.log("DIFERENCA =", dif);
