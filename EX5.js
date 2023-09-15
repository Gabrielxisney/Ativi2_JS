function encontrarMenorMaior(vetor) {
    if (vetor.length === 0) {
        return "O vetor está vazio.";
    }

    let menor = vetor[0];
    let maior = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] < menor) {
            menor = vetor[i];
        }
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }

    return `Menor número: ${menor}, Maior número: ${maior}`;
}

// Exemplo de uso:
const numeros = [12, 5, 9, -3, 21, 7, 0];
const resultado = encontrarMenorMaior(numeros);
console.log(resultado);
