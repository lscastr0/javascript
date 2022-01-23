// Escreva uma função que recebe 2 númeos e retorna o maior deles

function maiorNumero(n1, n2) {
    return Math.max(n1, n2);
}

console.log(maiorNumero(23, 12));

// arrow function

const max = (n1, n2) => Math.max(n1, n2);

console.log(max(100, 12));
console.log('##########');

const numero = {nome: 'lucas', idade: 25};