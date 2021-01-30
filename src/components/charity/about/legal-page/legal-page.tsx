import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../../../assets/ngo.json';

@Component({
    tag                         :   'charity-legal',
    styleUrl                    :   'legal-page.css'
})
export class LegalPage {

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('About - Legal :: Constructor');
    }

    async componentWillLoad() {
        console.log('About - Legal :: Component will load');
    }

    async componentDidLoad() {
        console.log('About - Legal :: Component did load');
    }


    render() {

        return (

        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <charity-header ngo={this.ngo}></charity-header>

                <div class="fh5co-hero">
                    <div class="fh5co-overlay"></div>
                    <div class="fh5co-cover text-center">
                        <img src='/assets/charity/images/books-001x1024.jpg' class='cover-image' />
                        <div class="desc animate-box">
                            <h2> Legal </h2>
                            <span> Transparency and Trust </span>
                        </div>
                    </div>
                </div>

                <div id="fh5co-features">
                    <div class="container">

                        <div class="row">
                            <div class="col-md-6 col-md-offset-3 text-center heading-section animate-box">
                                <h3> Legal documents </h3>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-md-4">
                                <div class="feature-text">
                                    <h3> Registration Deed </h3>
                                    <p> Registration No: 123/2018 </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="feature-text">
                                    <h3> Pan Card </h3>
                                    <p> Pan No: 1AHDB9488 </p>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="feature-text">
                                    <h3> 12A Certificate </h3>
                                    <p> Certificate No: SJSF830/2020 </p>
                                </div>
                            </div>
                        
                        </div>


                    </div>
                </div>

                <div id="fh5co-features" class="fh5co-section-gray">

                    <div class="container">
                        <div class="row">
                            <div class="col-md-4 col-md-offset-1">
                                <div class="row">
                                    <div class="col-md-12 text-center heading-section animate-box">
                                        <h3> Annual reports </h3>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="feature-text">
                                        <p> 2019 - 2020 Annaul report </p>
                                        <p> 2018 - 2019 Annaul report </p>
                                        <p> 2017 - 2018 Annaul report </p>
                                        <p> 2016 - 2017 Annaul report </p>
                                        <p> 2015 - 2016 Annaul report </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4 col-md-offset-2">
 
                                <div class="row">
                                    <div class="col-md-12 text-center heading-section animate-box">
                                        <h3> Audit Reports </h3>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="feature-text">
                                        <p> 2019 - 2020 Annaul report </p>
                                        <p> 2018 - 2019 Annaul report </p>
                                        <p> 2017 - 2018 Annaul report </p>
                                        <p> 2016 - 2017 Annaul report </p>
                                        <p> 2015 - 2016 Annaul report </p>
                                    </div>
                                </div>
                            
                            </div>

                        </div>

                    </div>

                </div>

            <charity-footer ngo={this.ngo}></charity-footer>
        </div>
    </div>


        );
    }

}
