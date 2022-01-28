function soma() {
    const txtn1 = document.getElementById('txtn1');
    const txtn2 = document.getElementById('txtn2');
    const v1 = Number(txtn1.value);
    const v2 = Number(txtn2.value)

    return v1 + v2;
}

function clicar() {
    const total = soma();
    const res = document.getElementById('res');
    res.style.backgroundColor = "brown";
    res.style.color = "white";
    res.innerText = `Resultado: ${total}`;
}