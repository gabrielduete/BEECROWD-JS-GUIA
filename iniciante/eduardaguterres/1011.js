var input = require("fs").readFileSync("/dev/stdin", "utf8");
var raio = parseFloat(input.split("\n"));

let volume = (4 / 3) * 3.14159 * Math.pow(raio, 3);

console.log("VOLUME =", volume.toFixed(3));
