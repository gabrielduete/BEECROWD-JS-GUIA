const pairNumbers = (range) => {
  const numbers = Object.keys(new Array(range).fill(null)).map(
    (Number) => parseInt(Number) + 1
  )

  for (let num of numbers) {
    if (num % 2 === 0) {
      console.log(num)
    }
  }
}

pairNumbers(100)
