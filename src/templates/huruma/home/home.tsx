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
    tag                         :   'huruma-home',
    styleUrl                    :   'home.css'
})
export class HurumaHome {

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
        header                  :   'Towards Accident free Nation',
        subHeader               :   'We pledge for Tamil nadu',
    }, {
        header                  :   'Building Leaders of the Nation',
        subHeader               :   'One at a time',
    }, {
        header                  :   'No matter how Gifted you are, you alone cannot change the world!',
        subHeader               :   'Connecting Local bodies, People, Students, Corporates and even other NGOs. Trying to be as inclusive as possible',
    }];

    render() {
        var image2='url('+"https://images.unsplash.com/photo-1589723935682-abe6cc1ee259?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"+')';
        return (

            <div class="page-wrapper">

                <huruma-header ngo={this.ngo}></huruma-header>

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
                                    <h3> The Organization Focused On Building People </h3>
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
                                    <img src={this.ngo.photos[4]} class="shadow" alt="image" />
                                    <img src={this.ngo.photos[5]} class="shadow hello" alt="image" />
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
                                    <p>Volunteers</p>
                                    <h3>
                                        <span class="odometer" data-count="5000">00</span>
                                        <span class="sign-icon">+</span>
                                    </h3>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-fun-fact">
                                    <p>Road Safety Campaigns</p>
                                    <h3>
                                        <span class="odometer" data-count="2000">00</span>
                                        <span class="sign-icon">+</span>
                                    </h3>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-fun-fact">
                                    <p>Leaders Created</p>
                                    <h3>
                                        <span class="odometer" data-count="2000">00</span>
                                        <span class="sign-icon">+</span>
                                    </h3>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-sm-6">
                                <div class="single-fun-fact">
                                    <p>Districts</p>
                                    <h3>
                                        <span class="odometer" data-count="12">00</span>
                                        <span class="sign-icon">K</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                { /** End Fun Facts Area */ }

                { /** Start Causes Area */ }
                <section class="causes-section pt-100 pb-70">
                    <div class="container">
                        <div class="section-title">
                            <span>
                                <i class="flaticon-ribbon"></i>
                                Our Causes
                            </span>
                            <h2>The causes we care about</h2>
                            <p> Some of our active Fundraiser campaigns </p>
                        </div>

                        <div class="row">
                            <div class="col-lg-10 offset-lg-1">

                                <div class="single-causes">
                                    <img src={ this.fund.coverPhoto[0].url } alt="image" style={{ 'min-height': '240px', 'object-fit': 'cover' }} />
                                    <div class="icon">
                                        <i class="flaticon-book-1"></i>
                                    </div>

                                    <div class="causes-content" style={{ 'width': '100%' }}>
                                        <span>#Education</span>
                                        <h3> { this.fund.name } </h3>
                                        <p> { this.fund.aboutProject.slice(0, 100) }... </p>

                                        <div class="causes-progress-bar">
                                            <div class="causes-progress-content">
                                                <span>Raised: ${ this.fund.donation.collected }</span>
                                                
                                                <div class="text-right">
                                                    <span>Goal: ${ this.fund.donation.required }</span>
                                                </div>
                                            </div>
                                            <p>Raised by { this.fund.donation.count }</p>
                                        </div>
                                        
                                        <a href="/donate" class="causes-btn-one">
                                            Donate Now
                                            <i class="flaticon-right"></i>
                                        </a>
                                    </div>
                                </div>

            
                            </div>

                        </div>
                    </div>
                </section>
                { /** End Causes Area */ }

                { /** Start Donor Area */ }
                <section class="donor-section pt-100 pb-70">
                    <div class="container">
                        <div class="section-title">
                            <h2> Why volunteer here? </h2>
                        </div>

                        <div class="row">
                            <div class="col-lg-4 col-md-6">
                                <div class="donor-item">
                                    <div class="icon">
                                        <i class="flaticon-support"></i>
                                    </div>
                                    <p> { this.ngo.whyVolunteerHere[0].text } </p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <div class="donor-item">
                                    <div class="icon">
                                        <i class="flaticon-confirmation"></i>
                                    </div>
                                    <p> { this.ngo.whyVolunteerHere[1].text } </p>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6 col-md-6 offset-md-3 offset-lg-0">
                                <div class="donor-item">
                                    <div class="icon">
                                        <i class="flaticon-enjoy"></i>
                                    </div>
                                    <p> { this.ngo.whyVolunteerHere[2].text } </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="lines">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </div>
                </section>
                { /** End Donor Area */ }

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

                { /** Start Events Area */ }
                <section class="donor-section pt-100 pb-70">
                    <div class="container" >
                        <div class="section-title">
                            <span>
                                <i class="flaticon-clipboard"></i>
                                Help
                            </span>
                            <h2> The heart that gives, gathers</h2>
                            {/* <p>  with a good background image </p> */}
                        </div>

                        <div class="event-slider owl-carousel owl-theme">

                        </div>
                    </div>
                </section>
                { /** End Events Area */ }

                { /** Start Testimonials Area */ }
                <section class="testimonials-section pt-140 pb-100">
                    <div class="container">
                        <div class="section-title">
                            <span>
                                <i class="flaticon-testimonial"></i>
                                Testimonials
                            </span>
                            <h2>Don’t Believe Us? See review</h2>
                        </div>
                        <div class="testimonials-slider owl-carousel owl-theme">
                            
                            { this.ngo.review.filter(r => r.attended && r.feedback.length > 50).map(review => (
                            <div class="testimonials-item">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="testimonials-info">
                                            <img src= { review.volunteer.photo.url } alt="image" />
                                            <h3> { review.volunteer.name } </h3>
                                            <ul class="social-info">
                                                 {(function (rows, i, len) {     
                                                     while (++i <= len) {            
                                                     rows.push(<li><i class='bx bxs-star'></i></li>)
                                                     }                               
                                                     return rows;                    
                                                 })([], 0, review.rating)}  
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <h3> For: { review.event.name } </h3>
                                        <p> { review.feedback } </p>
                                    </div>
                                </div>
                            </div>
                            )) }
                        </div>
                    </div>

                    <div class="testimonials-shape">
                        <img src="/assets/huruma/img/testimonials/shape.png" alt="image" />
                    </div>
                </section>
                { /** End Testimonials Area */ }

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

                { /** Start Blog Area */ }
                <section class="blog-section pt-100 pb-70">
                    <div class="container">
                        <div class="section-title">
                            <span>
                                <i class="flaticon-book"></i>
                                Our Recognition
                            </span>
                            <h2> See what Media talks about us </h2>
                        </div>

                        <div class="row">

                            { this.ngo.media.slice(0, 3).map(med => (
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <huruma-press-card media={med}></huruma-press-card>
                            </div>
                            )) }


                        </div>

                        <div class='row' style={{ 'float': 'right' }} >
                            <div class="team-btn">
                                <a href="/about/press-coverage" class="optional-btn">
                                    See More
                                    <i class="flaticon-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                { /** End Blog Area */ }

                {/* Start Events Area */}
                <section class="event-section pt-100">
                    <div class="container">
                        <div class="section-title">
                            <span>
                                <i class="flaticon-clipboard"></i>
                                Upcoming Events
                            </span>
                            <h2>Be ready for Our Events</h2>
                            <p>Event makes suspendice  adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendices gravida.</p>
                        </div>

                        <div class="event-slider owl-carousel owl-theme">
                            {this.events.default.map(event => (
                                <huruma-event-card event={event}></huruma-event-card>
                            ))}
                        </div>
                    </div>
                </section>
                {/* End Events Area */}
                <br/><br/><br/><br/>
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
