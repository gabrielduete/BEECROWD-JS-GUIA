var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var med = (3.5 * A + 7.5 * B) / 11;

console.log("MEDIA =", med.toFixed(5));
