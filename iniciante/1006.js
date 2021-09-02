input = require('fs').readFileSync('/dev/stdin', 'utf8')

var valores = input.split("\n")

var A = valores.shift() * 2
var B = valores.shift() * 3
var C = valores.shift() * 5

var MEDIA = (A + B + C) / 10

console.log('MEDIA = ' + MEDIA.toFixed(1))