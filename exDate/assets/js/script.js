function getFullDate() {
    const fullDate = new Date();
    const option = { dateStyle: 'full', timeStyle: 'short' };

    return fullDate.toLocaleString('pt-BR', option);
}

function cretateP() {
    const p = document.createElement('p');
    p.classList.add('hora');

    return p;
}

function message() {
    const p = cretateP();
    const section = document.querySelector('.main');

    p.innerHTML = `${getFullDate()}`;
    section.appendChild(p);
}

document.onload = `${message()}`
