function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.falaNome = () => {
        console.log(`${this.nome} ${this.sobrenome} fala olá!`);
    }


}

const p1 = new Pessoa('lucas', 'castro');
p1.falaNome();

const p2 = new Pessoa('aa', 'bb');
p2.falaNome();
