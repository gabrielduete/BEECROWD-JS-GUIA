const input = require('fs').readFileSync('/dev/stdin', 'utf8')

var totalSegs = parseInt(input)

const horas = parseInt(totalSegs / 3600)
totalSegs = parseInt(totalSegs % 3600)

const mins = parseInt(totalSegs / 60)
totalSegs = parseInt(totalSegs % 60)

const finalSegs = totalSegs

console.log(`${horas}:${mins}:${finalSegs}`)
