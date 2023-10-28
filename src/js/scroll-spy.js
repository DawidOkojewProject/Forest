const section = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
  
    section.forEach((sec) => {
      const offset = sec.offsetTop - 250; // Poprawione przesunięcie o 10 pikseli
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
  
      if (scrollY >= offset && scrollY < offset + height) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
        });
        document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        console.log(`header nav a[href="#${id}"]`);
      }
    });
  });
  