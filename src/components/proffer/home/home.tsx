import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    'assets/ngo.json';
import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'proffer-home',
    styleUrl                    :   'home.css'
})
export class ProfferHome {

    @Prop() ngo                 :   any                 =   ngo;
    @Prop() fund                :   any                 =   fund;

    constructor () {
        console.log('Home :: Constructor');
    }


    async componentWillLoad() {
        console.log('Home :: componentWillLoad');
    }

    async componentDidLoad() {
        console.log('Home :: componentDidLoad');
    }

    render() {
        return (

            <div class="page-wrapper">

                { /**  start preloader  */ } 
                <div class="preloader">
                    <div class="preloader-inner">
                        <div class="double-bounce1"></div>
                        <div class="double-bounce2"></div>
                    </div>
                </div>
                { /**  end preloader  */ } 

                <proffer-header ngo={this.ngo}></proffer-header>

                { /**  start of hero  */ } 
                <section class="hero-slider hero-style-1">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">

                            { this.ngo.photos.slice(0, 3).map(p => (

                            <div class="swiper-slide">
                                <div class="slide-inner slide-bg-image" data-background={p}>
                                    <div class="container">
                                        <div data-swiper-parallax="300" class="slide-title">
                                            <h2>Help <span>someone's dream</span> come true.</h2>
                                        </div>
                                        <div data-swiper-parallax="400" class="slide-text">
                                            <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with hat and fur boa who sat upright, raising a heavy fur muff that</p>
                                        </div>
                                        <div class="clearfix"></div>
                                        <div data-swiper-parallax="500" class="slide-btns">
                                            <a href="#" class="theme-btn-s2">Donate Now <i class="fi flaticon-heart-1"></i></a> 
                                        </div>
                                         <div class="video-btns">
                                            <a href="https://www.youtube.com/embed/EFvlzdyJq-U?autoplay=1" class="video-btn" data-type="iframe" tabindex="0"><i class="fi flaticon-play-1"></i></a> 
                                        </div>
                                    </div> 
                                </div>
                            </div>

                            )) }

                        </div>
                        { /**  end swiper-wrapper  */ } 

                        { /**  swipper controls  */ } 
                        <div class="swiper-pagination"></div>
                        <div class="container">
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </div>

                        <div class="social">
                            <ul>
                                { this.ngo.reachOut.facebook.length !== 0 ?
                                    <li><a href={ this.ngo.reachOut.facebook } target='_blank' ><i class="ti-facebook"></i></a></li>
                                : null }

                                { this.ngo.reachOut.twitter.length !== 0 ?
                                    <li><a href={ this.ngo.reachOut.twitter } target='_blank' ><i class="ti-twitter"></i></a></li>
                                : null }

                                { this.ngo.reachOut.instagram.length !== 0 ?
                                    <li><a href={ this.ngo.reachOut.instagram } target='_blank' ><i class="ti-instagram"></i></a></li>
                                : null }

                                { this.ngo.reachOut.linkedin.length !== 0 ?
                                    <li><a href={ this.ngo.reachOut.linkedin } target='_blank' ><i class="ti-linkedin"></i></a></li>
                                : null }

                                { this.ngo.reachOut.youtube.length !== 0 ?
                                    <li><a href={ this.ngo.reachOut.youtube } target='_blank' ><i class="ti-youtube-alt"></i></a></li>
                                : null }
                            </ul>
                        </div>

                        <div class="scroll">
                            <a href="#about" id="scroll"><i class="fi flaticon-down-arrow-2"></i></a>
                        </div>

                    </div>
                </section>
                { /**  end of hero slider  */ } 


                { /**  start target-area  */ } 
                <section class="target-area section-padding" id="about">
                    <div class="container">
                        <div class="row">
                            <div class="col col-md-5">
                                <div class="img-holder">
                                    <img src={ this.fund.coverPhoto[0].url } />
                                </div>
                            </div>
                            <div class="col col-md-7">
                                <div class="target-content">
                                    <div class="section-title">
                                        <span>#Target</span>
                                        <h2>We have <span>reached</span> so far!</h2>
                                    </div>
                                    <div class="content">
                                        <p> { this.fund.aboutProject } </p>

                                        <div class="goal-raised">
                                            <div>
                                                <span>Donation goal </span>
                                                <h3>Rs. { fund.donation.required } </h3>
                                            </div>
                                            <div>
                                                <span>Donation raised </span>
                                                <h3>Rs. { fund.donation.collected } </h3>
                                            </div>
                                        </div>

                                        <ion-router-link href="/donate"> 
                                            <a href='#' class="theme-btn-s3"> <i class="fi flaticon-like"></i>
                                                    Donate Now
                                            </a>
                                        </ion-router-link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> { /**  end container  */ } 
                </section>
                { /**  end target-area  */ } 


                { /**  start causes-section  */ } 
                <section class="causes-section section-padding">
                    <div class="container-fluid">
                        <div class="section-title-s2">
                            <span>#Our Team in Action</span>
                            <h2>Burial <span>activities</span></h2>
                        </div>
                        <div class="content-area causes-slider">

                            { this.ngo.photos.map((p, index) => (
                            <div class="item">
                                <div class="inner">
                                    <div class="img-holder">
                                        <img src={ p } style={{ 'height': '300px', 'object-fit': 'cover' }} />
                                    </div>

                                    <div class="overlay">
                                        <div class="overlay-content">
                                            <div class="progress">
                                                <div class="progress-bar" data-percent="85"></div>
                                            </div>
                                            <h3> <a href='#'> From field { index + 1 } </a> </h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )) }

                        </div>
                    </div>
                </section>
                { /**  end causes-section  */ } 


                { /**  start about-section  */ } 
                <section class="about-section">
                    <div class="content-area">
                        <div class="left-col">
                            <div class="about-area">
                                <div class="section-title">
                                    <span>#Our Vision</span>
                                    <h2> 
                                        <span> { this.ngo.vision.split(' ').slice(0, 4).join(' ') } </span>
                                        { this.ngo.vision.split(' ').slice(4).join(' ') }
                                    </h2>
                                </div>
                                <div class="about-details">
                                    <p> { this.ngo.mission } </p>
                                    <div class="btns">
                                        <a class="theme-btn-s4"> <ion-router-link href='/about' color='dark'> More about us </ion-router-link> </a>
                                        <a class="theme-btn-s5"> <ion-router-link href='/volunteer' color='danger'> Become a Volunteer </ion-router-link> </a>
                                    </div>
                                    <div class="about-features">

                                        { this.ngo.sdg.slice(0, 3).map(s => (

                                        <div>
                                            <div class="icon">
                                                <img style={{ 'width': '48px' }} src={s.photo.url} />
                                            </div>
                                            <h3> { s.name } </h3>
                                            <p> { s.description } </p>
                                        </div>

                                        )) }

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="right-col data-bg-image" data-background="/assets/proffer/images/about.jpg">
                            <div class="img-holder">
                                { /**  <img src="/assets/proffer/images/about.jpg" />  */ } 
                            </div>
                        </div>
                    </div> { /**  end content-area  */ } 
                </section>
                { /**  end about-section  */ } 


                { /**  start events-section  */ } 
                <section class="events-section section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col col-md-5">
                                <div class="section-title">
                                    <span>#Events</span>
                                    <h2><span>Why </span> Volunteer here? </h2>
                                </div>
                                <div class="about-details">
                                { this.ngo.whyVolunteerHere.slice(0, 3).map(w => (
                                    <div class="feature-text">
                                        <p>
                                            <ion-icon name={ w.icon } style={{'margin-right': '8px'}}></ion-icon>
                                            { w.text }
                                        </p>
                                    </div>
                                )) }

                                </div>
                            </div>
                            <div class="col col-md-7">

                                <div class="events-slider-holder">
                                    <div class="events-slider">

                                        { this.ngo.photos.map(e => (
                                        <div class="events-slider-item">
                                            <div class="grid">
                                                <div class="img-holder">
                                                    <img src={e} />
                                                </div>
                                                <div class="details">
                                                    <div class="inner">
                                                        <h3><a href="#">Fuel fundraising with better events canada</a></h3>
                                                        <p>Aug 25, 2020 (10 AM)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )) }

                                    </div>

                                    <div class="events-slider-nav">
                                        <div class="events-slider-arrows">
                                            <div class="slider-prev"><i class="fi flaticon-back"></i></div>
                                            <div class="slider-next"><i class="fi flaticon-next"></i></div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div> { /**  end container  */ } 
                </section>
                { /**  end events-section  */ } 


                { /**  start partner-section  */ } 
                <section class="partner-section">
                    <h2 class="hidden">Partners</h2>
                    <div class="container">
                        <div class="row">
                            <div class="col col-xs-12">
                                <div class="partners-slider">
                                    <div>
                                        <img src="/assets/proffer/images/partners/img-1.png" />
                                    </div>
                                    <div>
                                        <img src="/assets/proffer/images/partners/img-2.png" />
                                    </div>
                                    <div>
                                        <img src="/assets/proffer/images/partners/img-3.png" />
                                    </div>
                                    <div>
                                        <img src="/assets/proffer/images/partners/img-4.png" />
                                    </div>
                                    <div>
                                        <img src="/assets/proffer/images/partners/img-5.png" />
                                    </div>
                                    <div>
                                        <img src="/assets/proffer/images/partners/img-6.png" />
                                    </div>
                                    <div>
                                        <img src="/assets/proffer/images/partners/img-4.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> { /**  end container  */ } 
                </section>
                { /**  end partner-section  */ } 


                { /**  start cta-s1-section  */ } 
                <section class="cta-s1-section">
                    <div class="container">
                        <div class="row">
                            <div class="col col-lg-5 col-md-5">
                                <div class="img-holder">
                                    <img src="/assets/proffer/images/cta-s1-pic.jpg" />
                                </div>
                            </div>
                            <div class="col col-lg-6 col-lg-offset-1 col-md-7">
                                <div class="info-col">
                                    <div class="section-title">
                                        <span>#Events</span>
                                        <h2>We will <span>togather</span> make the world better</h2>
                                    </div>

                                    <div class="details">
                                        <p>Magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the windowIt  showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer. Gregor then turned to look out the window</p>
                                        <a href="#" class="theme-btn-s6"><i class="fi flaticon-like"></i> Donate now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> { /**  end container  */ } 
                </section>
                { /**  end cta-s1-section  */ } 


                { /**  start cta-s2-section  */ } 
                <section class="cta-s2-section">
                    <div class="container">
                        <div class="row">
                            <div class="col col-xs-12">
                                <div class="col col-md-8">
                                    <div class="details">
                                        <h3> Death is not the greatest loss in life; the greatest loss is what dies inside us while we live. </h3>
                                    </div>
                                </div>
                                <div class="col col-md-4">
                                    <div class="video-holder">
                                        <a href="https://www.youtube.com/embed/UWffdco6x08?autoplay=1" class="video-btn" data-type="iframe" tabindex="0"><i class="fi flaticon-play"></i></a> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> { /**  end container  */ } 
                </section>
                { /**  end cta-s2-section  */ } 


                { /**  start blog-section  */ } 
                { this.ngo.media.length > 0 ?
                <section class="blog-section section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col col-xs-12">
                                <div class="section-title-s2">
                                    <span>#In Media</span>
                                    <h2>Our activities <span>in Press</span></h2>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-xs-12">
                                <div class="blog-grids">

                                    {this.ngo.media.slice(0, 3).map(m => (
                                        <proffer-press-card media={m}></proffer-press-card>
                                    )) }
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col col-xs-12">
                                <a class="theme-btn-s6 pull-right"> <ion-router-link href='/about/press-coverage' color='light'> See more <i class="ti-angle-right"></i> </ion-router-link> </a>
                            </div>
                        </div>

                    </div> { /**  end container  */ } 
                </section>: null }
                { /**  end blog-section  */ } 


                { /**  start instagram-section  */ } 
                <section class="instagram-section">
                    <h2 class="hidden">Instagran</h2>
                    <div class="instagram-grids">
                        <div class="grid">
                            <a href="#"><img src="/assets/proffer/images/instagram/img-1.jpg" /></a>
                        </div>
                        <div class="grid">
                            <a href="#"><img src="/assets/proffer/images/instagram/img-2.jpg" /></a>
                        </div>
                        <div class="grid">
                            <a href="#"><img src="/assets/proffer/images/instagram/img-3.jpg" /></a>
                        </div>
                        <div class="grid">
                            <a href="#"><img src="/assets/proffer/images/instagram/img-4.jpg" /></a>
                        </div>
                        <div class="grid">
                            <a href="#"><img src="/assets/proffer/images/instagram/img-5.jpg" /></a>
                        </div>
                        <div class="grid">
                            <a href="#"><img src="/assets/proffer/images/instagram/img-6.jpg" /></a>
                        </div>
                        <div class="grid">
                            <a href="#"><img src="/assets/proffer/images/instagram/img-7.jpg" /></a>
                        </div>
                        <div class="grid">
                            <a href="#"><img src="/assets/proffer/images/instagram/img-8.jpg" /></a>
                        </div>
                        <div class="grid">
                            <a href="#"><img src="/assets/proffer/images/instagram/img-9.jpg" /></a>
                        </div>
                        <div class="grid">
                            <a href="#"><img src="/assets/proffer/images/instagram/img-10.jpg" /></a>
                        </div>
                    </div>
                </section>
                { /**  end instagram-section  */ } 

                <proffer-footer ngo={this.ngo}></proffer-footer>

            </div>

        );
    }
}
