const input = require("fs").readFileSync("/dev/stdin", "utf8")

const valores = input.split(" ")

const x = parseFloat(valores.shift())
const y = parseFloat(valores.shift())

if (x === 0 && y === 0) {
  console.log("Origem")
} else if (y === 0) {
  console.log("Eixo X")
} else if (x === 0) {
  console.log("Eixo Y")
} else if (x > 0 && y > 0) {
  console.log("Q1")
} else if (x < 0 && y > 0) {
  console.log("Q2")
} else if (x < 0 && y < 0) {
  console.log("Q3")
} else if (y < 0 && x > 0) {
  console.log("Q4")
}
