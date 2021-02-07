import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../../../assets/ngo.json';

@Component({
    tag                         :   'proffer-legal',
    styleUrl                    :   'legal-page.css'
})
export class ProfferLegalPage {

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

        <div class="page-wrapper">

            <proffer-header ngo={this.ngo}></proffer-header>

            { /** start page-title  */ }
            <section class="page-title" style={{ 'background': 'url(/assets/charity/images/books-001x1024.jpg) center center/cover no-repeat local', 'background-color': 'rgba(0, 0, 0, 0.5)'}}>
                <div class="page-title-container">
                    <div class="page-title-wrapper">
                        <div class="container">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <h2> Legal </h2>
                                    <ol class="breadcrumb">
                                        <li> <a> <ion-router-link href='/' color='light'> Home </ion-router-link> </a> </li>
                                        <li> <a> <ion-router-link href='/about' color='light'> About us </ion-router-link> </a> </li>
                                        <li> Legal </li>
                                    </ol>
                                </div>
                            </div> { /** end row  */ }
                        </div> { /** end container  */ }
                    </div>
                </div>
            </section>
            { /** end page-title  */ }

            { /** start event-single-section */ }
            <section class="event-single-section section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col col-lg-10 col-lg-offset-1">
                            <div class="row">
                                <div class="col col-md-9">




        <section class="shop-single-section section-padding" style={{ 'padding-top': '0px' }}>
            <div class="container" style={{ 'width': '100%' }} >

                <div class="row">
                    <div class="col col-xs-12">

                        <div class="product-info" style={{ 'margin-top': '0px' }}>

                                    <h3 style={{ 'margin-top': '0px' }}> Annual reports </h3>

                                    <div class="row">
                                        <div class="col col-xs-12">
                                            <div class="client-rv">
                                                <div class="client-pic">
                                                    <i class="fi flaticon-pdf"></i>
                                                </div>
                                                <div class="details">
                                                    <div class="name-rating-time">
                                                        <div class="name-rating">
                                                            <div>
                                                                <h4> 2019 - 2020 Annual report </h4>
                                                            </div>
                                                        </div>
                                                        <div class="time">
                                                            <span>1 month ago</span>
                                                        </div>
                                                    </div>
                                                    <div class="name-rating-time">
                                                        <div class="name-rating">
                                                            <div>
                                                                <h4> 2019 - 2020 Annual report </h4>
                                                            </div>
                                                        </div>
                                                        <div class="time">
                                                            <span>1 month ago</span>
                                                        </div>
                                                    </div>
                                                    <div class="name-rating-time">
                                                        <div class="name-rating">
                                                            <div>
                                                                <h4> 2019 - 2020 Annual report </h4>
                                                            </div>
                                                        </div>
                                                        <div class="time">
                                                            <span>1 month ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                    <h3> IT Filing </h3>

                                    <div class="row">
                                        <div class="col col-xs-12">
                                            <div class="client-rv">
                                                <div class="client-pic">
                                                    <i class="fi flaticon-pdf"></i>
                                                </div>
                                                <div class="details">
                                                    <div class="name-rating-time">
                                                        <div class="name-rating">
                                                            <div>
                                                                <h4> 2019 - 2020 Annual report </h4>
                                                            </div>
                                                        </div>
                                                        <div class="time">
                                                            <span>1 month ago</span>
                                                        </div>
                                                    </div>
                                                    <div class="name-rating-time">
                                                        <div class="name-rating">
                                                            <div>
                                                                <h4> 2019 - 2020 Annual report </h4>
                                                            </div>
                                                        </div>
                                                        <div class="time">
                                                            <span>1 month ago</span>
                                                        </div>
                                                    </div>
                                                    <div class="name-rating-time">
                                                        <div class="name-rating">
                                                            <div>
                                                                <h4> 2019 - 2020 Annual report </h4>
                                                            </div>
                                                        </div>
                                                        <div class="time">
                                                            <span>1 month ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>





                                </div>
                                <div class="col col-md-3">
                                    <div class="event-info">
                                        <h3> Registration </h3>
                                        <ul>
                                            <li>
                                                <i class="fi flaticon-guarantee"></i>
                                                <h5> Registration No </h5>
                                                <p> { this.ngo.legal.regNo } </p>
                                            </li>
                                            <li>
                                                <i class="fi flaticon-guarantee"></i>
                                                <h5> Pan No. </h5>
                                                <p> { this.ngo.legal.panNo } </p>
                                            </li>

                                            { /*
                                            <li>
                                                <i class="fi flaticon-down-arrow-3"></i>
                                                <h5> 12A </h5>
                                                <p> { this.ngo.legal.legal12a } </p>
                                            </li>
                                            <li>
                                                <i class="fi flaticon-like"></i>
                                                <h5> 80G </h5>
                                                <p> { this.ngo.legal.legal80g } </p>
                                            </li>
                                            <li>
                                                <i class="fi flaticon-envelope"></i>
                                                <h5>Contact</h5>
                                                <p>example@demo.com</p>
                                            </li>
                                               */ }
                                        </ul>
                                    </div>
                                </div>  
                            </div>

                        </div>
                    </div>
                </div> { /** end container */ }
            </section>
            { /** end event-single-section */ }


            <proffer-footer ngo={this.ngo}></proffer-footer>
        </div>


        );
    }

}
