var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var x = lines.shift().split(' ');

var y = lines.shift().split(' ');

var Peca1 = parseInt(x[0]); var quant1 = parseInt(x[1]); var valorUni1 = parseFloat(x[2]);

var Peca2 = parseInt(y[0]); var quant2 = parseInt(y[1]); var valorUni2 = parseFloat(y[2]);

console.log("VALOR A PAGAR: R$ " + parseFloat((quant1*valorUni1)+(quant2*valorUni2)).toFixed(2));