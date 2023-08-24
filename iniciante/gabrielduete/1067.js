const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const values = parseInt(input.split())

const getOdd = () => {
  for (let value = 1; value <= values; value++) {
    const isOdd = value % 2 !== 0

    isOdd && console.log(value)
  }
}

getOdd()
