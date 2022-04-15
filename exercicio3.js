let prompt = require('prompt-sync')();


console.log("Descubra se o número digitado é par");
numero = prompt("Digite aqui o seu número: ");
console.log()

if(numero % 2 == 0){
    console.log(` O número ${numero}  é par.`  )
    
}else{
    console.log(` O número ${numero}  não é par.`  )

}
//
//while(numero != Number){
//    console.log("Valor inválido , digite apenas números!")
//
//}