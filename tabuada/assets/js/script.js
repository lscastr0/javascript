function calcular() {
    const selection = document.querySelector('#selection');
    const numero = document.querySelector('#numero');
    const numeroValue = Number(numero.value);
    let option;
    
    if(numero.value === ''){
        window.alert('Digite um número!');
    }
    else{
        
        selection.innerHTML = '';

        for(let i = 1; i <= 10; i++){
            let tot = numeroValue * i
            option = document.createElement('option');
            option.className = 'opt';
            option.value = `opt${i}`
            option.innerText = `${numeroValue} X ${i} = ${tot}`;
            selection.appendChild(option);
        }
    }
    

}