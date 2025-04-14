//Exercício 3: Peça ao usuário um número e exiba a tabuada de 1 a 10 desse número.

const num = parseInt(prompt("Escolha um número para exibir sua tabuada."));
let frase = "";
if (isNaN(num) || num <= 1) {
    alert("Valor inválido.");
} else {
    for (let i = 1; i <= 10; i++) {
        frase = (frase + `${num} × ${i} = ${num * i} \n`)
    }
    alert(frase)
}




