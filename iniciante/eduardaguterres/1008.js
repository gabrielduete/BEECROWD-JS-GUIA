var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.trim().split("\n");

const [A, B, C] = lines.map(Number);
var salary = B * C;

console.log("NUMBER =", A);
console.log("SALARY = U$", salary.toFixed(2));
