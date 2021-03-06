declare var $                   :   any;
declare var WOW                 :   any;
declare var window              :   any;
declare var Instafeed           :   any;
declare var Typed               :   any;

export class OellfareBase {

    //private static wow: any;

    public static setupEssentials() {
        OellfareBase.setup1();
        OellfareBase.setup2();
        OellfareBase.setup3();
    }

    public static setup3() {
		// menu js start
		$.fn.menumaker = function (options) {
	        var flexmenu = $(this), settings = $.extend({
	                format: 'dropdown',
	                sticky: false
	            }, options);
	        return this.each(function () {
	            $(this).find('.mobile-btn').on('click', function () {
	                $(this).toggleClass('menu-opened');
	                var mainmenu = $(this).next('ul');
	                if (mainmenu.hasClass('open')) {
	                    mainmenu.slideToggle().removeClass('open');
	                } else {
	                    mainmenu.slideToggle().addClass('open');
	                    if (settings.format === 'dropdown') {
	                        mainmenu.find('ul').show();
	                    }
	                }
	            });
	            flexmenu.find('li ul').parent().addClass('menu-item-has-children');
	            var subToggle;
	            subToggle = function () {
	                flexmenu.find('.menu-item-has-children').prepend('<span class="submenu-button"></span>');
	                flexmenu.find('.menu-item-has-children>a').append('<i class="ion-ios-arrow-down"></i>');
	                flexmenu.find('.submenu-button').on('click', function () {
	                    $(this).toggleClass('submenu-opened');
	                    if ($(this).siblings('ul').hasClass('open')) {
	                        $(this).siblings('ul').removeClass('open').slideToggle();
	                    } else {
	                        $(this).siblings('ul').addClass('open').slideToggle();
	                    }
	                });
	            };
	            if (settings.format === 'multitoggle')
	                subToggle();
	            else
	                flexmenu.addClass('dropdown');
	            if (settings.sticky === true)
	                flexmenu.css('position', 'fixed');
	            var resizeFix;
	            resizeFix = function () {
	                var mediasize = 974;
	                if ($(window).width() > mediasize) {
	                    flexmenu.find('ul').show();
	                }
	                if ($(window).width() <= mediasize) {
	                    flexmenu.find('ul').hide().removeClass('open');
	                }
	            };
	            resizeFix();
	            return $(window).on('resize', resizeFix);
	        });
	    };

	    $('#flexmenu').menumaker({ format: 'multitoggle' });
	    // menu js end

    }

    public static setup2() {

        //typed text
        var typed = new Typed(".typed", {
            stringsElement: '#typed-strings',
            typeSpeed: 200,
            backSpeed: 100,
            fadeOut: false,
            loop: true,
            cursorChar: '.',
        });
          
    }

    public static setup1() {
        
        $('.preloader').fadeOut(500);

        // Elements Animation
        if($('.wow').length){
            var wow = new WOW(
            {
                scrollContainer: '.page-wrapper',
                boxClass:     'wow', 
                animateClass: 'animated', 
                offset:       0, 
                mobile:       true, 
                live:         true 
            }
            );
            wow.init();
        }

        $('.mousemove').mousemove(function(e){
            var amountMovedX = (e.pageX * 1 / 20);
            var amountMovedY = (e.pageY * 1 / 20);
            $(this).css('background-position', amountMovedX + '% ' + amountMovedY + '%');
        });

        // Popup Video
        $('.video_popup').fancybox({
            openEffect  : 'none',
            closeEffect : 'none',
            helpers : {
              media : {}
            }
        });

        // Slider Carousel
        $('.slider_carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            animateIn: 'fadeInDown',
            animateOut: 'fadeOutRight',
            dots: false,
            nav: false,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            center: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false,
                },
                768: {
                    items: 1,
                    nav: false,
                    dots: false,
                },
                992: {
                    items: 1,
                    nav: false,
                    dots: false,
                },
                1200: {
                    items: 1,
                    nav: false,
                    dots: false,
                }
            }
        })


        // Causes Carousel
        $('.causes_carousel').owlCarousel({
            items: 3,
            loop: true,
            margin: 30,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            center: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                768: {
                    items: 2,
                    nav: false,
                    dots: true,
                },
                992: {
                    items: 2,
                    nav: true,
                    dots: false,
                },
                1200: {
                    items: 3,
                    nav: true,
                    dots: false,
                }
            }
        })

        // Urgent Cause Carousel
        $('.urgent_cause_carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            center: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                768: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                992: {
                    items: 1,
                    nav: true,
                    dots: false,
                },
                1200: {
                    items: 1,
                    nav: true,
                    dots: false,
                }
            }
        })

        // Testimonial Carousel
        $('.testimonial_type1').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: false,
            dots: false,
            nav: false,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            center: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                768: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                992: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                1200: {
                    items: 1,
                    nav: false,
                    dots: true,
                }
            }
        })

        // Testimonial Carousel two-column
        $('.testimonial_type2').owlCarousel({
            items: 2,
            loop: true,
            margin: 15,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            center: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                768: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                992: {
                    items: 2,
                    nav: true,
                    dots: false,
                },
                1200: {
                    items: 2,
                    nav: true,
                    dots: false,
                }
            }
        })
        

        // Timeline Carousel
        $('.timeline_carousel').owlCarousel({
            items: 3,
            loop: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            dots: false,
            nav: true,
            navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
            center: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: true,
                },
                768: {
                    items: 2,
                    nav: false,
                    dots: true,
                },
                992: {
                    items: 2,
                    nav: true,
                    dots: false,
                },
                1200: {
                    items: 3,
                    nav: true,
                    dots: false,
                }
            }
        })

        // Select2 JS
        $(".select_dropdown_value").select2();

		$(".select_dropdown_value-limit1").select2({
		  	maximumSelectionLength: 1
		});
		$(".select_dropdown_value-limit2").select2({
		  	maximumSelectionLength: 2
		});

        // Active Donate value tab
        $(function(){
            $('.select_amount_box').on('click','.select_amount',function(){
                $('.select_amount.active').removeClass('active');
                $(this).addClass('active');
            });
        });


        // Instafeed
        var instaFeed = new Instafeed({
            get: 'user',
            userId: '8622487563',
            accessToken: '8622487563.239aaa2.9a0babde2b4247bfbcaf2fe06a55622e',
            resolution :'standard_resolution',
            limit: 6,
            template: '<li><a href="{{link}}"><img src="{{image}}"/></a></li>'
        });
        instaFeed.run();
        

        // Tab
        $('.power_tab_button_group > li > a').eq(0).addClass( "selected" );
        $('.power_tab_container > .power_tab_info').eq(0).css('display','block');
        $('.power_tab_button_group').on("click",function(e){
            if($(e.target).is("a")){
          
                /*Handle Tab Nav*/
                $('.power_tab_button_group > li > a').removeClass( "selected");
                $(e.target).addClass( "selected");
                
                /*Handles Tab Content*/
                var clicked_index = $("a",this).index(e.target);
                $('.power_tab_container > .power_tab_info').css('display','none');
                $('.power_tab_container > .power_tab_info').eq(clicked_index).fadeIn();
            
            }
            $(this).blur();
            return false;
        });
          
    }

}
