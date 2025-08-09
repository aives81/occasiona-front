(function($) {
	'use strict';

    // MEAN MENU
    $('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Navbar Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop()>120){  
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // SEARCH JS
    $('.search-option button').on('click',function(){
        $('.search-input').toggle(200)
    })

    // HOME SLIDER JS
    $('.home-slider-area').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        nav:true,
        navText:[
            "<i class='icofont-rounded-double-left'></i>",
            "<i class='icofont-rounded-double-right'></i>"
        ],
        items:1,
        smartSpeed:2000,
        dots:true,
        autoHeight:true
    })

    // BLOG SLIDER JS
    $('.blog-slider').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        autoplay:true,
        smartSpeed:2000,
        dots:true,
        items:1,
        autoplayHoverPause:true,
        stagePadding:10,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    
    // TESTIMONIAL
    $('.testimonial-slider').owlCarousel({
        loop: true,
        nav: false,
        smartSpeed: 2000,
        dots: true,
        items: 1,
        autoplayHoverPause: true,
    });

    // HOME SLIDER JS
    $('.recent-work-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:false,
        autoplay:true,
        smartSpeed:2000,
        autoplayHoverPause:true,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            992:{
                items:3
            },
            1199:{
                items:5
            }
        }
    })

    // SERVICE SLIDER
    $('.service-slider').owlCarousel({
        loop:true,
        margin:20,
        nav:true,
        navText:[
            "<i class='icofont-rounded-double-left'></i>",
            "<i class='icofont-rounded-double-right'></i>"
        ],
        smartSpeed:3000,
        dots:false,
        autoplay:true,
        autoplayHoverPause:true,
        autoplayTimeout:2000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    // HOME TWO SERVICE SLIDER
    $('.service-slider-wrapper').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        navText:[
            "<i class='icofont-rounded-double-left'></i>",
            "<i class='icofont-rounded-double-right'></i>"
        ],
        items:1,
        smartSpeed:2000,
        dots:false,
    })

    // PROJECT POPUP 
    $('.popup-gallery').magnificPopup({
        type: 'image',
    });

    // PROJECT SLIDER
    $('.recent-project-slider').owlCarousel({
        loop:true,
        margin:20,
        autoplay:true,
        nav:true,
        navText:[
            "<i class='icofont-rounded-double-left'></i>",
            "<i class='icofont-rounded-double-right'></i>"
        ],
        smartSpeed:2000,
        dots:false,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            500:{
                items:2
            },
            768:{
                items:3
            },
            1024:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });

    // Back To Top
    $(window).on('load',function(){
        $('.top-btn').fadeOut();
    });
    
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
                $('.top-btn').fadeIn();
            }
        else {
            $('.top-btn').fadeOut();
        }
    });
    $('.top-btn').on('click',function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
	
})(jQuery);