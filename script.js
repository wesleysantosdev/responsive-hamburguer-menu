const hamburguerMenu = document.querySelector('.hamburguer-menu')
const menu = document.querySelector('.menu')

/*this will show the menu whenever we click on the hamburguer menu, also also hide it when we click it again*/
hamburguerMenu.addEventListener('click', () => {
    hamburguerMenu.classList.toggle('active')
    menu.classList.toggle('active')
})

/*this will make sure that the menu hides whenever we click on any of the links inside the menu */
document.querySelectorAll('.link').forEach(event => event.addEventListener('click', () => {
    hamburguerMenu.classList.remove('active')
    menu.classList.remove('active')
}))

