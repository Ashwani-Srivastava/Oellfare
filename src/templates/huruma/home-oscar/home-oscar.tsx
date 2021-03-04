import { Build, Component, h, Prop }   from    '@stencil/core';

import { filter, takeWhile  }   from    'rxjs/operators';

import { HurumaBase         }   from    'huruma/base/base'

import { AuthService        }   from    'auth/auth.service';
import { HelmetService      }   from    'common/helmet.service'
import { Fundraiser         }   from    'fundraiser/fundraiser.model';
import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
import { NgoService         }   from    'ngo/ngo.service';
import * as ngo                 from    'assets/ngo.json';
import * as fund                from    'assets/fund.json';
import * as events              from    'assets/events.json';

@Component({
    tag                         :   'huruma-home-oscar',
    styleUrl                    :   'home-oscar.css'
})
export class HurumaHomeOscar {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);
    @Prop() fund                :   Fundraiser          =   new Fundraiser(fund);
    @Prop() events              :   any                 =   events;

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

        HurumaBase.setupEssentials();
        HurumaBase.setupCausesSlider();
        HurumaBase.setupHeroSlider();
        HurumaBase.setupOdometer();
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
        header                  :   'Our Ambitious Vision',
        subHeader               :   this.ngo.vision,
    }, {
        header                  :   'The beautiful thing about learning is that no one can take it away from you.',
        subHeader               :   ' -- B. B. King -- ',
    }, {
        header                  :   'No matter how Gifted you are, you alone cannot change the world!',
        subHeader               :   'Connecting Local bodies, People, Students, Corporates and even other NGOs. Trying to be as inclusive as possible',
    }];

    render() {
        //var image2='url('+"https://images.unsplash.com/photo-1589723935682-abe6cc1ee259?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"+')';
        return (

            <div class="page-wrapper">

                <huruma-header-trans-oscar ngo={this.ngo}></huruma-header-trans-oscar>

                <div class="home-banner-three home-banner-four">
                    <div class="home-slides-four owl-carousel owl-theme">
                        { this.ngo.photos.slice(0, 3).map((ph, index) => (
                        <div class="home-item item-bg-1" style={{ 'background': `url(${ph})`, 'background-size': 'cover' }}>
                            <div class="d-table">
                                <div class="d-table-cell">
                                    <div class="container">
                                        <div class="main-banner-content main-banner-content-four text-center">
                                            <h1> { this.coverText[index].header } </h1>
                                            <p>  { this.coverText[index].subHeader } </p>
                                            <div class="banner-btn">
                                                <a href="/donate" class="default-btn">
                                                    Donate Now
                                                    <i class="flaticon-right"></i>
                                                    <span></span>
                                                </a>
                                                <a class="optional-btn" href="/volunteer">
                                                    Become Member
                                                    <i class="flaticon-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )) } 
                    </div>
                </div>

                { /** Start Top Feature Area */ }
                <section class="feature-section">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4 col-sm-6 p-0">
                                <div class="feature-card">
                                    <div class="icon">
                                        <img src="/assets/huruma/img/icon/1.png" alt="image" />
                                        <img src="/assets/huruma/img/icon/white-1.png" alt="image" />
                                    </div>
                                    
                                    <h3>Become A Volunteer</h3>
                                    <p> Think of giving not as a duty but as a privilege. </p>

                                    <a href="/volunteer" class="feature-btn">
                                        Join now +
                                    </a>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 p-0">
                                <div class="feature-card">
                                    <div class="icon">
                                        <img src="/assets/huruma/img/icon/2.png" alt="image" />
                                        <img src="/assets/huruma/img/icon/white-2.png" alt="image" />
                                    </div>
                                    
                                    <h3> Donate Once </h3>
                                    <p> For it is in giving that we receive. </p>

                                    <a href="/donate" class="feature-btn">
                                        Give now +
                                    </a>
                                </div>
                            </div>

                            <div class="col-md-4 col-sm-6 p-0">
                                <div class="feature-card">
                                    <div class="icon">
                                        <img src="/assets/huruma/img/icon/3.png" alt="image" />
                                        <img src="/assets/huruma/img/icon/white-3.png" alt="image" />
                                    </div>
                                    
                                    <h3> Become a Champion </h3>
                                    <p> No one has ever become poor by giving. </p>

                                    <a href="/donate" class="feature-btn">
                                        Donate now +
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                { /** End Top Feature Area */ }

                { /** Start About Area */ }
                <section class="about-section pt-70 pb-100">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <div class="about-item">
                                    <span>
                                        <i class="flaticon-care-about-plants"></i>
                                        About us
                                    </span>
                                    <h3> The Organization Focused On Education </h3>
                                    <p class="main-color">
                                        { this.ngo.mission }
                                    </p>
                                    <p> { this.ngo.description } </p>

                                    <div class="about-btn">
                                        <a href="/donate" class="default-btn">
                                            Donate Now
                                            <i class="flaticon-right"></i>
                                            <span></span>
                                        </a>
                                        <a class="optional-btn" href="/about">
                                            More about us
                                            <i class="flaticon-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-6">
                                <div class="about-image about-four">
                                    <img src={this.ngo.photos[1]} class="shadow" alt="image" />
                                    <img src={this.ngo.photos[2]} class="shadow hello" alt="image" />
                                </div>

                                <div class="about-video">
                                    <a href={ this.ngo.video.url } class="video-btn popup-youtube">
                                        <i class="bx bx-play play-button"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                { /** End About Area */ }

                { /** Start Fun Facts Area */ }
                <section class="fun-facts-area">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-fun-fact">
                                    <p> Sewing Machines </p>
                                    <h3>
                                        <span class="odometer" data-count="3">00</span>
                                        <span class="sign-icon">+</span>
                                    </h3>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-fun-fact">
                                    <p> Tuition centers </p>
                                    <h3>
                                        <span class="odometer" data-count="2">00</span>
                                        <span class="sign-icon">+</span>
                                    </h3>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-fun-fact">
                                    <p> Students Coached </p>
                                    <h3>
                                        <span class="odometer" data-count="2000">00</span>
                                        <span class="sign-icon">+</span>
                                    </h3>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-fun-fact">
                                    <p> Volunteers </p>
                                    <h3>
                                        <span class="odometer" data-count="4">00</span>
                                        <span class="sign-icon">+</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                { /** End Fun Facts Area */ }

                { /** Start Solve Area */ }
                <section class="solve-section pt-100 pb-70">
                    <div class="container" >
                        <div class="section-title">
                            <span>
                                <i class="flaticon-to-do-list"></i>
                                What We Do
                            </span>
                            <h2>A mission to solve a problem</h2>
                        </div>

                        <div class="row">

                            { this.ngo.sdg.slice(0, 4).map(s => (
                            <div class="col-lg-3 col-md-6 col-sm-6 col-6">
                                <div class="solve-item">
                                    <div class="icon">
                                        <img src={s.photo.url} alt="image" />
                                    </div>
                                    <h3> { s.name } </h3>
                                    <p> { s.description.slice(0, 80) }... </p>
                                </div>
                            </div>
                            )) }

                        </div>
                    </div>
                </section>
                { /** End Solve Area */ }

                { /** Start Donate Area */ }
                <section class="donate-section ptb-100">
                    <div class="container">
                        <div class="section-title">
                            <h2>Want you know How Can  Help?</h2>
                            <p> See our Volunteer with us Page </p>
                            <a href="/volunteer" class="donate-btn">
                                Volunteer with us 
                                <i class="flaticon-right"></i>
                            </a>
                        </div>
                    </div>

                    <div class="default-shape">
                        <img src="/assets/huruma/img/donate/1.png" alt="image" />
                        <img src="/assets/huruma/img/donate/2.png" alt="image" />
                    </div>
                </section>
                { /** End Donate Area */ }

                <huruma-footer ngo={this.ngo}></huruma-footer>

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
