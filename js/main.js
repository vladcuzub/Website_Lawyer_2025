document.addEventListener('DOMContentLoaded', function () {
      // Effect fade-in  for Title
 

      // Effect  slide-in for text
      ScrollReveal().reveal('.scroll_100', {
            delay: 100,
            duration: 1000,
            origin: 'bottom',
            distance: '100px',
            opacity: 0,
            // scale: 0.8,
            // reset: true
      });

      ScrollReveal().reveal('.scroll_200', {
            delay: 250,
            duration: 1500,
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
            duration: 1500,
            origin: 'bottom',
            distance: '100px',
            opacity: 0,
            // reset: true
      });

      ScrollReveal().reveal('.scroll_400', {
            delay: 800,
            duration: 1700,
            origin: 'bottom',
            distance: '100px',
            opacity: 0,
            // reset: true
      });
      ScrollReveal().reveal('.scroll_500', {
            delay: 1000,
            duration: 1900,
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
