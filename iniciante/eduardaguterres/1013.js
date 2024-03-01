const maior = (num1, num2) => (num1 + num2 + Math.abs(num1 - num2)) / 2;

var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split(" ");

const [A, B, C] = lines.map(Number);

let maiorAB = maior(A, B);
let maiorTodos = maior(maiorAB, C);

console.log(maiorTodos + " eh o maior");
