// var input = require("fs").readFileSync("/dev/stdin", "utf8");
// var lines = input.trim().split("\n");

// const [A, B, C] = lines[0].split(" ").map(Number);

// let trimRetangulo = ((A * C) / 2).toFixed(3);
// let areaCirculo = (3.14159 * Math.pow(C, 2)).toFixed(3);
// let areaTrapezio = (((A + B) * C) / 2).toFixed(3);
// let areaQuadrado = (B * B).toFixed(3);
// let areaRetangulo = (A * B).toFixed(3);

// console.log("TRIANGULO:", trimRetangulo);
// console.log("CIRCULO:", areaCirculo);
// console.log("TRAPEZIO:", areaTrapezio);
// console.log("QUADRADO:", areaQuadrado);
// console.log("RETANGULO:", areaRetangulo);

/* ChatGPT Suggestion */

const calcularAreaTriangulo = (base, altura) =>
  ((base * altura) / 2).toFixed(3);
const calcularAreaCirculo = (raio) => (3.14159 * Math.pow(raio, 3)).toFixed(3);
const calcularAreaTrapezio = (baseMaior, baseMenor, altura) =>
  (((baseMaior + baseMenor) * altura) / 2).toFixed(3);
const calcularAreaQuadrado = (lado) => (lado * lado).toFixed(3);
const calcularAreaRetangulo = (base, altura) => (base * altura).toFixed(3);

input = require("fs").readFileSync("/dev/stdin", "utf8");
const [A, B, C] = input.trim().split("\n")[0].split(" ").map(Number);

const triangulo = calcularAreaTriangulo(A, C);
const circulo = calcularAreaCirculo(C);
const trapezio = calcularAreaTrapezio(A, B, C);
const quadrado = calcularAreaQuadrado(B);
const retangulo = calcularAreaRetangulo(A, B);

console.log("TRIANGULO:", triangulo);
console.log("CIRCULO:", circulo);
console.log("TRAPEZIO:", trapezio);
console.log("QUADRADO:", quadrado);
console.log("RETANGULO:", retangulo);
