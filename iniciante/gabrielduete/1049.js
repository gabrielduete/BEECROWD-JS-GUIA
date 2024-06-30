const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const [A, B, C] = input.split('\n').map((animal) => animal)

if (A === 'vertebrado') {
  if (B === 'ave') {
    if (C === 'carnivoro') return console.log('aguia')
    return console.log('pomba')
  }

  if (C === 'herbivoro') return console.log('vaca')
  return console.log('homem')
} else {
  if (B === 'inseto') {
    if (C === 'hematofago') return console.log('pulga')
    return console.log('lagarta')
  }

  if (C === 'hematofago') return console.log('sanguessuga')
  return console.log('minhoca')
}
