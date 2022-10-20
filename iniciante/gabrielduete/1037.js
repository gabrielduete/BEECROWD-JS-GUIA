const input = require('fs').readFileSync('/dev/stdin', 'utf8')

const valor = parseFloat(input)

if (valor >= 0.0 && valor <= 25.00){
    console.log("Intervalo [0,25]")
}else if( valor >= 25.01 && valor <= 50.00 ){
    console.log("Intervalo (25,50]")
}else if(valor >= 50.01 && valor <= 75.00){
    console.log("Intervalo (50,75]")
}else if(valor >= 75.01 && valor <= 100.00){
    console.log("Intervalo (75,100]")
}else{
    console.log("Fora de intervalo")
}
