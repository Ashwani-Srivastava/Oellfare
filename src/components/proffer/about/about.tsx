import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    'assets/ngo.json';

declare var $:any;

@Component({
    tag                         :   'proffer-about',
    styleUrl                    :   'about.css',
})
export class ProfferAbout {

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('About :: Constructor');
    }

    async componentWillLoad() {
        console.log('About :: Component will load');
    }

    async componentDidLoad() {
        console.log('About :: Component did load');

        var navbar = $(".navigation-holder").last();
        var openBtn = $(".navbar-header .open-btn").last();
        var closeBtn = $(".navigation-holder .close-navbar").last();
        var body = $(".page-wrapper").last();

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


    render() {

        return (

        <div class="page-wrapper">

            <proffer-header ngo={this.ngo}></proffer-header>


            { /** start page-title  */ }
            <section class="page-title" style={{ 'background': 'url(/assets/images/team-008x1440.jpg) center center/cover no-repeat local', 'background-color': 'rgba(0, 0, 0, 0.5)'}}>
                <div class="page-title-container">
                    <div class="page-title-wrapper">
                        <div class="container">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <h2>About us</h2>
                                    <ol class="breadcrumb">
                                        <li> <a> <ion-router-link href='/' color='light'> Home </ion-router-link> </a> </li>
                                        <li> About us </li>
                                    </ol>
                                </div>
                            </div> { /** end row  */ }
                        </div> { /** end container  */ }
                    </div>
                </div>
            </section>
            { /** end page-title  */ }


            { /** start about-page-section  */ }
            <section class="about-page-section section-padding">
                <div class="container">

                    <div class="row">
                        <div class="col col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                            <div class="section-title-s3">
                                <span>#Our Vision</span>
                                <h2> { this.ngo.vision } <br/></h2>
                            </div>
                        </div>
                    </div>

                </div> { /** end container  */ }
            </section>
            { /** end about-page-section  */ }

            { /** start cta-s2-section  */ }
            <section class="cta-s2-section">
                <div class="container">
                    <div class="row">
                        <div class="col col-xs-12">
                            <div class="col col-md-8">
                                <div class="details">
                                    <h3> "Death is not the greatest loss in life; the greatest loss is what dies inside us while we live" </h3>
                                </div>
                            </div>
                            <div class="col col-md-4">
                                <div class="video-holder">
                                    <a href="https://www.youtube.com/embed/7e90gBu4pas?autoplay=1" class="video-btn" data-type="iframe" tabindex="0"><i class="fi flaticon-play"></i></a> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div> { /** end container  */ }
            </section>
            { /** end cta-s2-section  */ }


            { /**  start team-section */ }
            <section class="team-section section-padding">
                <div class="content-area">
                    <div class="first-row clearfix">
                        <div class="grid"></div>
                        <div class="grid info-grid">
                            <div class="section-title">
                                <span>#Team</span>
                                <h2>Our Volunteers</h2>
                            </div>
                            <div class="team-details">
                                <p>
                                    Coming together is a beginning. <br/>
                                    Staying together is progress. <br/>
                                    And working together is success.
                                </p>

                                <ion-router-link href="/donate"> 
                                    <a href='#' class="theme-btn-s4"> Become A Volunteer </a>
                                </ion-router-link>

                            </div>
                        </div>

                        { this.ngo.team.slice(0, 2).map(t => (

                        <div class="grid">
                            <div class="img-holder">
                                <img src={ t.photo.url } />
                            </div>
                            <div class="member-info">
                                <h4><a href="#"> { t.name } </a></h4>
                                <p> { t.role } </p>
                                <ul>

                                { t.reachOut.facebook.length !== 0 ?
                                    <li><a href={ t.reachOut.facebook } target='_blank' ><i class="ti-facebook"></i></a></li>
                                : null }

                                { t.reachOut.twitter.length !== 0 ?
                                    <li><a href={ t.reachOut.twitter } target='_blank' ><i class="ti-twitter"></i></a></li>
                                : null }

                                { t.reachOut.instagram.length !== 0 ?
                                    <li><a href={ t.reachOut.instagram } target='_blank' ><i class="ti-instagram"></i></a></li>
                                : null }

                                { t.reachOut.linkedin.length !== 0 ?
                                    <li><a href={ t.reachOut.linkedin } target='_blank' ><i class="ti-linkedin"></i></a></li>
                                : null }

                                { t.reachOut.youtube.length !== 0 ?
                                    <li><a href={ t.reachOut.youtube } target='_blank' ><i class="ti-youtube-alt"></i></a></li>
                                : null }
                            
                                </ul>
                            </div>
                        </div>

                        )) }


                    </div>
                    <div class="sec-row clearfix">

                        { this.ngo.team.slice(2).map(t => (
                            <div class="grid">

                                <div class="img-holder">
                                    <img src={ t.photo.url } />
                                </div>
                                <div class="member-info">
                                    <h4><a href="#"> { t.name } </a></h4>
                                    <p> { t.role } </p>
                                    <ul>

                                    { t.reachOut.facebook.length !== 0 ?
                                        <li><a href={ t.reachOut.facebook } target='_blank' ><i class="ti-facebook"></i></a></li>
                                    : null }

                                    { t.reachOut.twitter.length !== 0 ?
                                        <li><a href={ t.reachOut.twitter } target='_blank' ><i class="ti-twitter"></i></a></li>
                                    : null }

                                    { t.reachOut.instagram.length !== 0 ?
                                        <li><a href={ t.reachOut.instagram } target='_blank' ><i class="ti-instagram"></i></a></li>
                                    : null }

                                    { t.reachOut.linkedin.length !== 0 ?
                                        <li><a href={ t.reachOut.linkedin } target='_blank' ><i class="ti-linkedin"></i></a></li>
                                    : null }

                                    { t.reachOut.youtube.length !== 0 ?
                                        <li><a href={ t.reachOut.youtube } target='_blank' ><i class="ti-youtube-alt"></i></a></li>
                                    : null }
                                
                                    </ul>
                                </div>

                            </div>
                        )) }

                    </div>
                </div> { /** end content-area */ }
            </section>
            { /** end team-section */ }

            <proffer-footer ngo={this.ngo}></proffer-footer>
        </div>

    );

    }

}
