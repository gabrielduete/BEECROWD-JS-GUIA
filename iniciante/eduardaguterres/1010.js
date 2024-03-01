var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

let total = 0;

lines.forEach((linha) => {
  if (linha.trim() !== "") {
    const numeros = linha.split(" ");
    let [A, B, C] = numeros.map(Number);
    total += B * C;
  }
});

console.log("VALOR A PAGAR: R$", total.toFixed(2));
