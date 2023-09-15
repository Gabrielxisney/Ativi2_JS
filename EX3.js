function jurosSimples(capitalInicial, taxaDeJuros, tempo) {
    const juros = capitalInicial * (taxaDeJuros / 100) * tempo;
    const montante = capitalInicial + juros;
    return montante;
}

const capital = 1000;
const taxa = 5;
const tempo = 3;

const montanteJurosSimples = jurosSimples(capital, taxa, tempo);
console.log(`Montante com juros simples: R$${montanteJurosSimples.toFixed(2)}`);


function jurosCompostos(capitalInicial, taxaDeJuros, tempo) {
    const montante = capitalInicial * Math.pow((1 + taxaDeJuros / 100), tempo);
    return montante;
}

const capital2 = 1000;
const taxa2 = 5;
const tempo2 = 3;

const montanteJurosCompostos = jurosCompostos(capital, taxa, tempo);
console.log(`Montante com juros compostos: R$${montanteJurosCompostos.toFixed(2)}`);
