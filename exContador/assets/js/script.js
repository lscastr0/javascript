function calcular(){
    const start = document.querySelector('#inicio');
    const end = document.querySelector('#fim');
    const step = document.querySelector('#passo');
    let startValue = Number(start.value);
    let endValue = Number(end.value);
    let stepValue = Number(step.value);

    if(start.value === ''|| end.value === ''){
        alert('Valor inválido!');
    }
    
    else{
        const msg = document.querySelector('#msg');
        msg.innerHTML = 'contando... '

        if(step.value === '' || stepValue === 0){
            alert ('Passo inválido! Considerando passo 1');
            stepValue = 1;
        }

        if(startValue < endValue){
            for(let i = startValue; i <= endValue; i+= stepValue){
                msg.innerHTML += `${i} \u{1F449}`;
            }
        }
        else{
            for(let i = startValue; i >= endValue; i-= stepValue){
                msg.innerHTML += `${i} \u{1F449}`;
            }
        }

        msg.innerHTML += `\u{1f3c1}`;
    }
    
}