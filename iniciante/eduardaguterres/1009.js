var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.trim().split("\n");

const [A, B, C] = lines.map(Number);

total = B + C * 0.15;

console.log("TOTAL = R$", total.toFixed(2));
