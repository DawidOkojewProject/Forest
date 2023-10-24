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
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();


    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Wypełnij wszystkie pola formularza.');
        return;
    }

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';

    alert('Formularz został wysłany!');
});