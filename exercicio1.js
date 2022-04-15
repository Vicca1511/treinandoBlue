let prompt = require('prompt-sync')();

let numero1 = prompt("Digite um número da sua preferência: ");
console.log(numero1)
let numero2 = prompt("Digite outro número: ");
console.log(numero2)

if(numero1 > numero2){
    console.log(`O Maior número é ${numero1}`)

}else if(numero1 < numero2){
    console.log(`O Maior número é ${numero2}`)
}else if( numero1 == numero2){
    console.log(`${numero1} e ${numero2} tem o mesmo valor !`)
}