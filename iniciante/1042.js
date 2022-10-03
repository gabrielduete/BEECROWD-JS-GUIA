const input = require("fs").readFileSync("/dev/stdin", "utf8")
const valores = input.split("\n")

const numeros = valores.shift().split(" ")
const array = [...numeros]

array.sort((a, b) => a - b)

console.log(
  `${array[0]}\n${array[1]}\n${array[2]}\n\n${numeros[0]}\n${numeros[1]}\n${numeros[2]}`
)
