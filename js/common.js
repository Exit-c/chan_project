// Pullpage 
$(function(){
    $('#fullpage').fullpage({
		//options here
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: true,
        controlArrows: false,
        loopTop: true,
        loopBottom: true,
        sectionsColor: ['#fff', '#fff', '#f8f9fa', '#fff', '#222'],
	  });

    // BEST ITEM - Swiper
    const swiper = new Swiper('.swiper', {
    
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },

        slidesPerView: 4,
        autoplay: true,
        
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          //when window width is >= 541px
          541: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 4,
            spaceBetween: 20
          },
          1601: {
            slidesPerView: 4,
            spaceBetween: 40
          }
        }
    });

    // panel
    $('header .t-menu img').click(function(){
        $('.panel').slideDown('slow');
    });

    $('.panel .close img').click(function(){
        $('.panel').slideUp('slow');
    });

    $(window).resize(function(){
        $('.panel').slideUp(0);
    });
    
    $('.panel').slideUp(0);
});