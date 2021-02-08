declare var $                   :   any;
declare var WOW                 :   any;

export class ProfferBase {

    public static wow: any;

    public static setupEssentials() {

        ProfferBase.setupNav();
        ProfferBase.toggleClassForSmallNav();
        ProfferBase.smallNavFunctionality();
        ProfferBase.setupResizeHandlers();

        //set about section equal height
        if($(".about-section").length) {
            ProfferBase.setTwoColEqHeight($(".about-section .left-col"), $(".about-section .right-col"));
        }

        //set campain section equal height
        if($(".campain-section").length) {
            ProfferBase.setTwoColEqHeight($(".campain-section .left-col"), $(".campain-section .right-col"));
        }


    }

    // set two coloumn height equial
    public static setTwoColEqHeight($col1, $col2) {
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


    public static setupResizeHandlers() {

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

    public static setupNav() {
        const navbar = $(".navigation-holder").last();
        const openBtn = $(".navbar-header .open-btn").last();
        const closeBtn = $(".navigation-holder .close-navbar").last();
        const body = $(".page-wrapper").last();

        console.log(navbar);

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

    public static toggleClassForSmallNav() {
        var windowWidth = window.innerWidth;
        var mainNav = $("#navbar > ul");

        if (windowWidth <= 991) {
            mainNav.addClass("small-nav");
        } else {
            mainNav.removeClass("small-nav");
        }
    }

    public static smallNavFunctionality() {
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

    public static hidePreloader() {

        if($('.preloader').length) {
            $('.preloader').delay(100).fadeOut(500, () => {
                this.wow.init();
            });
        }

    }

    public static initWow() {

        this.wow = new WOW({
            boxClass:     'wow',      // default
            animateClass: 'animated', // default
            offset:       0,          // default
            mobile:       true,       // default
            live:         true        // default
        });

    }

}
