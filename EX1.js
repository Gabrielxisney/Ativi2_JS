function classificarTriangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return "Equilatero";
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        return "Isosceles";
    } else {
        return "Escaleno";
    }
}

const ladoA = 5;
const ladoB = 5;
const ladoC = 5;

const resultado = classificarTriangulo(ladoA, ladoB, ladoC);
console.log(`O triangulo é ${resultado}`);
