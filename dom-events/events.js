//events handler
const p2 = document.querySelector('.p2')

function ubahWarna2() {
    p2.style.backgroundColor = 'orange'
}

p2.onclick = ubahWarna2
//addEventListener()


const p3 = document.querySelector('.p3')

function ubahWarna() {
    p3.style.backgroundColor = 'orange'
}

const btn = document.getElementById('btn')

btn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'Blue'
})

btn.addEventListener('mouseleave', function () {
    p2.style.backgroundColor = 'Blue'
})

btn.addEventListener('mouseenter', function () {
    p2.style.backgroundColor = 'Green'
})