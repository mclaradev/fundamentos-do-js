const form = document.getElementById('orderForm')

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const name = document.querySelector('input[name="name"]').value
    const adress = document.querySelector('input[name="adress"]').value
    const breadType = document.querySelector('select[name="breadType"]').value
    const main = document.querySelector('input[name="main"]').value
    const observations = document.querySelector('textarea[name="observations"]').value

    let salad = ''
    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item) {
        salad += `- ${item.value}\n`
    })

    console.log({
        name,
        adress,
        breadType,
        main,
        salad,
        observations
    })

    alert(`
    Pedido Realizado! Confirme os dados abaixo:\n
    Cliente: ${name}\n
    Pedido: ${breadType}, ${main} e ${salad}\n
    Obsarvação: ${observations}
    Endereço: ${adress}`)
})