$(document).ready(function() {

// get json from server


var urlString = "https://www.jasonbase.com/things/3djW.json"


$.ajax({
    url: urlString,
    type: "GET",
   
}).done(function(objResponse) {
    
    var arrayPost = objResponse.arrayPost;

    for(var i=0; i<arrayPost.length; i++) {
        var post = arrayPost[i];

       

        var htmlString = `<div class="grid-item">
        <a href='details.html?id=${post.id}'>
        <img src="${post.postImg}">
        <div class="post-title">
        <h2>${post.postName}</h2>
        <p>${post.postDes}</p>
        <h6><i class="far fa-clock"></i> ${post.postTime}</h6>
        </div>
        </a>
        </div>`

        $(".grid").append(htmlString); 
    }
   // external js: masonry.pkgd.js
    
var $grid = $('.grid').masonry({
    
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    horizontalOrder: true, // new!
    percentPosition: true,
    
  }); 
  
  // layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
  
  $grid.masonry( 'on', 'layoutComplete', function() {
    console.log('layout is complete');
  });
  
})







})


    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    }
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        loop: true,
          loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
      });
    
    