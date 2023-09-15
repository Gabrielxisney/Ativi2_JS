function formatarMoeda(valor) {
    
    const valorArredondado = Math.round(valor * 100) / 100;

    const valorFormatado = valorArredondado.toFixed(2);

    const valorFinal = valorFormatado.replace(".", ",");

    return `R$${valorFinal}`;
}

const valor = 0.30000000000000004;
const valorFormatado = formatarMoeda(valor);
console.log(valorFormatado);
