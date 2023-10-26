const burgerBtn = document.querySelector('.burgerBtn')
const menu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link')
const footerYear = document.querySelector(".footer__year");
const closeButton = document.querySelector('.menu__closeButton')
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

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


const handleCurrentYear = () => {
    const year = new Date().getFullYear();
    footerYear.innerText = year;
};

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

handleCurrentYear();
burgerBtn.addEventListener('click', btn)
menu.addEventListener('click',closeMenu)
closeButton.addEventListener('click',closeMenu)