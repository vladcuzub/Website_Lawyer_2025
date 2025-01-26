document.addEventListener('DOMContentLoaded', function () {
      // Effect fade-in  for Title
 

      // Effect  slide-in for text
      ScrollReveal().reveal('.scroll_200', {
            delay: 100,
            duration: 1000,
            origin: 'bottom',
            distance: '100px',
            opacity: 0,
            // scale: 0.8,
            // reset: true
      });

      // Effect slide-up for other elements
      ScrollReveal().reveal('.scroll_300', {
            delay: 300,
            duration: 1500,
            origin: 'bottom',
            distance: '100px',
            opacity: 0,
            // reset: true
      });

      ScrollReveal().reveal('.scroll_350', {
            delay: 500,
            duration: 2000,
            origin: 'bottom',
            distance: '100px',
            opacity: 0,
            // reset: true
      });

      ScrollReveal().reveal('.scroll_400', {
            delay: 700,
            duration: 2000,
            origin: 'bottom',
            distance: '100px',
            opacity: 0,
            // reset: true
      });
      ScrollReveal().reveal('.scroll_500', {
            delay: 900,
            duration: 2000,
            origin: 'bottom',
            distance: '100px',
            opacity: 0,
            // reset: true
      });




      //Menu button dropdown
      const menuButton = document.querySelector('.menu_button');
      const navList = document.querySelector('.nav_list');
      const navLinks = document.querySelectorAll('.nav_link');

      menuButton.addEventListener('click', function () {
            navList.classList.toggle('active');
            menuButton.classList.toggle('active');
      });

      //Active link
      navLinks.forEach(function (navLink) {
            navLink.addEventListener('click', function () {
                  navLinks.forEach(function (navLink) {
                        navLink.classList.remove('active');
                  });
                  this.classList.add('active');
            });
      });
});



//popup Online User
//       document.addEventListener("DOMContentLoaded", function() {
//             function randomUserCount(min, max) {
//                   return Math.floor(Math.random() * (max - min + 1)) + min;
//             }

//         function showPopup() {
//             const popup = document.getElementById('popup');
//       const onlineCount = document.getElementById('onlineCount');

//       if (!popup || !onlineCount) return; // Verificăm dacă elementele există

//       // Generează un număr fictiv între 10 și 48
//       const userCount = randomUserCount(10, 48);
//       onlineCount.textContent = userCount;

//       // Afișează pop-up-ul
//       popup.style.display = 'block';

//             // Ascunde pop-up-ul după 5 secunde
//             setTimeout(() => {
//             popup.style.display = 'none';
//             }, 5000);
//         }

//       // Afișează pop-up-ul imediat când se încarcă pagina
//       showPopup();

//       // Afișează pop-up-ul la fiecare 5 secunde
//       setInterval(showPopup, 5000);
//     });



//Count Animation

document.addEventListener("DOMContentLoaded", () => {
      const counters = document.querySelectorAll(".count_title"); // Selectăm elementele cu numere
      const section = document.querySelector(".count_section"); // Selectăm secțiunea care conține numerele

      if (!section || counters.length === 0) {
            console.error("Elementul '.count_section' sau '.count_title' nu a fost găsit în DOM.");
            return;
      }

      let hasAnimated = false; // Flag pentru a preveni animația repetată

      function animateNumbers() {
            counters.forEach(counter => {
                  const text = counter.textContent.trim(); // Extragem textul complet
                  const target = parseInt(text.replace(/\D/g, "")); // Extragem numărul (fără simboluri)
                  const symbol = text.replace(/\d/g, ""); // Extragem simbolurile (tot ce nu e cifră)
                  counter.textContent = "0" + symbol; // Setăm valoarea inițială

                  let count = 0;
                  const increment = Math.ceil(target / 100); // Incrementare graduală
                  const interval = setInterval(() => {
                        count += increment;
                        if (count >= target) {
                              counter.textContent = target + symbol; // Adăugăm simbolurile la final
                              clearInterval(interval);
                        } else {
                              counter.textContent = count + symbol; // Adăugăm simbolurile progresiv
                        }
                  }, 10); // Viteză animație (20ms)
            });
      }

      function handleScroll() {
            const sectionPosition = section.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (sectionPosition < viewportHeight && !hasAnimated) {
                  section.classList.add("visible"); // Adăugăm clasa pentru tranziție
                  animateNumbers(); // Pornim animația numerelor
                  hasAnimated = true; // Evităm repetarea animației
            }
      }

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Rulăm o dată la încărcare în cazul în care secțiunea este deja vizibilă
});



//Apel pe Dispozitive mobile 
const whatsappButton = document.querySelector('.whatsapp-button a');
whatsappButton.addEventListener('click', (event) => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      if (isMobile) {
            whatsappButton.href = `whatsapp://send?phone=1234567890`;
      } else {
            whatsappButton.href = `https://wa.me/1234567890`;
      }
});
