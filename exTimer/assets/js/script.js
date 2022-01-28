function timer() {
    const clock = document.querySelector('#timer');
    const start = document.querySelector('#start');
    const stopTime = document.querySelector('#stop');
    const reset = document.querySelector('#reset');
    let timer;
    let seconds = 0
    function getTimeFromSeconds(seconds) {
        const data = new Date(seconds * 1000);
        return data.toLocaleTimeString('pt-br', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    function startTimer() {
        timer = setInterval(function () {
            seconds++;
            clock.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }

    start.addEventListener('click', function () {
        clearInterval(timer);
        startTimer();
        clock.classList.remove('pausado');
    })

    stopTime.addEventListener('click', function () {
        clearInterval(timer);
        clock.classList.add('pausado');
    })

    reset.addEventListener('click', function () {
        clearInterval(timer);
        seconds = 0;
        clock.innerHTML = '00:00:00';
        clock.classList.remove('pausado');
    })
}

timer()