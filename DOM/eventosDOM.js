function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert(`Usuário ${username} registrado!`)
    } else {
        alert(`ERROR: esqueceu a senha ${username}?`)
    }
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

function removerEvento() {
    button.removeEventListener('click', register)
    alert(`Usuário removido.`)
}