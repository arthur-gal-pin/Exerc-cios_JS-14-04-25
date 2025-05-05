//Exercício 5: Peça dois números ao usuário e exiba todos os números pares no intervalo entre eles. Exemplo: O usuário digita 11 e 20, seu programa deve apresentar os números 12, 14, 16, 18 e 20.
let numeroMe = parseInt(prompt("Insira o menor número:")); //Precisa do poder de variar para alterar seu valor posteriormente, para a correção de números menores ímpares
const numeroMa = parseInt(prompt("Insira o maior número:"));
let sequencia = "";

if (!isNaN(numeroMe) && !isNaN(numeroMa) && numeroMe < numeroMa && numeroMa > 0 && numeroMe >= 0) { //verifica se as variáveis realmente contém um número, e a relação entre os números.
    // Ajusta numeroMe para o próximo par se for ímpar
    if (numeroMe % 2 == 1) {
        numeroMe = (numeroMe + 1);
    }

    // Loop para adicionar os números pares à sequência
    for (let i = numeroMe; i <= numeroMa; i += 2) {
        sequencia += i + " ";
    }

    alert(sequencia);
} else {
    alert("Foi inserido um valor inválido.");
}