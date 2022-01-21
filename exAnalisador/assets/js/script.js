function main() {
    const numero = document.querySelector('#numero');
    const adicionar = document.querySelector('#adicionar');

    const array = [];

    adicionar.addEventListener('click', function () {
        const valor = valida(Number(numero.value));

        if (valor) {
            const option = createOption();
            message(option, valor);

            array.push(valor);
        }

        numero.value = '';
        console.log(array)
    });
}

function valida(inputValue) {
    if (!inputValue || inputValue <= 1 || inputValue >= 100) {
        alert('valor inválido');

        return false;
    }

    return inputValue;
}

function createOption() {
    const option = document.createElement('option');

    return option;
}

function message(option, value) {
    const selection = document.querySelector('#selection');
    selection.appendChild(option);

    option.innerHTML = `Número ${value} adicionado`;
}

main()
