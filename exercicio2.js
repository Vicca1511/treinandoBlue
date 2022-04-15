//Faça um programa para a leitura de quatro notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
//A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
//A mensagem "Em recuperação", se a média for entre cinco e sete;
//A mensagem "Reprovado", se a média for menor que cinco.

let prompt = require('prompt-sync')();

nota1 = +prompt("Digite a primeira nota: ");
nota2 = +prompt("Digite a segunda nota: ");
nota3 = +prompt("Digite a terceira nota: ");
nota4 = +prompt("Digite a quarta nota: ");

somaNotas = (nota1 + nota2 + nota3 + nota4);
mediaNotas = somaNotas / 4 ;

console.log(`A sua média foi ${mediaNotas}`);

if(mediaNotas >= 7 ){
    console.log("Parabéns . Você está APROVADO(A).");
}else if (mediaNotas >= 5 && mediaNotas < 7) {
    console.log(" Você está EM RECUPERAÇÃO. Estude mais para ser aprovado.");
    
}else if (mediaNotas >=0 && mediaNotas < 5) {
    console.log("Você está REPROVADO(A).");
    
}