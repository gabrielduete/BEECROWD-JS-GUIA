const input = require('fs').readFileSync('stdin', 'utf8')

const salary = parseFloat(input.split())

const { veryLow, low, medium, high } = {
  veryLow: salary >= 0 && salary <= 400.0,
  low: salary <= 800.0,
  medium: salary > 800 && salary <= 1200,
  high: salary > 1200 && salary <= 2000,
}

const calcSalary = (percentage) => {
  const adjustGain = salary * percentage
  const newSalary = salary + adjustGain

  console.log(`Novo salario: ${newSalary.toFixed(2)}`)
  console.log(`Reajuste ganho: ${adjustGain.toFixed(2)}`)

  const showPercentage = percentage.toString().split('.')[1]

  console.log(
    `Em percentual: ${parseFloat(showPercentage).toFixed(0)}${
      medium ? '0' : ''
    } %`
  )
}

const salaryIncrease = () => {
  if (veryLow) {
    return calcSalary(0.15)
  }

  if (low) {
    return calcSalary(0.12)
  }

  if (medium) {
    return calcSalary(0.1)
  }

  if (high) {
    return calcSalary(0.07)
  }

  return calcSalary(0.04)
}

salaryIncrease()
