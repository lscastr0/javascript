var nome = window.prompt("Qual é o seu nome?");
document.write(`Olá ${nome} seu <strong>nome</strong> tem ${nome.length} letras<br>`);

document.write(`Seu nome em maisculo é ${nome.toUpperCase()}<br>`);

document.write(`Seu nome em minusculo é ${nome.toLocaleLowerCase()}`);