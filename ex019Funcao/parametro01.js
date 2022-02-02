function a() {
    console.log('funcção comum');
}

const b = function () {
    console.log('function expression');
}

const c = () => {
    console.log('Arrow function');
}

function d(funcao) {
    funcao();
}

a();
b();
c();
d(a);