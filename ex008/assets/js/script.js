function hora(){
    const hora = new Date();
    
    return hora.getHours();
}

function message(){
    const hr = hora();
    const msg = document.getElementById('msg');

    return msg.innerHTML = `Agora são ${hr} horas`;
}

function image(){
    const hr = hora();
    const img = document.getElementById('image');

    if(hr > 0 && hr < 13){
        img.src = 'assets/img/morning.png';
    }
    else if(hr < 18){
        img.src = 'assets/img/afternoon.png';
    }
    else{
        img.src = "assets/img/night.png"; 
    }

}

function run(){
    message();
    image();
}

const body = document.querySelector('body');
body.addEventListener('onload', run());
