const elementos = [
    {tag: 'p', texto: 'Um texto qualquer'},
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'section', texto: 'frase 3'},
    {tag: 'footer', texto: 'frase 4'},
]

function msg(array){
    const main = document.querySelector('.main');

    for(let i = 0; i < array.length; i++) {
        let {tag, texto} = array[i]
        let elemento = document.createElement(tag);
        elemento.innerHTML = `${texto}`;
        main.appendChild(elemento);
    }

}

msg(elementos)