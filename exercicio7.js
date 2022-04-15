let prompt = require('prompt-sync')();

console.log(" Vamos brincar de Advinhação?!")
console.log("Digite um número de 0 a 10 e teste sua sorte.");
let numero = parseInt(prompt(" Digite seu número: "));
console.log(numero);

let numeroSorteado = Math.round(Math.random() * 10);
console.log(numeroSorteado)

if (numero == numeroSorteado) {
    console.log(`Parabéns , você ACERTOU !Número sorteado é: ${numeroSorteado}.`);
}else{console.log(`Você ERROU! Tente novamente,o número sorteado era: ${numeroSorteado}. `)

};