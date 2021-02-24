declare var $                   :   any;
declare var Waypoint            :   any;

export class CharityBase {

    public static setupEssentials() {

        CharityBase.smallNavFunctionality();
        //CharityBase.stickyBanner();
        CharityBase.setupMainMenu();
        CharityBase.setupWaypoints();

        $(window).stellar();

    }

    private static setupWaypoints() {
        var i = 0;
        $('.animate-box').waypoint( function( direction ) {

            if( direction === 'down' && !$(this.element).hasClass('animated') ) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function(){

                    $('body .animate-box.item-animate').each(function(k){
                        var el = $(this);
                        setTimeout( function () {
                            el.addClass('fadeInUp animated');
                            el.removeClass('item-animate');
                        },  k * 50, 'easeInOutExpo' );
                    });

                }, 100);

            }

        } , { offset: '85%' } );
        console.log(i);
    }

    /*
    private static stickyBanner() {

        var $stickyElement = $('.sticky-banner');
        var sticky;
        if ($stickyElement.length) {
            sticky = new Waypoint.Sticky({
                element: $stickyElement[0],
                offset: 0
            })
        }
    }
    */

    private static setupMainMenu() {

        $('[id=fh5co-primary-menu]').last().superfish({
            delay: 0,
            animation: {
                opacity: 'show'
            },
            speed: 'fast',
            cssArrows: true,
            disableHI: true
        });

    }

    private static smallNavFunctionality() {

        // click the burger
        const navToggle = $(".js-fh5co-nav-toggle").last();
        navToggle.on('click', function(){

            if ( $('body').hasClass('fh5co-offcanvas') ) {
                $('body').removeClass('fh5co-offcanvas');
            } else {
                $('body').addClass('fh5co-offcanvas');
            }

        });

        $("#offcanvas-menu > ul > li").on('click', function() {
            $('body').removeClass('fh5co-offcanvas');
        });

        $('[id=offcanvas-menu]').css('height', $(window).height());

        $(window).resize(function(){
            var w = $(window);

            $('[id=offcanvas-menu]').last().css('height', w.height());

            if ( w.width() > 769 ) {
                if ( $('body').hasClass('fh5co-offcanvas') ) {
                    $('body').removeClass('fh5co-offcanvas');
                }
            }

        });	

        // Click outside of the Mobile Menu
        $(document).click(function (e) {
            var container = $("#offcanvas-menu, .js-fh5co-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ( $('body').hasClass('fh5co-offcanvas') ) {
                    $('body').removeClass('fh5co-offcanvas');
                }
            }
        });

    }
}
