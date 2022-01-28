function hora() {
    const data = new Date();

    return data.toLocaleTimeString('pt-BR', {hour12: false, dateStyle: 'full', timeStyle: 'medium'});
}

const timer = setInterval(function () {
    console.log(hora());
}, 1000);

setTimeout(function() {
    clearInterval(timer);
}, 3000);

setTimeout(function() {
    console.log('hello world');
}, 3000);