import { Build, Component, h,
         Prop               }   from    '@stencil/core';

import { filter, takeWhile  }   from    'rxjs/operators';

import { AlorBase           }   from    'alor/base/base'
import { AuthService        }   from    'auth/auth.service';
import { HelmetService      }   from    'common/helmet.service'
import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
import { NgoService         }   from    'ngo/ngo.service';

import * as ngo                 from    'assets/ngo.json';
//import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'alor-home',
    styleUrl                    :   'home.css',
})
export class AlorHome {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);
    private alive               :   boolean             =   true;

    private coverSlideOptions   :   any                 =   {
        autoplay: {
            delay: 4000
        }
    };

    async componentWillLoad() {
        console.log('Home :: Component will load');

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
        console.log('Home :: Component did load');

        AlorBase.setupEssentials();
    }

    private async initialize() {
        Logger.info('Home :: Initialize :: ');
        NgoService
            .fetchNgo(this.ngo.id)
            .pipe(takeWhile(_p => this.alive))
            .subscribe(n => {
                debugger;
                this.ngo = n;
            });
    }

    render() {
        return [

            <alor-header ngo={this.ngo}></alor-header>,

            <div class="banner">;
                <ion-slides style={{ 'height': '100%' }} id='coverSlides' options={this.coverSlideOptions} >
                    { this.ngo.photos.slice(0, 3).map(p => (
                        <ion-slide>
                            <img src={p} style={{ 'width': '100%', 'object-fit': 'cover' }} />
                        </ion-slide>
                    )) }
                </ion-slides>
            </div>,

            <div id="history" class="history">
                { /** history */ },
                <div class="container">
                    <h3>Our Vision</h3>
                    <h5 class="text-center" style={{ 'font-size': '1.5em' }} > { this.ngo.vision } </h5>
                </div>
                { /** //history */ },
            </div>,

            <div class="lorum">
                { /** lorum */ },
                <div class="container">
                    <div class="lorum-info">
                        <h3>Children have neither past nor future. They enjoy the present, which very few of us do. <br/> - Jean De La Bruyere - </h3>
                    </div>
                </div>
                { /** //lorum */ },
            </div>,

            <div id="about" class="about">
                { /** about */ },
                <div class="container">
                    <h3>ABOUT US</h3>
                    <div class="about-grids">
                        <div class="col-md-6 about-grid">
                            <h2>A Glimpse into our Activities</h2>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{'width': '60%' }} >
                                    <span class="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div class="about-grid-fig">
                                <img src="/assets/baby-needs/video.jpg" alt=" " />
                                <a class="play-icon popup-with-zoom-anim" href="#small-dialog">
                                    <span> </span>
                                </a>
                                <div id="small-dialog" class="mfp-hide">
                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/tQr-Lt2PtTg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 about-grid">
                            <h2 class="community">What we do?</h2>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{'width': '60%;' }}>
                                    <span class="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div class="mission-vision">
                                <div class="vission-grid">
                                    <p> {this.ngo.description } </p>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //about */ },
            </div>,

            <div id="activities" class="activities">
                { /** activities */ },
                <div class="container">
                    <h3>OUR ACTIVITIES</h3>
                    <div class="activities-grids">
                        <div class="col-md-6 activities-grid">
                            <div class="activities-grid-left">
                                <span> </span>
                            </div>
                            <div class="activities-grid-right">
                                <h4>Toy Distribution</h4>
                                <p> We collect and distribute Toys </p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="col-md-6 activities-grid">
                            <div class="activities-grid-left1">
                                <span> </span>
                            </div>
                            <div class="activities-grid-right">
                                <h4>Dress Distribution</h4>
                                <p> We collect and distribute Dresses. </p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //activities */ },
            </div>,

            <div id="childrens" class="our-childrens">
                { /** our-childrens */ },
                <div class="container">
                    <h3>OUR CHILDRENS</h3>
                    <div class="our-childrens-grids">
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/3.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/3.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/4.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/4.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/5.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/5.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/6.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/6.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="our-childrens-grids">
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/7.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/7.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/8.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/8.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/9.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/9.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/10.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/10.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //our-childrens */ }	,
            </div>,

            <div class="work">
                { /** work */ },
                <div class="container">
                    <h3>OUR WORK PROCESS</h3>
                    <div class="work-grids">
                        <div class="col-md-2 work-grid">
                            <div class="thumbnail">
                                <div class="first-step">
                                    <span> </span>
                                </div>
                                <div class="caption">
                                    <h4>First step</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        In lobortis</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 work-grid">
                            <div class="thumbnail">
                                <div class="first-step1">
                                    <span> </span>
                                </div>
                                <div class="caption">
                                    <h4>Second step</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        In lobortis</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 work-grid">
                            <div class="thumbnail">
                                <div class="first-step2">
                                    <span> </span>
                                </div>
                                <div class="caption">
                                    <h4>Third step</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        In lobortis</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 work-grid">
                            <div class="thumbnail">
                                <div class="first-step3">
                                    <span> </span>
                                </div>
                                <div class="caption">
                                    <h4>Fourth step</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        In lobortis</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 work-grid">
                            <div class="thumbnail">
                                <div class="first-step4">
                                    <span> </span>
                                </div>
                                <div class="caption">
                                    <h4>Fifth step</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        In lobortis</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 work-grid">
                            <div class="thumbnail">
                                <div class="first-step5">
                                    <span> </span>
                                </div>
                                <div class="caption">
                                    <h4>Last step</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        In lobortis</p>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //work */ },
            </div>,

            <div id="team" class="team">
            { this.ngo.team.length > 0 ?
                <div class="container">
                    <h3>MEET OUR TEAM</h3>
                    <div class="team-grids">
                        <div class="col-md-3 team-grid">
                            <div class="thumbnail team-grid-main">
                                <img src="/assets/alor/images/12.jpg" alt=" " />
                                <div class="caption pretium">
                                    <h4>Munzurul Hasan</h4>
                                    <p class="founder">Founder,Alor Bhubon</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis,
                                        ante interdum vehicula pretium, dui enim porta lectus, non euismod tortor 
                                        ante eu libero. Aenean blandit luctus tortor vitae interdum. Etiam egestas
                                        purus lorem, eget tempus odio placerat id.</p>
                                    <ul>
                                        <li><a href="#" class="facebook"> </a></li>
                                        <li><a href="#" class="twitter"> </a></li>
                                        <li><a href="#" class="g-plus"> </a></li>
                                        <li><a href="#" class="in"> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 team-grid">
                            <div class="thumbnail team-grid-main">
                                <img src="/assets/alor/images/13.jpg" alt=" " />
                                <div class="caption pretium">
                                    <h4>Munzurul Hasan</h4>
                                    <p class="founder">Founder,Alor Bhubon</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis,
                                        ante interdum vehicula pretium, dui enim porta lectus, non euismod tortor 
                                        ante eu libero. Aenean blandit luctus tortor vitae interdum. Etiam egestas
                                        purus lorem, eget tempus odio placerat id.</p>
                                    <ul>
                                        <li><a href="#" class="facebook"> </a></li>
                                        <li><a href="#" class="twitter"> </a></li>
                                        <li><a href="#" class="g-plus"> </a></li>
                                        <li><a href="#" class="in"> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 team-grid">
                            <div class="thumbnail team-grid-main">
                                <img src="/assets/alor/images/14.jpg" alt=" " />
                                <div class="caption pretium">
                                    <h4>Munzurul Hasan</h4>
                                    <p class="founder">Founder,Alor Bhubon</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis,
                                        ante interdum vehicula pretium, dui enim porta lectus, non euismod tortor 
                                        ante eu libero. Aenean blandit luctus tortor vitae interdum. Etiam egestas
                                        purus lorem, eget tempus odio placerat id.</p>
                                    <ul>
                                        <li><a href="#" class="facebook"> </a></li>
                                        <li><a href="#" class="twitter"> </a></li>
                                        <li><a href="#" class="g-plus"> </a></li>
                                        <li><a href="#" class="in"> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 team-grid">
                            <div class="thumbnail team-grid-main">
                                <img src="/assets/alor/images/11.jpg" alt=" " />
                                <div class="caption pretium">
                                    <h4>Munzurul Hasan</h4>
                                    <p class="founder">Founder,Alor Bhubon</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis,
                                        ante interdum vehicula pretium, dui enim porta lectus, non euismod tortor 
                                        ante eu libero. Aenean blandit luctus tortor vitae interdum. Etiam egestas
                                        purus lorem, eget tempus odio placerat id.</p>
                                    <ul>
                                        <li><a href="#" class="facebook"> </a></li>
                                        <li><a href="#" class="twitter"> </a></li>
                                        <li><a href="#" class="g-plus"> </a></li>
                                        <li><a href="#" class="in"> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>: null }
            </div>,


            <div class="liton">
                { /** liton */ },
                <div class="container">
                    <div class="lton-inf">
                        <div class="wmuSlider example1">
                            <div class="wmuSliderWrapper">
                                <article style={{'position': 'absolute', 'width': '100%', 'opacity': '0' }}> 
                                    <div class="banner-wrap">
                                        <div class="liton-inf">
                                            <div class="liton-fig">
                                                <span> </span>
                                            </div>
                                            <div class="liton-info">
                                                <h3>Liton Dev</h3>
                                                <p>Volunteer, Porshee Foundation</p>
                                            </div>
                                            <p class="tortor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, ante interdum vehicula pretium, dui enim porta
                                                lectus, non euismod tortor ante eu libero.</p>
                                        </div>
                                    </div>
                                </article>
                                <article style={{'position': 'absolute', 'width': '100%', 'opacity': '0' }}> 
                                    <div class="banner-wrap">
                                        <div class="liton-inf">
                                            <div class="liton-fig1">
                                                <span> </span>
                                            </div>
                                            <div class="liton-info">
                                                <h3>Adom Simmy</h3>
                                                <p>Volunteer, Porshee Foundation</p>
                                            </div>
                                            <p class="tortor">Consectetur ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, ante interdum vehicula pretium, dui enim porta
                                                lectus, non euismod tortor ante eu libero.</p>
                                        </div>
                                    </div>
                                </article>
                                <article style={{'position': 'absolute', 'width': '100%', 'opacity': '0' }}> 
                                    <div class="banner-wrap">
                                        <div class="liton-inf">
                                            <div class="liton-fig2">
                                                <span> </span>
                                            </div>
                                            <div class="liton-info">
                                                <h3>Micheal Smith</h3>
                                                <p>Volunteer, Porshee Foundation</p>
                                            </div>
                                            <p class="tortor">Euismod ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, ante interdum vehicula pretium, dui enim porta
                                                lectus, non euismod tortor ante eu libero.</p>
                                        </div>
                                    </div>
                                </article>
                                <ul class="wmuSliderPagination">
                                    <li><a href="#" class="">0</a></li>
                                    <li><a href="#" class="">1</a></li>
                                    <li><a href="#" class="wmuActive">2</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                { /** //liton */ },
            </div>,

            <div id="news" class="news">
                { /** news */ },
                <div class="container">
                    <h3>NEWS</h3>
                    <div class="news-grids">
                        <div class="col-md-5 news-grid">
                            <div class="news-grd">
                                <img src="/assets/alor/images/15.jpg" alt=" " />
                                <div class="video">
                                    <a href="#"><img src="/assets/alor/images/8.png" alt=" " /></a>
                                </div>
                            </div>
                            <div class="news-grd-text">
                                <p class="date">25 MAY 2015</p>
                                <h4>Why do children end up on the streets?</h4>
                                <p class="children">Children end up on the streets for a mixture of 
                                    reasons, though poverty is usually at the heart of the problem. 
                                    In the countries where we work, conflict and poverty combine to 
                                    force children onto the streets. In many cases a child's family 
                                    can no longer afford to care for them properly or may need their 
                                    help to supplement the family income and help put food on the table.</p>
                                <div class="more1">
                                    <a href="#" class="hvr-bounce-to-right">Read More</a>
                                </div>
                                <div class="edit">
                                    <p>Hasan</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7 news-grid">
                            <div class="news-income">
                                <div class="news-grid-left">
                                    <img class="steel" src="/assets/alor/images/16.jpg" alt=" " />
                                    <div class="gallery">
                                        <a href="#"><img src="/assets/alor/images/9.png" alt=" " /></a>
                                    </div>
                                </div>
                                <div class="news-grid-right">
                                    <div class="news-grd-text1">
                                        <p class="date">01 DECEMBER 2014</p>
                                        <h4>BeReviews was a awesome envent in dhaka</h4>
                                        <p class="children">With a blow from the top-maul Ahab knocked 
                                            off the steel head of the lance, and then handing to the steel</p>
                                        <div class="more1">
                                            <a href="#" class="hvr-bounce-to-right">Read More</a>
                                        </div>
                                        <div class="edit">
                                            <p>Litoon Dev</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            <div class="news-income">
                                <div class="news-grid-left">
                                    <img class="steel" src="/assets/alor/images/17.jpg" alt=" " />
                                    <div class="gallery">
                                        <a href="#"><img src="/assets/alor/images/10.png" alt=" " /></a>
                                    </div>
                                </div>
                                <div class="news-grid-right">
                                    <div class="news-grd-text1">
                                        <p class="date">03 NOVEMBER 2014</p>
                                        <h4>Play list of old bangle music and gajal countries</h4>
                                        <p class="children">With a blow from the top-maul Ahab knocked 
                                            off the steel head of the lance, and then handing to the steel</p>
                                        <div class="more1">
                                            <a href="#" class="hvr-bounce-to-right">Read More</a>
                                        </div>
                                        <div class="edit">
                                            <p>Rabbani</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //news */ },
            </div>,

            <div id="contact" class="contact">
                { /** contact */ },
                <div class="container">
                    <div class="contact-header">
                        <h3>CONTACT ALOR BHUBON</h3>
                    </div>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1973950112197!2d90.39410240000001!3d23.7403393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bfe09f2fc9%3A0x1da49bc0abfd4f7a!2sShahbagh%2C+Dhaka%2C+Bangladesh!5e0!3m2!1sen!2sin!4v1432554662723" frameborder="0" style={{ 'border' : '0' }}></iframe>
                        <div class="map-color">
                            <div class="contact-info">
                                <h4>Contact Info</h4>
                                <p>252, Elephant Road, Al-Baraka Tower,
                                    <span>Kataban Road, Dhaka, Bangladesh</span>
                                    Phone Number: 01918-009393</p>
                                <form>
                                    <input type="text" value="Name" required={true} />
                                    <input type="email" value="Email" required={true} />
                                    <input type="text" value="Subject" required={true} />
                                    <textarea required={true} >Message...</textarea>
                                    <input type="submit" value="Send Message" />
                                </form>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>

                </div>
                { /** contact */ },
            </div>,

            <alor-footer ngo={this.ngo}></alor-footer>

        ];
    }

    connectedCallback() {
        this.alive              =   true;
    }

    disconnectedCallback() {
        this.alive              =   false;
    }


}
