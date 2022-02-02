//desestruturação com objetos

function funcao({ numero1, numero2, numero3, numero4 }) {

    console.log(numero1, numero3);

}

const numeros = { numero1: 0, numero2: 1, numero3: 2, numero4: 3 }

funcao(numeros);