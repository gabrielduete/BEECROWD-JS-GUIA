let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let A = parseFloat(lines.shift());
let notasCem = parseInt(A / 100);
A = (A % 100).toFixed(2);
let notasCinquenta = parseInt(A / 50);
A = (A % 50).toFixed(2);
let notasVinte = parseInt(A / 20);
A = (A % 20).toFixed(2);
let notasDez = parseInt(A / 10);
A = (A % 10).toFixed(2);
let notasCinco = parseInt(A / 5);
A = (A % 5).toFixed(2);
let notasDois = parseInt(A / 2);
A = (A % 2).toFixed(2);
let moedasUm = parseInt(A / 1);
A = (A % 1).toFixed(2);
let moedasCinquenta = parseInt(A / 0.50);
A = (A % 0.50).toFixed(2);
let moedasVCinco = parseInt(A / 0.25);
A = (A % 0.25).toFixed(2);
let moedasDez = parseInt(A / 0.10);
A = (A % 0.10).toFixed(2);
let moedasCinco = parseInt(A / 0.05);
A = (A % 0.05).toFixed(2);
let moedasUmC = parseInt(A / 0.01);
A = (A % 0.01).toFixed(2);
console.log("NOTAS:");
console.log(`${notasCem} nota(s) de R$ 100.00`);
console.log(`${notasCinquenta} nota(s) de R$ 50.00`);
console.log(`${notasVinte} nota(s) de R$ 20.00`);
console.log(`${notasDez} nota(s) de R$ 10.00`);
console.log(`${notasCinco} nota(s) de R$ 5.00`);
console.log(`${notasDois} nota(s) de R$ 2.00`);
console.log("MOEDAS:");
console.log(`${moedasUm} moeda(s) de R$ 1.00`);
console.log(`${moedasCinquenta} moeda(s) de R$ 0.50`);
console.log(`${moedasVCinco} moeda(s) de R$ 0.25`);
console.log(`${moedasDez} moeda(s) de R$ 0.10`);
console.log(`${moedasCinco} moeda(s) de R$ 0.05`);
console.log(`${moedasUmC} moeda(s) de R$ 0.01`);