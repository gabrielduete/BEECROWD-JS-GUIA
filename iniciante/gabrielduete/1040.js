const input = require("fs").readFileSync("/dev/stdin", "utf8")

const valores = input.split("\n")

const [n1, n2, n3, n4] = valores.shift().split(" ")
const notaExame = parseFloat(valores.shift())

const media = (n1 * 2 + n2 * 3 + n3 * 4 + parseFloat(n4)) / 10

console.log(`Media: ${media.toFixed(1)}`)

if (media >= 7.0) {
  console.log("Aluno aprovado.")
} else if (media < 5.0) {
  console.log("Aluno reprovado.")
} else {
  console.log("Aluno em exame.")
  console.log(`Nota do exame: ${notaExame.toFixed(1)}`)
  const mediaFinal = (notaExame + media) / 2
  if (mediaFinal >= 5.0) {
    console.log("Aluno aprovado.")
  } else {
    console.log("Aluno reprovado.")
  }
  console.log(`Media final: ${mediaFinal.toFixed(1)}`)
}
