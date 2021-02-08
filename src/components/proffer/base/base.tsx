declare var $                   :   any;
declare var jQuery              :   any;
declare var Swiper              :   any;
declare var WOW                 :   any;

export class ProfferBase {

    private static wow: any;

    public static setupEssentials() {

        ProfferBase.setupNav();
        ProfferBase.toggleClassForSmallNav();
        ProfferBase.smallNavFunctionality();
        ProfferBase.setupResizeHandlers();
        ProfferBase.setupScrollHandlers();
        ProfferBase.initWow();
        ProfferBase.hidePreloader();
        ProfferBase.setupGotoTop();
        ProfferBase.setupAnimateToSection();

        //set about section equal height
        if($(".about-section").length) {
            ProfferBase.setTwoColEqHeight($(".about-section .left-col"), $(".about-section .right-col"));
        }

        //set campain section equal height
        if($(".campain-section").length) {
            ProfferBase.setTwoColEqHeight($(".campain-section .left-col"), $(".campain-section .right-col"));
        }

    }

    public static setupOdometer() {

        if ($(".odometer").length) {
            $('.odometer').appear();
            $('.page-wrapper').last().on('appear', '.odometer', function(_e) {
                var odo = $(".odometer");
                console.log(odo);
                odo.each(function() {
                    var countNumber = $(this).attr("data-count");
                    $(this).html(countNumber);
                });
            });
        }

    }

