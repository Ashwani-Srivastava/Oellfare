import { Component, h, Prop } from '@stencil/core';
import * as ngo                 from    '../../../assets/ngo.json';

@Component({
    tag: 'charity-home',
    styleUrl: 'charity-home.css',
})
export class CharityHome {

    @Prop() ngo                 :   any                 =   ngo;

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
        /*
        const jsonRawData       =   await fetch('assets/ngo.json');
        this.ngo                =   await jsonRawData.json();
         */
    }

    async componentDidLoad() {
        console.log('Home :: Component did load');
    }

    render() {

        console.log('Home :: Render');

        return [

        <div id="fh5co-wrapper">
            <div id="fh5co-page">

                <charity-header ngo={this.ngo}></charity-header>

                <div class="fh5co-hero">
                    <div class="fh5co-overlay"></div>

                    <ion-slides style={{ 'height': '100%' }} id='coverSlides' options={this.coverSlideOptions} >
                        { this.ngo.photos.map(p => (
                            <ion-slide>
                                <img src={p} style={{ 'width': '100%', 'object-fit': 'cover' }} />
                            </ion-slide>
                        )) }

                    </ion-slides>

            {/*
            <div class="desc animate-box">
                <h2><strong>Donate</strong> for the <strong>Poor Children</strong></h2>
                <span>HandCrafted by <a href="http://frehtml5.co/" target="_blank" class="fh5co-site-name">FreeHTML5.co</a></span>
                <span><a class="btn btn-primary btn-lg" href="#">Donate Now</a></span>
            </div>
              */}


                </div>

                <div id="fh5co-features">
                    <div class="container">
                        <div class="row">

                            { this.ngo.sdg.slice(0, 3).map(s => (
                            <div class="col-md-4">

                                <div class="feature-left">
                                    <span class="icon">
                                        <img src={s.photo.url} />
                                    </span>
                                    <div class="feature-copy">
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


                        <div class="row row-bottom-padded-md">
                            <div class="col-md-12 text-center animate-box">
                                <p><img src="assets/images/believe-in-yourselfx1440.jpg" alt="Free HTML5 Bootstrap Template" class="img-responsive" /></p>
                            </div>
                            <div class="col-md-6 text-center animate-box">
                                <p><img src="assets/images/dreamx600.jpg" alt="Free HTML5 Bootstrap Template" class="img-responsive" /></p>
                            </div>
                            <div class="col-md-6 text-center animate-box">
                                <p><img src="assets/images/motivationx600.jpg" alt="Free HTML5 Bootstrap Template" class="img-responsive" /></p>
                            </div>
                        </div>
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


                    </div>
                </div>


                <div id="fh5co-portfolio">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 text-center heading-section animate-box">
                                <h3>Ongoing Fundraisers</h3>
                            </div>
                        </div>


                        <div class="row row-bottom-padded-md">
                            <div class="col-md-12">
                                <p class='text-center'> Coming soon... </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4 col-md-offset-4 text-center animate-box">
                                <a href="#" class="btn btn-primary btn-lg">See Gallery</a>
                            </div>
                        </div>


                    </div>
                </div>


                { this.ngo.team.length > 0 ?

                <div id="fh5co-content-section" class="fh5co-section-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3>Our Team</h3>
                                <p> Awesome people behind the whole thing </p>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            { this.ngo.team.map(m => (
                            <div class="col-md-4">
                                <div class="fh5co-testimonial text-center animate-box">
                                    <figure>
                                        <img src={m.photo.url} alt="user" />
                                    </figure>

                                    <div>
                                        <h3> { m.name } </h3>
                                        <p><span> { m.role } </span></p>
                                    </div>

                                    <p class="fh5co-social-icons">
                                        <a href="#"><i class="icon-twitter2"></i></a>
                                        <a href="#"><i class="icon-linkedin2"></i></a>
                                        <a href="#"><i class="icon-facebook3"></i></a>
                                    </p>

                                </div>
                            </div>
                            )) }
                        </div>

                    </div>

                </div>: null }

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
                            { this.ngo.projects.map(p => (
                            <div class="col-md-4 col-sm-4">
                                <div class="services animate-box">
                                    <span><i class="icon-heart"></i></span>
                                    <h3> { p.name } </h3>
                                    <p> { p.description.length < 100 ? p.description : p.description.substring(0, 100) + '...' } </p>
                                </div>
                            </div>
                            )) }
                        </div>
                    </div>
                </div> : null }




                { this.ngo.media.length > 0 ?
                <div id="fh5co-blog-section" class="fh5co-section-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3> Our Team </h3>
                                <p> Work hard in silence, let your success be your noise. </p>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row row-bottom-padded-md">

                            {this.ngo.media.slice(0, 3).map(m => (
                            <span>
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="fh5co-blog animate-box">
                                    <a href={m.link}><img class="img-responsive" src={m.photo.url} alt="" style={{'max-height': '240px', 'object-fit': 'cover', 'object-position': 'top'}} /></a>
                                    <div class="blog-text">
                                        <div class="prod-title">
                                            <h3><a href="#"> { m.name.length < 40 ? m.name : m.name.substring(0, 40) + '...' } </a></h3>
                                            <span class="posted_by"> { m.date } </span>
                                            <p> { m.description.length < 60 ? m.description : m.description.substring(0, 60) + '...' } </p>
                                            <p><a href={m.link}> { m.publicationName } </a></p>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                            <div class="clearfix visible-md-block"></div>
                            </span>
                            )) }

                        </div>

                        <div class="row">
                            <div class="col-md-4 col-md-offset-4 text-center animate-box">
                                <a href="#" class="btn btn-primary btn-lg"> See More </a>
                            </div>
                        </div>

                    </div>
                </div>: null }

                <charity-footer ngo={this.ngo}></charity-footer>

            </div>

        </div>

        ];

    }

}
