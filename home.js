//animação
const gifContainer = document.getElementById('gif-container')
const content = document.getElementById('content')

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        gifContainer.style.opacity = '0'
        content.style.opacity = '1'
        content.style.display = 'block'
    }, 6200)
})

