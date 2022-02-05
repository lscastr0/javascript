function Calculadora() {
    const display = document.querySelector('.display');

    this.inicia = () => {
        cliqueBtn();
        cliqueEnter();
    };

    function btnClear() {
        display.value = '';
        display.focus();
    };

    function apagaUm() {
        display.value = display.value.slice(0, -1);
        display.focus();
    };

    function calcula() {
        try {

            display.value = eval(display.value);

        } catch (e) {
            display.value = 'impossivel calcular';
        }
    };

    function cliqueBtn() {
        document.addEventListener('click', (e) => {
            const el = e.target;

            if (el.classList.contains('num')) {
                display.value += el.innerText;
                display.focus();
            }

            if (el.classList.contains('clear')) {
                btnClear();
            }

            if (el.classList.contains('del')) {
                apagaUm();
            }

            if (el.classList.contains('eq')) {
                calcula();
            }
        });
    };

    function cliqueEnter() {
        document.addEventListener('keypress', (e) => {
            if (e.code === 'Enter' || e.code === "NumpadEnter") {
                calcula();
            }
        })
    }

}

const calculadora = new Calculadora();
calculadora.inicia();