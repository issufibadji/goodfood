/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById('nav-toggle'),
        nav = document.getElementById('nav-menu')

    //Valida se as variáveis existem, variáveis essas que são
    if (toggle && nav) {
        //Tendo a existência das variáveis, podemos adicionar a classe 'show-menu' a barra de navegação
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //Quando clicamos em cada 'nav-link', a classe 'show-menu' é removida do menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== CHANGE BACKGROUND COLOR ===============*/
function scrollHeader() {
    const nav = document.getElementById('header')

    //Quando o Scroll é maior do que 200vh, adicionamos a classe 'scroll-header' ao header
    if (this.scrollY >= 200)
        nav.classList.add('scroll-header')
    else
        nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL TOP ===============*/
function scrollTop() {
    const scrollTop = document.getElementById('scroll-top')

    //Quando o Scroll é maior do que 560vh, adicionamos a classe 'scroll-header' ao header
    if (this.scrollY >= 560)
        scrollTop.classList.add('scroll-active')
    else
        scrollTop.classList.remove('scroll-active')
}
window.addEventListener('scroll', scrollTop)

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'


//Armazena no LocalStorage
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')


//Obtemos o tema atual que a interface tem validando a classe 'dark-theme'
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light'

//Obtemos o ícone atual que a interface tem validando a sua classe
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

//Validamos se o usuário selecionou algo anteriormente
if (selectedTheme) {
    //Se a verificação for bem-sucedida, 'perguntamos' se ativamos ou desativamos o 'dark-theme'
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}


//Ativar / Desativar o tema manualmente com o botão
themeButton.addEventListener('click', () => {
    //Adiciona ou remove a classe 'dark-theme' do body
    document.body.classList.toggle('dark-theme')

    //Adiciona ou remove a classe 'bxs-sun' do ícone
    themeButton.classList.toggle(iconTheme)

    //É salvo o tema e o atual ícone que o usuário alterou
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})