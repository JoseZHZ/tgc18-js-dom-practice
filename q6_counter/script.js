let box = document.querySelector('#id')
document.querySelector('#increment').addEventListener('click', function() {
    if (box.innerHTML < 10) {
        box.innerHTML = parseInt(box.innerHTML) + 1
    }
})
document.querySelector('#decrement').addEventListener('click', function() {
    if (box.innerHTML > 0) {
        box.innerHTML = parseInt(box.innerHTML) - 1
    }
})
document.querySelector('#reset').addEventListener('click', function() {
    box.innerHTML = 0
})
