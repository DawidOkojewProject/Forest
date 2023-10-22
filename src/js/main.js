const burgerBtn = document.querySelector('.burgerBtn')
const menu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link')

const btn = () => {
	menu.classList.toggle('active')

	menuLinks.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.remove('active')
		})
	})
}
const closeMenu =() =>{
    menu.classList.remove('active')
}


burgerBtn.addEventListener('click', btn)
menu.addEventListener('click',closeMenu)
