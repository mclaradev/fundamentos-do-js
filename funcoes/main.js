function ola() {
    alert("Olá, Mundo! Estou estudando funções.\nIsso é uma função simples, sem parâmetros.")
    alert("Para ver o resultado de outras funções, vá em Inspecionar Site.\nPara ver o código completo, vá para o meu github.")
}

ola()

// O parâmetro é a entrada da função.

// Ele é como uma variável que fica disponível dentro da função
// mas que é informada na hora de chamar a função

function dobro(x) {
    console.log(`Agora vamos estudar parâmetros.\nVamos começar com um simples exemplo que você vai ver no código.\nO dobro de ${x} é: ${x * 2}`)
}

dobro(5)

// Se uma função for chamada sem informar o parâmetro
// o valor usado para ele será o undefined

dobro()

// Mas podemos declarar um valor padrão para um parãmetro, assim, 
// se ele não for informado, o valor padrão será usado no lugar do undefined

function dizerOla(nome = "Mundo") {
    alert(`O valor de undefined é NaN? hmmm, acabei de resolver isso. veja no código.\nOlá ${nome}!`)
}

dizerOla("Galera")
dizerOla()

// Uma função pode ter quantos parâmetros quisermos, basta separaá-los por vírgula

function soma(a, b) {
    alert(`Muito estranho não entender oq estou fazendo não é? Veja o código no github e talvez você entenda!\nAgora vamos para uma função com dois parâmetros, um exemplo? uma soma! Veja:\nA soma de ${a} + ${b} é igual a: ${a + b}`)
}

soma(5, 5)
soma(10, 40)

alert("Acabamos por aqui. Mas tem uma surpresa se você inspecionar o site.")

// Ao usar vários parâmetros, é recomendado deixar aqueles com valor padrão por último

function criarUsuario(nome, email, senha, tipo = "leitor") {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
}

function novoUsuario(nome, tipo = "leitor", email, senha) {
    const usuario = { nome, email, senha, tipo }
    console.log(usuario)
}

criarUsuario("usuário", "usuario@email.com", "1234")
novoUsuario("usuário", "usuario@email.com", "1234")

// Ao criarmos uma função com muitos parâmetros,
// uma boa prática é substituí-los por um objeto

function parametrosDoJeitoErrado(nome, telefone, endereco, aniversario, email, senha) {
    // ...
}

function parametrosDoJeitoCerto(usuario) {
    // ...
}

// Além de facilitar na chamada da função, a ordem dos parâmetros se torna irrelevante

parametrosDoJeitoErrado("nome", "telefone", "endereco", "aniversario", "email", "senha")
const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    aniversario: "",
    endereco: ""
}

parametrosDoJeitoCerto(dadosDoUsuario)