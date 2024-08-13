let input = require('fs').readFileSync('stdin', 'utf8');
let lines = input.split('\n');
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
console.log(`${(A/B).toFixed(3)} km/l`)
