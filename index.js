//Exercício 2: Peça para o usuário digitar 10 números inteiros e exiba a soma deles no final.
alert("Insira 10 números para soma.");
let soma = 0;

for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt(`Insira o número ${i}:`)); // Solicita o número ao usuário
    if (isNaN(num) || num <= 1) {
        alert("Valor inválido.");
    } else{
        soma += num; // Adiciona o número à soma
    }
}

alert("Soma: " + soma); // Exibe a soma final


