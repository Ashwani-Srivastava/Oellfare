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

    private legalData = [{
        'name': '2018 - 2019 IT Audit',
        'date': 'August, 2019',
        'url': 'https://firebasestorage.googleapis.com/v0/b/gr-live.appspot.com/o/grcare%2Fregional%2Fin%2F31%2F3100%2Fngo%2FDRl4IBHNfDdxwDCkp6Ql%2Flegal%2FFY%202018-2019.pdf?alt=media&token=c7fffb36-6d83-4ce0-8691-8f24e4e89614'
    }, {
        'name': '2017 - 2018 IT Audit',
        'date': 'August, 2018',
        'url': 'https://firebasestorage.googleapis.com/v0/b/gr-live.appspot.com/o/grcare%2Fregional%2Fin%2F31%2F3100%2Fngo%2FDRl4IBHNfDdxwDCkp6Ql%2Flegal%2FFY%202017-2018.pdf?alt=media&token=5eceb397-309c-4210-b62b-977a8ef08225'
    }, {
        'name': '2016 - 2017 IT Audit',
        'date': 'January, 2018',
        'url': 'https://firebasestorage.googleapis.com/v0/b/gr-live.appspot.com/o/grcare%2Fregional%2Fin%2F31%2F3100%2Fngo%2FDRl4IBHNfDdxwDCkp6Ql%2Flegal%2FFY%202016-2017.pdf?alt=media&token=a5a5a2a0-4c26-4936-b007-30bbd19f76f4'
    }];

    render() {

        return (

        <div class="page-wrapper">

            { this.ngo.name === 'Thozhan' ?
            <huruma-header-trans ngo={this.ngo}></huruma-header-trans>
            : <huruma-header-trans-oscar ngo={this.ngo}></huruma-header-trans-oscar>
            }

            <huruma-title name='Legal' parent='About us' bg-image='/assets/images/books-001x1024.jpg'></huruma-title>

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


                                        { this.legalData.map(doc => (
                                        <article class="item">
                                            <i class="flaticon-email thumb" style={{ 'width': '40px', 'height': '40px', 'font-size': '32px' }}></i>
                                            <div class="info">
                                                <time dateTime="2019-06-30"> { doc.date } </time>
                                                <h4 class="title usmall">
                                                    <a href={ doc.url }> { doc.name } </a>
                                                </h4>
                                            </div>

                                            <div class="clear"></div>
                                        </article>
                                        )) }

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
