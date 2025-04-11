
function ShowSidebar() {
    document.querySelector('.sidebar').style.display = "flex";
  }
  
  function CloseSidebar() {
    document.querySelector('.sidebar').style.display = "none";
  }
  
  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".carousel-card");
    const btnLeft = document.querySelector(".carousel-btn.left");
    const btnRight = document.querySelector(".carousel-btn.right");
    let currentIndex = 0;
  
    function updateCarousel() {
        const isMobile = window.innerWidth <= 768;
        const isSmallMobile = window.innerWidth <= 479;
      
        cards.forEach((card, i) => {
          card.classList.remove("center", "left", "right");
          card.style.pointerEvents = "none";
      
          if (isMobile) {
            
            if (i === currentIndex) {
              card.classList.add("center");
              card.style.display = "block";
              card.style.pointerEvents = "auto";
            } else {
              card.style.display = "none";
            }
      
          
            card.style.position = "static";
            card.style.transform = "none";
          } else {
           
            card.style.display = "block";
            card.style.position = "absolute";
      
            if (i === currentIndex) {
              card.classList.add("center");
              card.style.pointerEvents = "auto";
            }
      
            const leftIndex = (currentIndex - 1 + cards.length) % cards.length;
            const rightIndex = (currentIndex + 1) % cards.length;
      
            if (i === leftIndex) {
              card.classList.add("left");
            } else if (i === rightIndex) {
              card.classList.add("right");
            }
          }
        });
      }
      
  
    btnLeft.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length;
      updateCarousel();
    });
  
    btnRight.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % cards.length;
      updateCarousel();
    });
  
    window.addEventListener("resize", updateCarousel);
  
    updateCarousel();
  });

  
document.addEventListener("click", function (event) {
  const sidebar = document.querySelector(".sidebar");
  const hamburger = document.querySelector(".menu-button");

  
  if (sidebar && sidebar.style.display === "flex") {
    const clickedInsideSidebar = sidebar.contains(event.target);
    const clickedOnHamburger = hamburger.contains(event.target);

    if (!clickedInsideSidebar && !clickedOnHamburger) {
      CloseSidebar();
    }
  }
});

  

