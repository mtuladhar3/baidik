 var swiper = new Swiper(".mySwiper", {
     loop: true,
     speed: 1000,
     autoplay: {
         delay: 5000,
         disableOnInteraction: false,
     },
     pagination: {
         el: ".swiper-pagination",
         clickable: true,
     },
 });

 document.addEventListener("DOMContentLoaded", function() {
     const cardItems = document.querySelectorAll(".avorica-feature-grid .feature-card-item");

     cardItems.forEach((card) => {
         card.addEventListener("mouseenter", function() {
             // Remove the active colored class from all card modules
             cardItems.forEach((item) => item.classList.remove("active"));

             // Apply the color system specifically to this hovered item
             this.classList.add("active");
         });
     });
 });

 document.addEventListener("DOMContentLoaded", () => {
    
    // Config properties for the intersection observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: "0px 0px -80px 0px", // triggers slightly before entering the frame view
        threshold: 0.15 // 15% visibility required to trigger
    };

    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Apply the animation transition trigger
                entry.target.classList.add("active");
                // Stop observing once animated into view
                observer.unobserve(entry.target);
            }
        });
    };

    // Instantiate engine instance
    const scrollObserver = new IntersectionObserver(revealCallback, observerOptions);

    // Target elements to trace inside main framework
    const targetElements = document.querySelectorAll(".reveal-element");
    targetElements.forEach(element => scrollObserver.observe(element));
});

document.addEventListener("DOMContentLoaded", () => {
      const cards = document.querySelectorAll('.js-git-hover-card');

      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          // Remove active class from whichever card currently has it
          cards.forEach(c => c.classList.remove('git-active'));
          
          // Add active state to the currently hovered card
          card.classList.add('git-active');
        });
      });
    });