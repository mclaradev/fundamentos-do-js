document.getElementById('sessionBtn').addEventListener('click', function () {
    const input = document.getElementById('session')
    sessionStorage.setItem('info', input.value)
    input.value = ''
})

document.getElementById('readSession').addEventListener('click', function() {
    const info = sessionStorage.getItem('info')
    alert(`A informação salva é: "${info}".`)
})

document.getElementById('localBtn').addEventListener('click', function () {
    const input = document.getElementById('local')
    localStorage.setItem('text', input.value)
    input.value = ''
})

document.getElementById('readLocal').addEventListener('click', function() {
    const t = localStorage.getItem('text')
    alert(`A informação salva é: "${t}".`)
})

document.getElementById('cookieBtn2').addEventListener('click', function() {
    const input = document.getElementById('cookie2')
    const cookie = `text= ${input.value};`
    const expiration = `expires= ${new Date(2024, 1, 28)};`
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    input.value = ''
    console.log(document.cookie)
})