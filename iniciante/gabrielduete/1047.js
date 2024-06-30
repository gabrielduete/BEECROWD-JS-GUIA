var input = require('fs').readFileSync('/dev/stdin', 'utf8')

const [initialHour, initialMinute, finalHour, finalMinute] = input
  .split(' ')
  .map((item) => parseInt(item))

let hour = 24 - initialHour + finalHour
let minute = 60 - initialMinute + finalMinute

const isMidnightDifferentMinutes =
  hour === 24 && minute > 0 && initialMinute != finalMinute

if (hour > 24) {
  hour -= 24
}

if (initialMinute > finalMinute) {
  hour -= 1
}

if (isMidnightDifferentMinutes) {
  hour = 0
}

if (minute >= 60) {
  minute -= 60
}

console.log(`O JOGO DUROU ${hour} HORA(S) E ${minute} MINUTO(S)`)
