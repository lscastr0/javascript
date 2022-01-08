function hora(){
    const hora = new Date();
    
    return hora.getHours();
}

function message(){
    const hr = hora();
    const msg = document.getElementById('msg');

    msg.innerHTML = `Agora são ${hr} horas`;
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

function backgorundColor(){
    const backG = document.querySelector('body');
    const hr = hora();

    if(hr > 0 && hr < 13){
        backG.style.backgroundColor = '#ccb991';
    }
    else if(hr < 18){
        backG.style.backgroundColor = '#b9846f';
    }
    else{
        backG.style.backgroundColor = '#515154' 
    }

}

function run(){
    message();
    image();
    backgorundColor()
}

const body = document.querySelector('body');
body.addEventListener('onload', run());
