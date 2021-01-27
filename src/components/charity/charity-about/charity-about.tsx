import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'charity-about',
    styleUrl: 'charity-about.css',
})
export class CharityAbout {

    @Prop() ngo                 :   any                 =   {};

    async componentWillLoad() {
        const jsonRawData       =   await fetch('/assets/ngo.json');
        this.ngo                =   await jsonRawData.json();
    }


    render() {

        if(!this.ngo) return '';

        return (

        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <charity-header ngo={this.ngo}></charity-header>

                <div class="fh5co-hero">
                    <div class="fh5co-overlay"></div>
                    <div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style={{ 'background-image': 'url(assets/charity/images/cover_bg_2.jpg)' }} >
                        <div class="desc animate-box">
                            <h2>About us</h2>
                            <span> { this.ngo.vision } </span>
                            <p style={{ 'color': 'white'}} > -- The Vision -- </p>
                        </div>
                    </div>
                </div>

                <div id="fh5co-features">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-12 text-center heading-section">
                                <h6>
                                    { this.ngo.mission.map(m => (
                                    <p> { m } </p>
                                )) }
                                </h6>
                                <p> --- Our Mission --- </p>
                            </div>
                        </div>


                    </div>
                </div>


                <div id="fh5co-content-section" class="fh5co-section-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3>Leadership</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est facilis maiores, perspiciatis accusamus asperiores sint consequuntur debitis.</p>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <div class="row">
                            { this.ngo.team.map(p => (
                                <div class="col-md-4">
                                    <div class="fh5co-team text-center animate-box">
                                        <figure>
                                            <img src={ p.photo.url } alt={ p.name } />
                                        </figure>

                                        <div>
                                            <h3> { p.name } </h3>
                                            <p><span> { p.role } </span></p>
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
            </div>




            <charity-footer ngo={this.ngo}></charity-footer>
        </div>
    </div>

);

    }

}
