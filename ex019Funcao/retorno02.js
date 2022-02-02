function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('olá');
console.log(olaMundo('mundo'));

function multiplica(multiplicador) {
    function numero(numero) {
        return numero * multiplicador;
    }
    return numero;
}

const duplica = multiplica(2);
console.log(duplica(5));