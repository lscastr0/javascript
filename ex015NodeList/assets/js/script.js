const div = document.querySelector('.paragrafos');
const p = div.querySelectorAll('p');

const estiloBody = getComputedStyle(document.body)
const backgroundColor = estiloBody.backgroundColor

// console.log(backgroundColor);

for (let i of p) {
    
    // i.style.backgroundColor = backgroundColor;
    // i.style.color = 'white';
    // i.style.margin = '1rem';
    i.setAttribute('class', 'p');
    console.log(i);
}