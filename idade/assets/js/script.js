function validator() {
    const birthDate = document.querySelector('#birthy');
    const birthValue = Number(birthDate.value);
    const todayDate = new Date().getFullYear();
    const message = document.querySelector('#msg');

    if (birthValue > todayDate || birthValue <= 0) {
        alert('Data inválida');
    }
    else {
        const age = todayDate - birthValue;
        const check = document.getElementsByName('sex');
        let gender = '';
        const image = document.createElement('img');
        image.setAttribute('id', 'image');
        if (check[0].checked) {
            gender = 'Homem';

            if (age > 0 && age <= 12) {
                image.setAttribute('src', 'assets/img/kidm.png');
            }

            else if (age <= 19) {
                image.setAttribute('src', 'assets/img/teenm.png');
            }

            else if (age <= 50) {
                image.setAttribute('src', 'assets/img/adultm.png');
            }
            else {
                image.setAttribute('src', 'assets/img/elderlym.png');
            }
        }
        else {
            gender = "Mulher";

            if (age > 0 && age <= 12) {
                image.setAttribute('src', 'assets/img/kidw.png');
            }

            else if (age <= 19) {
                image.setAttribute('src', 'assets/img/teenw.png');
            }

            else if (age <= 50) {
                image.setAttribute('src', 'assets/img/adultw.png');
            }
            else {
                image.setAttribute('src', 'assets/img/elderlyw.png');
            }
        }

        message.style.textAlign = 'center';
        message.innerText = `Detectamos ${gender} de ${age} anos`;
        message.appendChild(image);
    }

}