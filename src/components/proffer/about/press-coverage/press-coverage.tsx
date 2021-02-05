import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'proffer-press-coverage',
    styleUrl                    :   'press-coverage.css',
})
export class PressCoverage {

    @Prop() ngo                 :   any                 =   ngo;

    render() {

        return (
        <div class="page-wrapper">

            <proffer-header ngo={this.ngo}></proffer-header>


            { /** start page-title  */ }
            <section class="page-title">
                <div class="page-title-container">
                    <div class="page-title-wrapper">
                        <div class="container">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <h2> Press Coverage </h2>
                                    <ol class="breadcrumb">
                                        <li><a href="index.html">Home</a></li>
                                        <li><a href="index.html">About us</a></li>
                                        <li>Press Coverage</li>
                                    </ol>
                                </div>
                            </div> { /** end row  */ }
                        </div> { /** end container  */ }
                    </div>
                </div>
            </section>
            { /** end page-title  */ }


            { /**  start blog-section  */ } 
            { this.ngo.media.length > 0 ?
            <section class="blog-section section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col col-xs-12">
                            <div class="section-title-s2">
                                <span>#In Media</span>
                                <h2>Our activities <span>in Press</span></h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-xs-12">
                            <div class="blog-grids">

                                {this.ngo.media.map(m => (
                                    <proffer-press-card media={m}></proffer-press-card>
                                )) }
                            </div>
                        </div>
                    </div>

                </div> { /**  end container  */ } 
            </section>: null }
            { /**  end blog-section  */ } 



            <proffer-footer ngo={this.ngo}></proffer-footer>
        </div>
    );

    }

}
