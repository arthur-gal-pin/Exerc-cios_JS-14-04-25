//Exercício 4: Crie um programa que solicite 5 notas e calcule a média delas.
alert("Insira suas notas:");
let soma = 0;
let num = 0;

for (let i = 1; i <= 5; i++) {

    num = parseFloat(prompt(`Nota da prova ${i}:`)); // Solicita as notas ao usuário

    if (isNaN(num) || num < 0 || num > 10) {
        alert("Valor inválido.");
    } else {
        soma += num; // Adiciona o número à soma
    }
}
const media = soma / 5
alert("A sua média alcançada foi de: " + media.toFixed(2) + " pontos."); // Exibe a média final


