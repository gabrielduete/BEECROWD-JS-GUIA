const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const values = parseInt(input.split())

const getValues = () => {
  for (let value = 1; value <= values; value++) {
    const isPair = value % 2 === 0

    isPair && console.log(`${value}^2 = ${value ** 2}`)
  }
}

getValues()
