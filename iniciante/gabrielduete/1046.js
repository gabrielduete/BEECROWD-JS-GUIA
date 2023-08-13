const input = require('fs').readFileSync('stdin', 'utf8')

const valores = input.split(' ')

const A = parseInt(valores.shift())
const B = parseInt(valores.shift())

const gameDuration = () => {
  const totalDayMinusTotalHours = 24 - A + B

  if (A == B) {
    return console.log(`O JOGO DUROU ${totalDayMinusTotalHours} HORA(S)`)
  }

  if (A <= B) {
    return console.log(`O JOGO DUROU ${B - A} HORA(S)`)
  }

  return console.log(`O JOGO DUROU ${totalDayMinusTotalHours} HORA(S)`)
}

gameDuration()
