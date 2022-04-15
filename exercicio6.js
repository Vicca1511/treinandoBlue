let prompt = require('prompt-sync')();
// Reajuste salarial - As empresas @.com resolveram dar um aumento de salário aos seus colaboradores e lhe contrataram para desenvolver o programa que calculará os reajustes. Faça um programa que recebe o salário de um colaborador e o reajuste segundo o seguinte critério, baseado no salário atual: 
// Salários até R$ 280,00 (incluindo): aumento de 20%. 
// Salários entre R$ 280,00 e R$ 700,00: aumento de 15%.
// Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%.
// Salários de R$ 1500,00 em diante: aumento de 5%.


console.clear()
console.log("Estamos recalculando o salário de todos os contribuintes . Para saber qual será seu novo salário digite abaixo seu salário atual");
console.log('Digite seu salário:');
salario = parseInt(prompt(""));
console.log(`Seu salário Atual é: R$`+(salario).toFixed(2));

parseInt(aumento20 = salario *.2);
parseInt(aumento15 = salario  * .15);
parseInt(aumento10 = salario  * .10);
parseInt(aumento5 = salario *.05);

parseInt(novoSalario1 = salario  + aumento20);
parseInt(novoSalario2 = salario  + aumento15);
parseInt(novoSalario3 = salario  + aumento10);
parseInt(novoSalario4 = salario  + aumento5);
if(salario >= 0 && salario <= 280){
    
    console.log(`Seu antigo salário era: R$${(salario).toFixed(2)} e após o reajuste seu salário aumentou para: R$${(novoSalario1).toFixed(2)}.`)
    console.log();
    console.log(`Você recebeu um aumento de: R$${(aumento20).toFixed(2)}`);
    console.log();
}else if(salario > 280 && salario <= 700){
    console.log(`Seu antigo salário era: R$${(salario).toFixed(2)} e após o reajuste seu salário aumentou para: R$${(novoSalario2).toFixed(2)}.`)
    console.log();
    console.log(`Você recebeu um aumento de: R$${(aumento15).toFixed(2)}`);
    console.log();
}else if(salario > 700 && salario <= 1500){
    console.log(`Seu antigo salário era: R$${(salario).toFixed(2)} e após o reajuste seu salário aumentou para: R$${(novoSalario3).toFixed(2)}.`)
    console.log();
    console.log(`Você recebeu um aumento de: R$${(aumento10).toFixed(2)}`);
    console.log();
}else if(salario > 1500 ){
    console.log(`Seu antigo salário era: R$${(salario).toFixed(2)} e após o reajuste seu salário aumentou para: R$${(novoSalario4).toFixed(2)}.`)
    console.log();
    console.log(`Você recebeu um aumento de: R$${(aumento5).toFixed(2)}`);
    console.log();
}
