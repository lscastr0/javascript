// Array
const frutas = ['maçã', 'banana', 'pera'];

// for (let i in frutas) {
//     console.log(frutas[i]);
// }

// objeto
const pessoa = {
    nome: 'lucas',
    idade: 25,
    sexo: 'm'
}

// console.log(pessoa.nome);
// console.log(pessoa['nome']);

// for (let i in pessoa) {
//     console.log(i, pessoa[i]);
// }

for (let i of frutas){
    console.log(i);
}