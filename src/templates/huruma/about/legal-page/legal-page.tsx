import { Component, h, Prop }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'

import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'huruma-legal',
    styleUrl                    :   'legal-page.css'
})
export class HurumaLegalPage {

    @Prop() ngo                 :   any                 =   ngo;

    constructor () {
        console.log('About - Legal :: Constructor');
    }

    async componentWillLoad() {
        console.log('About - Legal :: Component will load');
    }

    async componentDidLoad() {
        console.log('About - Legal :: Component did load');

        HurumaBase.setupEssentials();
    }


    render() {

        return (

        <div class="page-wrapper">

            <huruma-header ngo={this.ngo}></huruma-header>

            <div class="page-title-area">
                <div class="d-table">
                    <div class="d-table-cell">
                        <div class="container">
                            <div class="page-title-content">
                                <h2>About us</h2>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="contact-section ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="contact-info-address">
                                <h3> Legal </h3>

                                <div class="info-contact">
                                    <i class="flaticon-pin"></i>
                                    <h3>Registration No</h3>
                                    <span> { this.ngo.legal.regNo } </span>
                                </div>

                                <div class="info-contact">
                                    <i class="flaticon-call"></i>
                                    <h3>Pan No</h3>
                                    <span> { this.ngo.legal.panNo } </span>
                                </div>

                                <div class="info-contact">
                                    <i class="flaticon-email"></i>
                                    <h3>12AA</h3>
                                    <span> { this.ngo.legal._12ANo } </span>
                                </div>

                                <div class="info-contact">
                                    <i class="flaticon-email"></i>
                                    <h3> 80G </h3>
                                    <span> { this.ngo.legal._80GNo } </span>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-8">
                            <div class="contact-area">

                                <div class="widget-area">
                                    <section class="widget widget_huruma_posts_thumb">
                                        <h3 class="widget-title"> Annual IT Filing </h3>

                                        <article class="item">
                                            <a href="#" class="thumb">
                                                <span class="fullimage cover bg1" role="img"></span>
                                            </a>
                                            <div class="info">
                                                <time dateTime="2019-06-30">June 30, 2020</time>
                                                <h4 class="title usmall">
                                                    <a href="#"> 2019 - 2020 IT Audit </a>
                                                </h4>
                                            </div>

                                            <div class="clear"></div>
                                        </article>


                                        
                                        <article class="item">
                                            <a href="#" class="thumb">
                                                <span class="fullimage cover bg4" role="img"></span>
                                            </a>
                                            <div class="info">
                                                <time dateTime="2019-06-30">June 30, 2020</time>
                                                <h4 class="title usmall">
                                                    <a href="#"> 2018 - 2019 IT Audit </a>
                                                </h4>
                                            </div>

                                            <div class="clear"></div>
                                        </article>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <huruma-footer ngo={this.ngo}></huruma-footer>

            <span> { HelmetService.render(this.ngo, 'Legal') } </span>

        </div>

        );
    }

}
