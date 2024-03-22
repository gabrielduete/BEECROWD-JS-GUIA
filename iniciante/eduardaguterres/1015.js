var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

// lines.forEach((line) => {
//   var [x, y] = line.split(" ").map((item) => parseFloat(item));
//   console.log(x, y);
//   var distancia = Math.sqrt(Math.pow(y - x, 2) + Math.pow(y, 2)).toFixed();
// });

var [x1, y1] = lines
  .shift()
  .split(" ")
  .map((item) => parseFloat(item));

var [x2, y2] = lines.shift().split(" ");

const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

console.log(distancia.toFixed(4));
