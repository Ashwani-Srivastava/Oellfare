import { Build, Component, h }   from    '@stencil/core';

import { AuthService        }   from    'auth/auth.service';
import { ConfigService      }   from    'common/config.service';
import { EnvironmentService }   from    'common/environment.service';
import { Logger             }   from    'common/logger';

declare var $: any;
declare var jQuery: any;
declare var Swiper: any;

@Component({
    tag                         :   'app-root',
    styleUrl                    :   'app-root.css',
})
export class AppRoot {

    constructor() {
        Logger.info(`AppRoot Component :: Constructor :: App version :: v${ConfigService.appVersion}`);

        if (Build.isBrowser) {
            AuthService.initialize();
        }
    }

    /*----------------------------------------------------------*/
    /*-------------------- Lifecycle Hooks ---------------------*/
    /*----------------------------------------------------------*/

    async componentWillLoad() {
        Logger.info('App root :: will load');
        EnvironmentService.init();
    }


    render() {
        return (
            <ion-app>
                <ion-router useHash={false}>

                    { /*
                    <ion-route url="/" component="charity-home" />
                    <ion-route url="/about" component="charity-about" />
                    <ion-route url="/about/press-coverage" component="charity-press-coverage" />
                    <ion-route url="/about/legal" component="charity-legal" />
                    <ion-route url="/contact" component="charity-contact" />
                    <ion-route url="/donate" component="charity-donate" />
                    <ion-route url="/projects" component="charity-projects" />
                    <ion-route url="/projects/:projectSlug" component="charity-projects-detail" />
                    <ion-route url="/volunteer" component="charity-volunteer" />
                       */ }

                    <ion-route url="/" component="proffer-home" />
                    <ion-route url="/about" component="proffer-about" />
                    <ion-route url="/about/press-coverage" component="proffer-press-coverage" />
                    <ion-route url="/about/legal" component="proffer-legal" />
                    <ion-route url="/contact" component="proffer-contact" />
                    <ion-route url="/donate" component="proffer-donate" />
                    <ion-route url="/projects" component="proffer-projects" />
                    <ion-route url="/projects/:projectSlug" component="proffer-projects-detail" />
                    <ion-route url="/volunteer" component="proffer-volunteer" />

                </ion-router>
                <ion-nav />
            </ion-app>
        );
    }


    async componentDidLoad() {
        Logger.info('App root :: will load');

        this.loadProfferScripts();
    }

