function useLightTheme () {
    document.body.style.color = "#212529"
    document.body.style.backgroundColor = "#fff"
}

function useDarkTheme () {
    document.body.style.color = "#fff"
    document.body.style.backgroundColor = "#212529"
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)