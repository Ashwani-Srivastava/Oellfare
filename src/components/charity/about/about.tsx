import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../../assets/ngo.json';

@Component({
    tag                         :   'charity-about',
    styleUrl                    :   'about.css',
})
export class CharityAbout {

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('About :: Constructor');
    }

    async componentWillLoad() {
        console.log('About :: Component will load');
    }

    async componentDidLoad() {
        console.log('About :: Component did load');
    }


    render() {

        return (

        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <charity-header ngo={this.ngo}></charity-header>

                <div class="fh5co-hero">
                    <div class="fh5co-overlay"></div>
                    <div class="fh5co-cover text-center" data-stellar-background-ratio="0.5">
                        <img src='/assets/charity/images/team-001x1024.jpg' class='cover-image' style={{ 'width': '100%', 'fiter': 'brightness(0.75)' }} />
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
                            <div class="col-md-6 col-md-offset-3 text-center heading-section animate-box">
                                <h3> Our Mission</h3>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-12 text-center">
                                <h6>
                                    { this.ngo.mission.map(m => (
                                    <p> { m } </p>
                                )) }
                                </h6>
                            </div>
                        </div>


                    </div>
                </div>

                { this.ngo.team.length > 0 ?

                <div id="fh5co-content-section" class="fh5co-section-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3>Leadership</h3>
                                <p> A leader is one who knows the way, goes the way, and shows the way. </p>
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
                </div>: null }

            <charity-footer ngo={this.ngo}></charity-footer>
        </div>
    </div>

);

    }

}
