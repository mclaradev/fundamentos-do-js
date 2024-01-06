let pessoa = {
    nome: "flora",
    idade: 20,
    dizerOla() {
        alert(`Olá, Mundo! Meu nome é ${this.nome}`)
    }
}

console.log(pessoa)
pessoa.dizerOla()