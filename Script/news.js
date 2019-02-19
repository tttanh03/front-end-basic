

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

}
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 0,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }, 
    loop: true,
      loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
 
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is <= 1065px
      1065: {
          slidesPerView: 3,
          
      },
      850: {
        slidesPerView: 2,
      }
    }
})
