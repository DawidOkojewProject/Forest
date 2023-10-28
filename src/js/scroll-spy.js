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
        // console.log(`header nav a[href="#${id}"]`);
      }
    });
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    // Pobierz wszystkie linki z klasą "menu-link"
    let menuLinks = document.querySelectorAll(".menu-link");

    // Obsługa kliknięcia w linki menu
    menuLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            // Zatrzymaj domyślne zachowanie linku (przewijanie)
            event.preventDefault();

            // Pobierz ID sekcji z atrybutu href linka
            let targetId = link.getAttribute("href").substring(1);

            // Znajdź docelowy element o danym ID
            let targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Pobierz wysokość menu
                let menuHeight = document.querySelector(".menu").offsetHeight;

                // Oblicz pozycję docelowego elementu minus wysokość menu
                let offsetTop = targetElement.offsetTop - 60;

                // Przewiń do docelowego elementu
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth" // Wygładzone przewijanie
                });
            }
        });
    });
});