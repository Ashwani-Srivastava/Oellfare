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

                <h1 style={{'text-align': 'center', 'font-size': '32px', 'margin': '64px' }} > About us Page </h1>

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
                                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
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
