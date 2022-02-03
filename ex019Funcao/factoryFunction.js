//Factory function(função fábrica)
function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join();
        },

        fala(assunto = 'nada') {
            return `${this.nome} está falando sobre ${assunto}`;
        },

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);

            return indice.toFixed(2);
        }
    }
}

const p2 = criaPessoa('Maria', 'Joaquinha', 1.60, 45);

console.log(p2.fala());

console.log(p2.imc);

p2.nomeCompleto = 'João Garcia';
console.log(p2.nomeCompleto);
