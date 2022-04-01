(function ($) {
  "use strict";

$( document ).ready(function() {
    $('.slider-active').slick({
        infinite: true,
        autoplay:true,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1
      });

      // Counter
      $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //Testimonial
    $('.testimonial-active').slick({
      infinite: true,
      autoplay:true,
      arrows:false,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });

    //Brand 

    $('.brand-active').slick({
      infinite: true,
      autoplay:true,
      arrows:false,
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1
    });

    /* Img Popup */

    $('.popup-img').magnificPopup({
    
      src: 'https://www.youtube.com/watch?v=LXb3EKWsInQ',
      type: 'iframe' // this overrides default type
      //type: 'image' // this overrides default type
      
  });

});

})(jQuery);