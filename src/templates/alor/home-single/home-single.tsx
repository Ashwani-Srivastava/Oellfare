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
    tag                         :   'alor-home-single',
    styleUrl                    :   'home-single.css',
})
export class AlorHomeSingle {

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
                this.ngo = n;
            });
    }

    render() {
        return [

            <alor-header-single ngo={this.ngo}></alor-header-single>,

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
                        <div class="col-md-4 activities-grid">
                            <div class="activities-grid-left">
                                <span> </span>
                            </div>
                            <div class="activities-grid-right">
                                <h4>Toy Distribution</h4>
                                <p> We collect and distribute Toys. Need more description text and some image as well </p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>

                        <div class="col-md-4 activities-grid">
                            <div class="activities-grid-left1">
                                <span> </span>
                            </div>
                            <div class="activities-grid-right">
                                <h4>Dress Distribution</h4>
                                <p> We collect and distribute Dresses. Need more description text and some image as well. </p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>

                        <div class="col-md-4 activities-grid">
                            <div class="activities-grid-left1">
                                <span> </span>
                            </div>
                            <div class="activities-grid-right">
                                <h4> Another activity </h4>
                                <p> Could be added here, along with Description </p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //activities */ },
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
                <div class="container">
                    <h3> Activities </h3>
                    <div class="news-grids">

                        <div class="col-md-5 news-grid">
                            <div class="news-grd">
                                <img src="/assets/alor/images/15.jpg" alt=" " />
                                <div class="video">
                                    <a href="#"><img src="/assets/alor/images/8.png" alt=" " /></a>
                                </div>
                            </div>
                            <div class="news-grd-text">
                                <p class="date">25 MAY 2021</p>
                                <h4> Velachery Street Children - Toy Distribution </h4>
                                <p class="children">
                                    We are distributing toys to Street children is Velachery. Need 5 volunteers coming Sunday. To donate toys, you can reach out to +91 9876543210.
                                    We are distributing toys to Street children is Velachery. Need 5 volunteers coming Sunday. To donate toys, you can reach out to +91 9876543210.
                                </p>
                                <div class="more1">
                                    <a href="#" class="hvr-bounce-to-right"> Volunteer here </a>
                                </div>
                                <div class="edit">
                                    <p> Lourdhu Diana </p>
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
                                        <p class="date">01 JUNE 2021</p>
                                        <h4> Karunai Illam - Home visit</h4>
                                        <p class="children">
                                            We are distributing toys to Street children is Velachery. Need 5 volunteers coming Sunday. To donate toys, you can reach out to +91 9876543210.
                                        </p>
                                        <div class="more1">
                                            <a href="#" class="hvr-bounce-to-right"> Volunteer here </a>
                                        </div>
                                        <div class="edit">
                                            <p> Lourdhu Diana </p>
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
                                        <p class="date">25 DECEMBER 2021</p>
                                        <h4> Christmas Children outing </h4>
                                        <p class="children">
                                            We are distributing toys to Street children is Velachery. Need 5 volunteers coming Sunday. To donate toys, you can reach out to +91 9876543210.
                                        </p>
                                        <div class="more1">
                                            <a href="#" class="hvr-bounce-to-right">Volunteer here</a>
                                        </div>
                                        <div class="edit">
                                            <p> Manickam </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
            </div>,

            <div id="volunteer" class="contact">
                { /** contact */ },
                <div class="container">
                    <div class="contact-header">
                        <h3>CONTACT US</h3>
                    </div>
                    <div class="map">
                        <iframe width="600" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=chennai%20lighthou&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <div class="map-color">
                            <div class="contact-info">
                                <h4>Contact Info</h4>

                                <p>
                                    { this.ngo.address } <br/>
                                    Mobile: { this.ngo.reachOut.phone1 } <br/>
                                    Email: { this.ngo.reachOut.email }
                                </p>

                                <h4>Contact us</h4>
                                <p></p>
                                <form>
                                    <input type="text" value="Name" required={true} />
                                    <select required>
                                        <option> Like to Volunteer </option>
                                        <option> Donate Toy </option>
                                        <option> General Enquiry </option>
                                    </select>
                                    <input type="text" value="Subject" required={true} />
                                    <textarea required={true} >Message...</textarea>
                                </form>
                                <input type="button" value="Send Message" />
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
