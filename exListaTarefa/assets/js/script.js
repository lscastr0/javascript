const tarefa = document.querySelector('#tarefa');
const adicionar = document.querySelector('#adicionar');
const del = document.querySelectorAll('.del');
adicionar.addEventListener('click', function () {
    if (!tarefa.value) {
        alert('Digite uma tarefa!');
        return;
    }

    const li = criaLi();
    setMsg(li);
    limpaInput();
});

function criaLi() {
    const li = document.createElement('li');
    li.setAttribute('class', 'tarefa');
    return li;
}

function criaBtn() {
    const btn = document.createElement('button');
    btn.innerHTML = 'Deletar';
    btn.setAttribute('class', 'del');

    return btn;
}

function setMsg(li) {
    const lista = document.querySelector('#lista');
    const btn = criaBtn();
    li.innerHTML = tarefa.value;
    li.appendChild(btn);
    lista.appendChild(li);
}

function limpaInput() {
    tarefa.value = '';
    tarefa.focus();
}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('del')) {
        el.parentElement.remove();
    }
});

tarefa.addEventListener('keypress', function (e) {
    console.log(e);
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
        if (!tarefa.value) {
            alert('Digite uma tarefa!');
            return;
        }

        const li = criaLi();
        setMsg(li);
        limpaInput();
    }
});