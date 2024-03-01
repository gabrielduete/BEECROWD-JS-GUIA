var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

lines = parseFloat(lines);

const pi = 3.14159;

var circle = pi * Math.pow(lines, 2);
console.log("A=" + circle.toFixed(4));
