const btnSatu = document.getElementById('buttonSatu')
const btnDua = document.getElementById('buttonDua')
const btnTiga = document.getElementById('buttonTiga')
const btnEmpat = document.getElementById('buttonEmpat')
const btnLima = document.getElementById('buttonLima')
const btnEnam = document.getElementById('buttonEnam')
const btnTujuh = document.getElementById('buttonTujuh')
const btnDelapan = document.getElementById('buttonDelapan')
const btnSembilan = document.getElementById('buttonSembilan')
const btnSepuluh = document.getElementById('buttonSepuluh')

const allParagraph = document.getElementsByTagName('p')
const container = document.getElementById('container')
const classP1 = document.querySelector('.p1')
const ulMentor = document.querySelector('ul')
const mentor3 = ulMentor.querySelector('li:nth-child(3)')
const mentor1 = ulMentor.querySelector('li:nth-child(1)')
const judul = document.getElementById('judul')
const sectionA = document.getElementById('a')
const tagA = sectionA.querySelector('a')

btnSatu.addEventListener('click', function () {
    for (let index = 0; index < allParagraph.length; index++) {
        allParagraph[index].style.backgroundColor = 'Red'
    }
})

btnDua.addEventListener('click', function () {
    btnDua.style.backgroundColor = 'Blue'
    btnDua.style.color = 'White'
})

btnTiga.addEventListener('click', function () {
    for (let index = 0; index < allParagraph.length; index++) {
        allParagraph[index].style.fontFamily = 'Calibri'
        allParagraph[index].style.color = 'Yellow'
    }
})

btnEmpat.addEventListener('click', function () {
    for (let index = 0; index < allParagraph.length; index++) {
        allParagraph[index].style.fontSize = 'Large'
    }
})

btnLima.addEventListener('click', function () {
    container.style.backgroundColor = 'Black'
})

btnEnam.addEventListener('click', function () {
    const newElementH1 = document.createElement('h1')
    const textH1 = document.createTextNode('selamat datang di dojobox.id')
    const parentNode = document.getElementById('a')

    newElementH1.appendChild(textH1)

    parentNode.replaceChild(newElementH1, classP1)
})

btnTujuh.addEventListener('click', function () {
    const newElementMentor = document.createElement('li')
    const textMentor = document.createTextNode('Andika')
    newElementMentor.appendChild(textMentor)

    ulMentor.insertBefore(newElementMentor, mentor3)
    ulMentor.removeChild(mentor1)
})

btnDelapan.addEventListener('click', function () {
    judul.innerHTML = 'Post Test'
})

btnSembilan.addEventListener('click', function () {
    tagA.removeAttribute('href')
})

btnSepuluh.addEventListener('click', function () {
    const newElementLink = document.createElement('a')
    const textLink = document.createTextNode('Link Github Fadhil')
    newElementLink.appendChild(textLink)
    newElementLink.setAttribute('href', 'https://github.com/fadhilr')

    sectionA.insertBefore(newElementLink, tagA)
})