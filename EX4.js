function eDivisivelPor3(numero) {
    return numero % 3 === 0;
}

const numero = 9; // Altere o número conforme necessário
const resultado = eDivisivelPor3(numero);

if (resultado) {
    console.log(`${numero} é divisível por 3.`);
} else {
    console.log(`${numero} não é divisível por 3.`);
}
