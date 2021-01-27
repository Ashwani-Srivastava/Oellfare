import { Component, h, Prop } from '@stencil/core';

@Component({
    tag: 'charity-about',
    styleUrl: 'about.css',
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
                            { this.ngo.team.map(m => (
                                <div class="col-md-4">
                                <div class="fh5co-team text-center animate-box">

                                    <ion-img class='round' style={{'margin': '0em 6em', 'border-radius': '50px !important', 'margin-top': '-8em' }} src={m.photo.url} alt="user"></ion-img>

                                    <div>
                                        <h3> { m.name } </h3>
                                        <p><span> { m.role } </span></p>
                                    </div>

                                    <p class="fh5co-social-icons">

                                        { m.reachOut.facebook.length !== 0 ?
                                            <a href={m.reachOut.facebook}><i class="icon-facebook3"></i></a>
                                        : null }

                                        { m.reachOut.twitter.length !== 0 ?
                                            <a href={m.reachOut.twitter}><i class="icon-twitter3"></i></a>
                                        : null }

                                        { m.reachOut.instagram.length !== 0 ?
                                            <a href={m.reachOut.instagram}><i class="icon-instagram2"></i></a>
                                        : null }

                                        { m.reachOut.linkedin.length !== 0 ?
                                            <a href={m.reachOut.linkedin}><i class="icon-linkedin3"></i></a>
                                        : null }

                                        { m.reachOut.youtube.length !== 0 ?
                                            <a href={m.reachOut.youtube}><i class="icon-youtube2"></i></a>
                                        : null }

                                    </p>

                                </div>
                                </div>
                            )) }
                    </div>
                </div>


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

                            {this.ngo.media.map(m => (
                            <div class="col-lg-4 col-md-4 col-sm-6">
                                <div class="fh5co-blog animate-box">
                                    <a href={m.link}><img class="img-responsive media" src={m.photo.url} alt="" style={{ 'max-height': '240px', 'object-fit': 'cover', 'object-position': 'top', 'border': '2px solid #eee'}} /></a>
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
                            )) }

                        </div>

                    </div>
                </div>: null }



            </div>




            <charity-footer ngo={this.ngo}></charity-footer>
        </div>
    </div>

);

    }

}