    public static setupHeroSlider() {
        var menu = [];
        jQuery('.swiper-slide').each( function(_index){
            menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
        });
        var interleaveOffset = 0.5;
        var swiperOptions = {
            loop: true,
            speed: 1000,
            parallax: true,
            autoplay: {
                delay: 6500,
                disableOnInteraction: false,
            },
            watchSlidesProgress: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            on: {
                progress: function() {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        var slideProgress = swiper.slides[i].progress;
                        var innerOffset = swiper.width * interleaveOffset;
                        var innerTranslate = slideProgress * innerOffset;
                        swiper.slides[i].querySelector(".slide-inner").style.transform =
                            "translate3d(" + innerTranslate + "px, 0, 0)";
                    }      
                },

                touchStart: function() {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = "";
                    }
                },

                setTransition: function(speed) {
                    var swiper = this;
                    for (var i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = speed + "ms";
                        swiper.slides[i].querySelector(".slide-inner").style.transition =
                            speed + "ms";
                    }
                }
            }
        };

        new Swiper(".swiper-container", swiperOptions);

        $(".swiper-pagination").wrapInner( "<div class='container'><div class='inner'></div></div>");

        // DATA BACKGROUND IMAGE
        var sliderBgSetting = $(".slide-bg-image");
        sliderBgSetting.each(function(_indx){
            if ($(this).attr("data-background")){
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

        var dataBgImage = $(".data-bg-image");

        // Data Background image setting
        dataBgImage.each(function() {

            if ($(this).attr("data-background")){
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
                $(this).css("background-size", "cover");
                $(this).css("background-position", "center center");
            }
        })

    }

    public static setupProgressBars() {

        if ($(".progress-bar").length) {
            var $progress_bar = $('.progress-bar');
            $progress_bar.appear();
            $(document.body).on('appear', '.progress-bar', function() {
                var current_item = $(this);
                if (!current_item.hasClass('appeared')) {
                    var percent = current_item.data('percent');
                    current_item.css('width', percent + '%').addClass('appeared').append('<span>' + percent + '%' + '</span>');
                }
                
            });
        };

    }

    public static setupEventsSlider() {
        if ($(".events-slider").length) {

            var i = (".events-slider-nav .slider-prev"),
                s = (".events-slider-nav .slider-next");

            $(".events-slider").slick({
                prevArrow: i,
                nextArrow: s,
                adaptiveHeight: !0,
                slidesToShow: 3,
                responsive: [{
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }]
            });
        }

    }

    public static setupCausesSlider() {

        setTimeout(() => {
        if($(".causes-slider").length) {
            $('.causes-slider').owlCarousel({
                center: true,
                loop:true,
                dots: false,
                responsive:{
                    1300:{
                        items:4,
                        margin: 20,
                    },

                    992:{
                        margin: 0,
                        items:3
                    },

                    500:{
                        items:2
                    },

                    300:{
                        items:1,
                        dots: true,
                    }
                }
            })
        }
        }, 200);
    }

    private static setupGotoTop() {
        $(".page-wrapper").last().append("<a href='#' class='back-to-top'><i class='ti-arrow-circle-up'></i></a>");

        $(".back-to-top").last().on("click", function() {
            $(".page-wrapper").last().animate({
                scrollTop: 0
            }, 700);
            return false;
        });

    }

    private static toggleBackToTopBtn() {
        var amountScrolled = 700;
        if ($('.page-wrapper').last().scrollTop() > amountScrolled) {
            $("a.back-to-top").addClass("animate-b-t-t");
        } else {
            $("a.back-to-top").removeClass("animate-b-t-t");
        }
    }

    // set two coloumn height equial
    private static setTwoColEqHeight($col1, $col2) {

        var firstCol = $col1,
            secondCol = $col2,
            firstColHeight = $col1.innerHeight(),
            secondColHeight = $col2.innerHeight();


        if (firstColHeight > secondColHeight) {
            secondCol.css({
                "height": firstColHeight + 1 + "px"
            })
        } else {
            firstCol.css({
                "height": secondColHeight + 1 + "px"
            })
        }

    }

    private static setupScrollHandlers() {
        $('.page-wrapper').last().on("scroll", function() {

            console.log('scrolling.....');

            if ($(".site-header").length) {
                ProfferBase.stickyMenu( $('.site-header .navigation'), "sticky-on" );
            }

            ProfferBase.toggleBackToTopBtn();
        });
    }

    private static setupResizeHandlers() {

        $(window).on("resize", function() {

            console.log('resizing');

            ProfferBase.toggleClassForSmallNav();

            //set about section equal height
            if($(".about-section").length) {
                ProfferBase.setTwoColEqHeight($(".about-section .left-col"), $(".about-section .right-col"));
            }

            //set campain section equal height
            if($(".campain-section").length) {
                ProfferBase.setTwoColEqHeight($(".campain-section .left-col"), $(".campain-section .right-col"));
            }


            clearTimeout($.data(this, 'resizeTimer'));

            $.data(this, 'resizeTimer', setTimeout(function() {
                ProfferBase.smallNavFunctionality();
            }, 200));

        });


    }

    private static setupNav() {
        const navbar = $(".navigation-holder").last();
        const openBtn = $(".navbar-header .open-btn").last();
        const closeBtn = $(".navigation-holder .close-navbar").last();
        const body = $(".page-wrapper").last();

        openBtn.on("click", function() {
            if (!navbar.hasClass("slideInn")) {
                navbar.addClass("slideInn");
                body.addClass("body-overlay");
            }
            return false;
        })

        closeBtn.on("click", function() {
            if (navbar.hasClass("slideInn")) {
                navbar.removeClass("slideInn");
            }
            body.removeClass("body-overlay");
            return false;
        })

    }

    private static toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    private static smallNavFunctionality() {
        var windowWidth = window.innerWidth;
        var mainNav = $(".navigation-holder");
        var smallNav = $(".navigation-holder > .small-nav");
        var subMenu = smallNav.find(".sub-menu");
        var megamenu = smallNav.find(".mega-menu");
        var menuItemWidthSubMenu = smallNav.find(".menu-item-has-children > a");

        if (windowWidth <= 991) {
            subMenu.hide();
            megamenu.hide();
            menuItemWidthSubMenu.on("click", function(e) {
                var $this = $(this);
                $this.siblings().slideToggle();
                 e.preventDefault();
                e.stopImmediatePropagation();
            })
        } else if (windowWidth > 991) {
            mainNav.find(".sub-menu").show();
            mainNav.find(".mega-menu").show();
        }
    }

    private static hidePreloader() {

        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, () => {
                this.wow.init();
            });
        }

    }

    private static initWow() {

        this.wow = new WOW({
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        });

    }

    private static lastScrollTop = '';

    private static stickyMenu($targetMenu, $toggleClass) {
        var st = $(window).scrollTop();
        //var mainMenuTop = $('.site-header .navigation');

        if ($(window).scrollTop() > 1000) {
            if (st > ProfferBase.lastScrollTop) {
                // hide sticky menu on scroll down
                $targetMenu.removeClass($toggleClass);

            } else {
                // active sticky menu on scroll up
                $targetMenu.addClass($toggleClass);
            }

        } else {
            $targetMenu.removeClass($toggleClass);
        }

        ProfferBase.lastScrollTop = st;
    }


    // Animated scroll specific section
    private static setupAnimateToSection() {
        if ($("#scroll").length) {
            $('#scroll').on('click', function(e){     
                e.preventDefault();
                $('.page-wrapper').last().animate({scrollTop:$(this.hash).offset().top}, 1000, "easeInOutExpo");
                return false;
            });
        }
    }

}
