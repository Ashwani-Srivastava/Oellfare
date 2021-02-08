import { Component, h, Prop }   from    '@stencil/core';

import { ProfferBase        }   from    'proffer/base/base'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'proffer-press-coverage',
    styleUrl                    :   'press-coverage.css',
})
export class PressCoverage {

    @Prop() ngo                 :   any                 =   ngo;

    async componentDidLoad() {
        console.log('About :: Component did load');

        ProfferBase.setupEssentials();
    }



    render() {

        return (
        <div class="page-wrapper">

            <proffer-header ngo={this.ngo}></proffer-header>


            { /** start page-title  */ }
            <section class="page-title" style={{ 'background': 'url(/assets/images/press-004x1024.jpg) center center/cover no-repeat local', 'background-color': 'rgba(0, 0, 0, 0.5)'}}>
                <div class="page-title-container">
                    <div class="page-title-wrapper">
                        <div class="container">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <h2> Press Coverage </h2>
                                    <ol class="breadcrumb">
                                        <li> <a> <ion-router-link href='/' color='light'> Home </ion-router-link> </a> </li>
                                        <li> <a> <ion-router-link href='/about' color='light'> About us </ion-router-link> </a> </li>
                                        <li> Press Coverage </li>
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
