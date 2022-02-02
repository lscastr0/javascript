//A função definida com a palvra function tem uma variavel especial que se chama arguments que sustenta todos os argumentos enviados

function funcao() {
    let total = 0
    for (argumento of arguments) {
        total += argumento

        console.log(total);
    }

}

funcao(0, 1, 2, 3);