//Exercício 4: Peça dois números ao usuário e exiba todos os números pares no intervalo entre eles. Exemplo: O usuário digita 11 e 20, seu programa deve apresentar os números 12, 14, 16, 18 e 20.
const numeroMe = parseInt(prompt("Insira o menor número:"));
const numeroMa = parseInt(prompt("Insira o maior número:"));
sequencia = "";

if (!isNaN(numeroMa) && !isNaN(numeroMa) && numeroMe < numeroMa && numeroMa > 0 && numeroMe >= 0) {
    if (numeroMe % 2 != 0) {
        numeroMe = numeroMe + 1;
        for (let i = numeroMe; i <= numeroMa; i += 2) {
            sequencia += i + " ";
        }
    } else {
        for (let i = numeroMe; i <= numeroMa; i += 2) {
            sequencia += i + " ";
        }
    }
    alert(sequencia);
} else {
    alert("Foi inserido um valor inválido.");
}



