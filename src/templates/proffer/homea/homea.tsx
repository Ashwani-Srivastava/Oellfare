import { Build, Component,
         h, Prop            }   from    '@stencil/core';

import { filter, takeWhile  }   from    'rxjs/operators';

import { ProfferBase        }   from    'proffer/base/base'

import { AuthService        }   from    'auth/auth.service';
import { Fundraiser         }   from    'fundraiser/fundraiser.model';
import { HelmetService      }   from    'common/helmet.service'
import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
import { NgoService         }   from    'ngo/ngo.service';

import * as ngo                 from    'assets/ngo.json';
import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'proffer-homea',
    styleUrl                    :   'homea.css'
})
export class ProfferHomeA {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);
    @Prop() fund                :   Fundraiser          =   new Fundraiser(fund);

    private alive               :   boolean             =   true;

    constructor () {
        console.log('Home :: Constructor');
    }


    async componentWillLoad() {
        console.log('Home :: componentWillLoad');

        if (Build.isBrowser) {

            AuthService.state$.pipe(
                takeWhile(_p => this.alive),
                filter(s => s.length > 0)
            ).subscribe(_s => {
                this.initialize();
            });


        }

    }

    async componentDidLoad() {
        console.log('Home :: componentDidLoad');

        ProfferBase.setupEssentials();
        ProfferBase.setupCausesSlider();
        ProfferBase.setupHeroSlider();
        ProfferBase.setupOdometer();
    }

    private async initialize() {
        Logger.info('Home :: Initialize :: ');
        NgoService
            .fetchNgo(this.ngo.id)
            .pipe(takeWhile(_p => this.alive))
            .subscribe(n => {
                this.ngo = n;
            });

    }


    coverText = [{
        header                  :   'For the betterment of Humanity...',
        subHeader               :   'Join us in giving the Departed, their deserving final rites.',
        length                  :   5
    }, {
        header                  :   'No one is Alone',
        subHeader               :   'As long as We are here.',
        length                  :   4
    }, {
        header                  :   'Started by a bunch of College students',
        subHeader               :   'To give Love, to those who really need it.',
        length                  :   7
    }];

    render() {
        return (

            <div class="page-wrapper">

                <proffer-header ngo={this.ngo}></proffer-header>

                { /**  start of hero  */ } 
                <section class="hero-slider hero-style-1">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">

                            { this.ngo.photos.slice(0, 3).map((p, index) => (

                            <div class="swiper-slide">
                                <div class="slide-inner slide-bg-image" data-background={p} style={{ 'background-blend-mode': 'darken', 'background-color': 'rgba(0,0,0,0.7)' }}>
                                    <div class="container">
                                        <div data-swiper-parallax="300" class="slide-title">
                                            <h2> 
                                                <span> { this.coverText[index].header.split(' ').slice(0, this.coverText[index].length - 2).join(' ') } </span>
                                                { this.coverText[index].header.split(' ').slice(this.coverText[index].length - 2).join(' ') }
                                            </h2>
                                        </div>
                                        <div data-swiper-parallax="400" class="slide-text">
                                            <p> { this.coverText[index].subHeader } </p>
                                        </div>
                                        <div class="clearfix"></div>
                                        { /**
                                        <div data-swiper-parallax="500" class="slide-btns">
                                            <a href="#" class="theme-btn-s2">Donate Now <i class="fi flaticon-heart-1"></i></a> 
                                        </div>
                                           */ }
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
                                    { /**
                                    <img src={ this.fund.coverPhoto[0].url } />
                                       */ }
                                    <iframe src="https://www.youtube.com/embed/EFvlzdyJq-U" class='fund-video' ></iframe>
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
                                                <h3>???{ fund.donation.required } </h3>
                                            </div>
                                            <div>
                                                <span>Donation raised </span>
                                                <h3>???{ fund.donation.collected } </h3>
                                            </div>
                                        </div>

                                        <ion-router-link href="/donate"> 
                                            <a class="theme-btn-s3"> <i class="fi flaticon-like"></i>
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

                            { this.ngo.photos.map(p => (
                            <div class="item">
                                <div class="inner">
                                    <div class="img-holder">
                                        <img src={ p } style={{ 'height': '300px', 'object-fit': 'cover' }} />
                                    </div>

                                    { /*
                                    <div class="overlay">
                                        <div class="overlay-content">
                                            <div class="progress">
                                                <div class="progress-bar" data-percent="85"></div>
                                            </div>
                                            <h3> <a href='#'> </a> </h3>
                                        </div>
                                    </div>
                                       */ }

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
                            <div class="about-area" style={{ 'padding-bottom': '0px' }} >
                                <div class="section-title" style={{ 'margin-top': '2px' }} >
                                    <span>#Our Vision</span>
                                    <h2> 
                                        <span> { this.ngo.vision.split(' ').slice(0, 4).join(' ') } </span>
                                        { this.ngo.vision.split(' ').slice(4).join(' ') }
                                    </h2>
                                </div>
                                <div class="about-details">
                                    <p> { this.ngo.mission } </p>
                                    <div class="btns">

                                        <ion-router-link href="/about"> 
                                            <a class="theme-btn-s3" style={{ 'margin-left': '8px', 'margin-top': '8px' }} > <i class="fi flaticon-like"></i>
                                                    More about us
                                            </a>
                                        </ion-router-link>

                                        <ion-router-link href="/volunteer"> 
                                            <a class="theme-btn-s3" style={{ 'margin-left': '8px', 'margin-top': '8px' }} > <i class="fi flaticon-like"></i>
                                                    Become a Volunteer
                                            </a>
                                        </ion-router-link>

                                        { /*
                                        <a class="theme-btn-s4"> <ion-router-link href='/about' color='dark'> More about us </ion-router-link> </a>
                                        <a class="theme-btn-s5"> <ion-router-link href='/volunteer' color='danger'> Become a Volunteer </ion-router-link> </a>
                                           */ }

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
                        <div class="right-col data-bg-image">
                            <div class="img-holder">
                                <img src={ this.ngo.team[0].photo.url } /> 
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

                                { /*
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
                                   */ }
                                   <h2 class='text-center'> <br/> <br/> Events coming soon... </h2>
                            </div>
                        </div>
                    </div> { /**  end container  */ } 
                </section>
                { /**  end events-section  */ } 




                { /**  start cta-s2-section  */ } 
                <section class="cta-s2-section" style={{ 'margin-top': '120px' }} >
                    <div class="container">
                        <div class="row">
                            <div class="col col-xs-12">
                                <div class="col col-md-8">
                                    <div class="details">
                                        <h3> Death is not the greatest loss in life; The greatest loss is what dies inside us while we live. </h3>
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

            { /** start about-section-s2 */ }
            <section class="about-section-s2" style={{ 'margin-top': '64px' }}>
                <div class="container">
                    <div class="row">
                            <div class="col">
                                <div class="fun-fact-area">
                                        <div class="col col-sm-6 col-lg-3">
                                            <h3 class='text-center' style={{'width': '100%', 'text-align': 'center' }} ><span class="odometer" data-count="10">10</span>+</h3>
                                            <p class='text-center'> Articles </p>
                                        </div>
                                        <div class="col col-sm-6 col-lg-3">
                                            <h3 class='text-center' style={{'width': '100%', 'text-align': 'center' }} ><span class="odometer" data-count="12">12</span></h3>
                                            <p class='text-center'> Awards received </p>
                                        </div>
                                        <div class="col col-sm-6 col-lg-3">
                                            <h3 class='text-center' style={{'width': '100%', 'text-align': 'center' }} ><span class="odometer" data-count="1156">1156</span>+</h3>
                                            <p class='text-center'> Bodies buried</p>
                                        </div>
                                        <div class="col col-sm-6 col-lg-3">
                                            <h3 class='text-center' style={{'width': '100%', 'text-align': 'center' }} ><span class="odometer" data-count="46">46</span>+</h3>
                                            <p class='text-center'> People rescue </p>
                                        </div>
                                </div>
                            </div>
                        </div>  
                    </div> { /** end container */ }
                </section>
                { /** end about-section-s2 */ }



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

                <proffer-footer ngo={this.ngo}></proffer-footer>

                { HelmetService.render(this.ngo, 'Home') }

            </div>

        );
    }

    connectedCallback() {
        this.alive              =   true;
    }

    disconnectedCallback() {
        this.alive              =   false;
    }

}
