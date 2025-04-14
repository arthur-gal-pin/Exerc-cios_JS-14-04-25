//Exercício 1:Crie um programa que peça um número ao usuário e exiba na tela todos os números de 1 até o número digitado.
const num = parseInt(prompt('Insira um número:'));
if (isNaN(num) || num <= 1) {
    alert("Você colocou um valor inválido para número.")
} else {
    let frase = "";
    for (let i = 1; i <= num; i++) {
        frase = frase + " " + i;
    }
    alert(frase)
}