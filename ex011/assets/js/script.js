function global() {
    const button = document.querySelector('#btn');
    const resultado = document.querySelector('.resp');

    const pessoas = [];


    function recebeEvento() {

        const nome = document.querySelector('#nome');
        const sobrenome = document.querySelector('#sobrenome');
        const peso = document.querySelector('#peso');
        const altura = document.querySelector('#altura');

        if (!nome.value) {
            alert('preencha todos os campos');
            console.log(!nome.value);

        } else {
            
            pessoas.push({
                nome: nome.value,
                sobrenome: sobrenome.value,
                peso: peso.value,
                altura: altura.value
            })

            console.log(pessoas);

            resultado.innerHTML += ` ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}<br>`
        }
    }

    button.addEventListener('click', recebeEvento);
}

global();