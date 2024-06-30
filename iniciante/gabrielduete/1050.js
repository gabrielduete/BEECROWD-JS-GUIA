const DDD = parseInt(require('fs').readFileSync('/dev/stdin', 'utf8'))

const locales = {
  61: 'Brasilia',
  71: 'Salvador',
  11: 'Sao Paulo',
  21: 'Rio de Janeiro',
  32: 'Juiz de Fora',
  19: 'Campinas',
  27: 'Vitoria',
  31: 'Belo Horizonte',
}

locales[DDD] ? console.log(locales[DDD]) : console.log('DDD nao cadastrado')