    loadProfferScripts() {

    /*------------------------------------------
        = ACTIVE POPUP IMAGE
    -------------------------------------------*/
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect  : "elastic",
            closeEffect : "elastic",
            wrapCSS     : "project-fancybox-title-style"
        });
    }


    /*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {
                    title : { type : 'inside' },
                    media : {}
                },

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });
    }


    /*------------------------------------------
        = ACTIVE GALLERY POPUP IMAGE
    -------------------------------------------*/
    if ($(".popup-gallery").length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',

            gallery: {
              enabled: true
            },

            zoom: {
                enabled: true,

                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }


    /*------------------------------------------
        = FUNCTION FORM SORTING GALLERY
    -------------------------------------------*/
    function sortingGallery() {
        if ($(".sortable-gallery .gallery-filters").length) {
            var $container = $('.gallery-container');
            $container.isotope({
                filter:'*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false,
                }
            });

            $(".gallery-filters li a").on("click", function() {
                $('.gallery-filters li .current').removeClass('current');
                $(this).addClass('current');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter:selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        }
    }

    sortingGallery();


    /*------------------------------------------
        = MASONRY GALLERY SETTING
    -------------------------------------------*/
        /*
    function masonryGridSetting() {
        if ($('.masonry-gallery').length) {
            var $grid =  $('.masonry-gallery').masonry({
                itemSelector: '.grid-item',
                columnWidth: '.grid-item',
                percentPosition: true
            });

            $grid.imagesLoaded().progress( function() {
                $grid.masonry('layout');
            });
        }
    }
         */


    /*------------------------------------------
        = STICKY HEADER
    -------------------------------------------*/
    // Function for clone an element for sticky menu
    function cloneNavForSticyMenu($ele, $newElmClass) {
        $ele.addClass('original').clone().insertAfter($ele).addClass($newElmClass).removeClass('original');
    }

    // clone home style 1 navigation for sticky menu
    if ($('.site-header .navigation').length) {
        cloneNavForSticyMenu($('.site-header .navigation'), "sticky-header");
    }

    /*------------------------------------------
        = Header search toggle
    -------------------------------------------*/
    if($(".header-search-form-wrapper").length) {
        var searchToggleBtn = $(".search-toggle-btn");
        var searchToggleBtnIcon = $(".search-toggle-btn i");
        var searchContent = $(".header-search-form");
        var body = $("body");

        searchToggleBtn.on("click", function(e) {
            searchContent.toggleClass("header-search-content-toggle");
            searchToggleBtnIcon.toggleClass("fi flaticon-search ti-close");
            e.stopPropagation();
        });

        body.on("click", function() {
            searchContent.removeClass("header-search-content-toggle");
            searchToggleBtnIcon.removeClass("ti-close");
            searchToggleBtnIcon.addClass("fi flaticon-search");

        }).find(searchContent).on("click", function(e) {
            e.stopPropagation();
        });
    }


    /*------------------------------------------
        = Header shopping cart toggle
    -------------------------------------------*/
    if($(".mini-cart").length) {
        var cartToggleBtn = $(".cart-toggle-btn");
        var cartContent = $(".mini-cart-content");
        var body = $("body");

        cartToggleBtn.on("click", function(e) {
            cartContent.toggleClass("mini-cart-content-toggle");
            e.stopPropagation();
        });

        body.on("click", function() {
            cartContent.removeClass("mini-cart-content-toggle");
        }).find(cartContent).on("click", function(e) {
            e.stopPropagation();
        });
    }


    /*------------------------------------------
        = PARTNERS SLIDER
    -------------------------------------------*/
    if ($(".partners-slider").length) {
        $(".partners-slider").owlCarousel({
            autoplay:true,
            smartSpeed: 300,
            margin: 30,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            responsive: {
                0 : {
                    items: 2
                },

                550 : {
                    items: 3
                },

                992 : {
                    items: 4
                },

                1200 : {
                    items: 5
                }
            }
        });
    }


    /*------------------------------------------
        = FUNFACT
    -------------------------------------------*/
    if ($(".odometer").length) {
        $('.odometer').appear();
        $(document.body).on('appear', '.odometer', function(_e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }


    /*------------------------------------------
        = CAMPAIN SLIDER
    -------------------------------------------*/
    $('.campain-slider').slick({
        vertical: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        verticalSwiping: true,
        loop: true,
        nextArrow: '<button><i class="fi flaticon-down-arrow-1"></i></button>',
        prevArrow: '<button><i class="fi flaticon-down-arrow-1"></i></button>',
    }); 


    
    /*------------------------------------------
        = TESTIMONIALS SLIDER
    -------------------------------------------*/
    if ($(".testimonials-slider").length) {
        $(".testimonials-slider").owlCarousel({
            items: 1,
            autoplay: false,
            smartSpeed: 300,
            loop:true,
            autoplayHoverPause:true,
            dots: false,
            nav: true,
            navText: ['<i class="fi flaticon-back"></i>','<i class="fi flaticon-next"></i>'],
        });
    }

    
    /*------------------------------------------
        = TESTIMONIALS SLIDER
    -------------------------------------------*/
    if ($(".testimonials-slider-s2").length) {
        $(".testimonials-slider-s2").owlCarousel({
            autoplay: false,
            smartSpeed: 300,
            loop:true,
            autoplayHoverPause:true,
            margin: 30,
            dots: false,
            nav: true,
            navText: ['<i class="fi flaticon-back"></i>','<i class="fi flaticon-next"></i>'],
            responsive: {
                0 : {
                    items: 1
                },

                768 : {
                    items: 2
                }
            }
        });
    }


    /*------------------------------------------
        = CASE SINGLE PAGE DONATION FUNCTION
    -------------------------------------------*/
    if($(".give-form").length) {
        var tempGiveAmount = $(".give-text-input");
        var finalGiveAmount = $(".give-final-total-amount");
        var giveAmountBtn = $(".give-donation-level-btn");

        giveAmountBtn.each(function() {
            var $this = $(this);
            var dataValue = $this.attr("value");

            $this.on("click", function() {
                tempGiveAmount.attr("value", dataValue);
                finalGiveAmount.attr("data-total", dataValue);
                finalGiveAmount.text(dataValue);
                console.log(dataValue);
            })
            
        })
    }


    /*------------------------------------------
        = POST SLIDER
    -------------------------------------------*/
    if($(".post-slider".length)) {
        $(".post-slider").owlCarousel({
            mouseDrag: false,
            smartSpeed: 500,
            margin: 30,
            loop:true,
            nav: true,
            navText: ['<i class="fi flaticon-back"></i>','<i class="fi flaticon-next"></i>'],
            dots: false,
            items: 1
        });
    }  


    /*------------------------------------------
        = SHOP DETAILS PAGE PRODUCT SLIDER
    -------------------------------------------*/
    if ($(".shop-single-slider").length) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            focusOnSelect: true,
            prevArrow: '<i class="nav-btn nav-btn-lt ti-arrow-left"></i>',
            nextArrow: '<i class="nav-btn nav-btn-rt ti-arrow-right"></i>',

            responsive: [
                {
                    breakpoint: 500,
                    settings: {
                    slidesToShow: 3,
                        infinite: true
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]

        });
    }


    /*------------------------------------------
        = TOUCHSPIN FOR PRODUCT SINGLE PAGE
    -------------------------------------------*/
    if ($("input[name='product-count']").length) {
        $("input[name='product-count']").TouchSpin({
            verticalbuttons: true
        });
    }


    }

}
