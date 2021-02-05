import { Build, Component, h,
         Prop               }   from    '@stencil/core';

import { filter, takeWhile  }   from    'rxjs/operators';

import { AuthService        }   from    'auth/auth.service';
import { HelmetService      }   from    'common/helmet.service';
import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
import { NgoService         }   from    'ngo/ngo.service';

import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'charity-home',
    styleUrl                    :   'home.css',
})
export class CharityHome {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);
    private alive               :   boolean             =   true;

    private coverSlideOptions   :   any                 =   {
        autoplay: {
            delay: 4000
        }
    };

    constructor () {
        console.log('Home :: Constructor');
    }

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
    }

    private async initialize() {
        Logger.info('Donate :: Initialize :: ');
        NgoService
            .fetchNgo(this.ngo.id)
            .pipe(takeWhile(_p => this.alive))
            .subscribe(n => this.ngo = n);
    }



    render() {

        console.log('Home :: Render');

        return [

        <div id="fh5co-wrapper">
            <div id="fh5co-page">

                <charity-header ngo={this.ngo}></charity-header>

                <div class="fh5co-hero" style={{ 'height': 'auto' }}>
                    <div class="fh5co-overlay"></div>

                    <ion-slides style={{ 'height': '100%' }} id='coverSlides' options={this.coverSlideOptions} >
                        { this.ngo.photos.slice(0, 3).map(p => (
                            <ion-slide>
                                <img src={p} style={{ 'width': '100%', 'object-fit': 'cover' }} />
                            </ion-slide>
                        )) }

                    </ion-slides>

                </div>

                <div id="fh5co-features">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-12 text-center heading-section">
                                <h3> We care for </h3>
                            </div>
                        </div>

                        <div class="row">

                            { this.ngo.sdg.slice(0, 3).map(s => (
                            <div class="col-md-4">

                                <div class="feature-left">
                                    <span class="icon">
                                        <img src={s.photo.url}/>
                                    </span>
                                    <div class="feature-copy" style={{ 'padding-left': '4px' }}>
                                        <h3> { s.name }</h3>
                                        <p> { s.description }</p>
                                        { /*
                                        <p><a href="#">Learn More</a></p>
                                           */ }
                                    </div>
                                </div>

                            </div>
                            )) }

                        </div>
                    </div>
                </div>

                <div id="fh5co-feature-product" class="fh5co-section-gray">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-12 text-center heading-section">
                                <h3> { this.ngo.vision }</h3>
                                <p> --- Our Vision --- </p>
                            </div>
                        </div>


                        { this.ngo.video.url.length > 0 ? 
                        <div class="row">
                            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
                            <iframe style={{ 'width': '100%', 'min-height': '320px' }} src={`https://www.youtube.com/embed/${this.ngo.video.url.split('?v=')[1]}`} frameborder="0" allowFullScreen allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </div>
                            :
                        <div class="row row-bottom-padded-md">
                            <div class="col-md-12 text-center animate-box">
                                <p><ion-img src="assets/images/believe-in-yourselfx1440.jpg" class="img-responsive"></ion-img></p>
                            </div>
                            <div class="col-md-6 text-center animate-box">
                                <p><ion-img src="assets/images/dreamx600.jpg" class="img-responsive"></ion-img></p>
                            </div>
                            <div class="col-md-6 text-center animate-box">
                                <p><ion-img src="assets/images/motivationx600.jpg" class="img-responsive"></ion-img></p>
                            </div>
                        </div>
                        }


                        { /*
                        <div class="row">
                            <div class="col-md-4">
                                <div class="feature-text">
                                    <h3>Love</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="feature-text">
                                    <h3>Compassion</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="feature-text">
                                    <h3>Charity</h3>
                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                </div>
                            </div>
                        </div>
                           */ }


                    </div>
                </div>


                <div id="fh5co-portfolio">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 text-center heading-section animate-box">
                                <h3>Active Fundraisers</h3>
                            </div>
                        </div>


                        <div class="row row-bottom-padded-md">
                            <div class="col-md-12">
                                <p class='text-center'> Coming soon... </p>
                            </div>
                        </div>

                                { /*
                        <div class="row">
                            <div class="col-md-4 col-md-offset-4 text-center animate-box">
                                <a href="#" class="btn btn-primary btn-lg">See More</a>
                            </div>
                        </div>
                                   */ }


                    </div>
                </div>


                <div id="fh5co-content-section" class="fh5co-section-gray">

                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-md-offset-1">
                                <div class="row">
                                    <div class="col-md-12 text-center heading-section animate-box">
                                        <h3> Why Volunteer here? </h3>
                                    </div>
                                </div>
                                { this.ngo.whyVolunteerHere.slice(0, 3).map(w => (
                                    <div class="feature-text">
                                        <p>
                                            <ion-icon name={ w.icon } style={{'margin-right': '8px'}}></ion-icon>
                                            { w.text }
                                        </p>
                                    </div>
                                )) }
                            </div>

                            <div class="col-md-4 col-md-offset-2">
 
                                <div class="row">
                                    <div class="col-md-12 text-center heading-section animate-box">
                                        <h3> Why your help matters? </h3>
                                    </div>
                                </div>
                                { this.ngo.whyHelpMatters.slice(0, 3).map(w => (
                                    <div class="feature-text">
                                        <p>
                                            <ion-icon name={ w.icon } style={{'margin-right': '8px'}}></ion-icon>
                                            { w.text }
                                        </p>
                                    </div>
                                )) }
                                                           
                            
                            </div>
                        </div>

                    </div>

                </div>

                { this.ngo.projects.length > 0 ?
                <div id="fh5co-services-section">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3>Our Projects. Support Us</h3>
                                { /*
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                                   */ }
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row text-center">
                            { this.ngo.projects.slice(0, 3) .map(p => (
                            <div class="col-md-4 col-sm-6">
                                <div class="services animate-box">
                                    <img style={{ 'margin-top': '-1em', 'margin-bottom': '2em' }} src={ p.photo.url } />
                                    <h3> { p.name } </h3>
                                    <p style={{ 'max-height': '80px' }}> { p.description.length < 100 ? p.description : p.description.substring(0, 100) + '...' } </p>
                                    <p><a> <ion-router-link href={`/projects/${p.slug}`}> Learn more... </ion-router-link> </a></p>
                                </div>
                            </div>
                            )) }
                        </div>


                        <div class="row">
                            <div class="col-md-4 col-md-offset-4 text-center animate-box">
                                <a class="btn btn-primary btn-lg"> <ion-router-link href="/projects" style={{ 'color': 'white' }} > See more </ion-router-link> </a>
                            </div>
                        </div>
                    </div>
                </div> : null }




                { this.ngo.media.length > 0 ?
                <div id="fh5co-blog-section" class="fh5co-section-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3> Media has been soo kind to us </h3>
                                <p> Work hard in silence, let your success be your noise. </p>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row row-bottom-padded-md">

                            {this.ngo.media.slice(0, 3).map(m => (
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="fh5co-blog animate-box">
                                    <a href={m.link} target='_blank'><img class="img-responsive media" src={m.photo.url} alt="" style={{ 'max-height': '240px', 'object-fit': 'cover', 'object-position': 'top', 'border': '2px solid #eee'}} /></a>
                                    <div class="blog-text">
                                        <div class="prod-title">
                                            <h3><a href="#"> { m.name.length < 40 ? m.name : m.name.substring(0, 40) + '...' } </a></h3>
                                            <span class="posted_by"> { m.date.toLocaleDateString("en-US") } </span>
                                            <p> { m.description.length < 60 ? m.description : m.description.substring(0, 60) + '...' } </p>
                                            <p><a href={m.link} target='_blank'> { m.publicationName } </a></p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            )) }

                        </div>

                        <div class="row">
                            <div class="col-md-4 col-md-offset-4 text-center animate-box">
                                <a class="btn btn-primary btn-lg"> <ion-router-link href="/about/press-coverage" style={{ 'color': 'white' }} > See more </ion-router-link> </a>
                            </div>
                        </div>

                    </div>
                </div>: null }

                <charity-footer ngo={this.ngo}></charity-footer>

                { HelmetService.render(this.ngo, 'Home') }

            </div>

        </div>,

        <ion-fab slot="fixed" horizontal="end" vertical="bottom">
            <ion-fab-button color='secondary' href={`https://api.whatsapp.com/send?phone=${this.ngo.reachOut.phone1}&text=Hi. I like to support ${this.ngo.name}.`}>
                <ion-icon name="logo-whatsapp"></ion-icon>
            </ion-fab-button>
        </ion-fab>

        ];

    }

    connectedCallback() {
        this.alive              =   true;
    }

    disconnectedCallback() {
        this.alive              =   false;
    }

}
