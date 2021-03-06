import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'oellfare-header',
    styleUrl                    :   'header.css',
})
export class OellfareHeader {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (
        <header id="header">
            <div class="top-bar">
                <div class="container">
                    <div class="top-bar-inner">
                        <div class="top-element">
                            <div class="top-left-elements">
                                <div class="element schedule">
                                    <img src="/assets/oellfare/images/clock.png" alt="schedule" /><div>Mon-Sat, 9.00am-9.00pm</div>
                                </div>
                            </div>
                            <div class="top-right-elements">
                                <div class="element">
                                    <ul class="top-social">
                                        <li class="facebook"><a href="#"><i class="ion-logo-facebook"></i></a></li>
                                        <li class="twitter"><a href="#"><i class="ion-logo-twitter"></i></a></li>
                                        <li class="instagram"><a href="#"><i class="ion-logo-instagram"></i></a></li>
                                        <li class="linkedin"><a href="#"><i class="ion-logo-linkedin"></i></a></li>
                                        <li class="skype"><a href="#"><i class="ion-logo-skype"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nav-bar">
                <div class="container">
                    <div class="navigation">
                        <div class="logo">
                            <a href="index.html">
                                <img src="/assets/oellfare/images/logo.png" alt="Oelfare" />
                            </a>
                        </div>
                        <nav id="flexmenu">
                            <div class="nav-inner">
                                <div id="mobile-toggle" class="mobile-btn"></div>
                                <ul id="menu-main-menu" class="main-menu">
                                    <li class="menu-item current-menu-item menu-item-has-children active"><a href="index.html">Home</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="index2.html">Home Two</a></li>
                                            <li class="menu-item"><a href="index3.html">Home Three</a></li>
                                            <li class="menu-item"><a href="index4.html">Home Four</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><a href="about.html">About</a></li>
                                    <li class="menu-item menu-item-has-children"><a href="#">Causes</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><a href="causes1.html">Causes One</a></li>
                                            <li class="menu-item"><a href="causes2.html">Causes Two</a></li>
                                            <li class="menu-item"><a href="causes-details.html">Causes Details</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item menu-item-has-children"><a href="#">Pages</a>
                                        <ul class="sub-menu">
                                            <li class="menu-item menu-item-has-children"><a href="#">Blog</a>
                                                <ul class="sub-menu">
                                                    <li class="menu-item"><a href="blog1.html">Blog One</a></li>
                                                    <li class="menu-item"><a href="blog2.html">Blog Two</a></li>
                                                    <li class="menu-item"><a href="blog-details.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item"><a href="events.html">Events</a></li>
                                            <li class="menu-item"><a href="event-details.html">Event Details</a></li>
                                            <li class="menu-item"><a href="volunteers.html">Volunteers</a></li>
                                            <li class="menu-item"><a href="volunteer-form.html">Volunteer Form</a></li>
                                            <li class="menu-item"><a href="donate1.html">Donate One</a></li>
                                            <li class="menu-item"><a href="donate2.html">Donate Two</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item"><a href="contact.html">Contact</a></li>
                                </ul>                
                            </div>
                        </nav>
                        <div class="element phone">
                            <img src="/assets/oellfare/images/phone.png" alt="phone" /><div><span>Contact us to donate</span><br />(+123)987.654.32</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        );
    }

}
