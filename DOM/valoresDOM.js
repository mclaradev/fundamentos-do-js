function register(element) {
    const username = element.children.username.value
    const password = element.children.password.value
    const passwordConfirmation = element.children.passwordConfirmation.value

    if (password === passwordConfirmation) {
        alert(`Parabéns ${username} por se cadastrar!`)
    } else {
        alert(`ERROR: esqueceu a senha ${username}? Preste mais atenção.`)
    }
}