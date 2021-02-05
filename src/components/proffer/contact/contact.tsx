import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag: 'proffer-contact',
    styleUrl: 'contact.css',
})
export class ProfferContact {

    @Prop() ngo                 :   any                 =   ngo

    constructor () {
        console.log('Contact :: Constructor');
    }

    async componentWillLoad() {
        console.log('Contact :: Component will load');
    }

    async componentDidLoad() {
        console.log('Contact :: Component did load');
    }

    render() {

        return (
        <div class="page-wrapper">

                <proffer-header ngo={this.ngo}></proffer-header>

                { /** start page-title */ }
                <section class="page-title">
                    <div class="page-title-container">
                        <div class="page-title-wrapper">
                            <div class="container">
                                <div class="row">
                                    <div class="col col-xs-12">
                                        <h2>Contact us</h2>
                                        <ol class="breadcrumb">
                                            <li><a href="index.html">Home</a></li>
                                            <li>Contact us</li>
                                        </ol>
                                    </div>
                                </div> { /** end row */ }
                            </div> { /** end container */ }
                        </div>
                    </div>
                </section>
                { /** end page-title */ }


                { /** start contact-section */ }
                <section class="contact-section section-padding">
                    <div class="container">
                        <div class="row">
                            <div class="col col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
                                <div class="section-title-s3">
                                    <span>#Contact with us</span>
                                    <h2>Lets get in touch!</h2>
                                </div>
                            </div>
                            <div class="col col-xs-12">
                                <div class="contact-info-grids">
                                    <div class="grid">
                                        <i class="fi flaticon-house"></i>
                                        <h4>Head Office</h4>
                                        <p> Chennai, India. <br/> <br/> </p>
                                    </div>
                                    <div class="grid">
                                        <i class="fi flaticon-email"></i>
                                        <h4>Email Address</h4>
                                        <p> { this.ngo.reachOut.email } <br/> <br/> </p>
                                    </div>
                                    <div class="grid">
                                        <i class="fi flaticon-call"></i>
                                        <h4>Phone Number</h4>
                                        <p> { this.ngo.reachOut.phone1 } <br/> { this.ngo.reachOut.phone2 } </p>
                                    </div>
                                    <div class="grid">
                                        <i class="fi flaticon-alarm"></i>
                                        <h4>Opening Hours</h4>
                                        <p>Mon day - Sun day  <br/>10Am - 6PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="contact-form-area">
                            <div class="row">
                                <div class="col col-md-4">
                                    <div class="contact-text">
                                        <h3>Still have query, then fill out the form!</h3>
                                    </div>
                                </div>
                                <div class="col col-md-8">
                                    <div class="contact-form">
                                        <form method="post" class="contact-validation-active" id="contact-form-main">
                                            <div>
                                                <input type="text" class="form-control" name="name" id="name" placeholder="Name*" />
                                            </div>
                                            <div>
                                                <input type="email" class="form-control" name="email" id="email" placeholder="Email*" />
                                            </div>
                                            <div>
                                                <input type="text" class="form-control" name="phone" id="phone" placeholder="Phone*" />
                                            </div>
                                            <div>
                                                <select name="subject" class="form-control">
                                                    <option disabled={false} selected>Contact subject</option>
                                                    <option>Subject 1</option>
                                                    <option>Subject 2</option>
                                                    <option>Subject 3</option>
                                                </select>
                                            </div>
                                            <div class="fullwidth">
                                                <textarea class="form-control" name="note"  id="note" placeholder="Case Description..."></textarea>
                                            </div>
                                            <div class="submit-area">
                                                <button type="submit" class="theme-btn-s6"><i class="fi flaticon-like"></i> Submit It Now</button>
                                                <div id="loader">
                                                    <i class="ti-reload"></i>
                                                </div>
                                            </div>
                                            <div class="clearfix error-handling-messages">
                                                <div id="success">Thank you</div>
                                                <div id="error"> Error occurred while sending email. Please try again later. </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> { /** end container */ }
                </section>
                { /** end contact-section */ }


                { /**  start contact-map */ }
                <section class="contact-map-section">
                    <h2 class="hidden">Contact map</h2>
                    <div class="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.11976314309273!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbd!4v1547528325671"></iframe>
                    </div>
                </section>
                { /** end contact-map */ }

                <proffer-footer ngo={this.ngo}></proffer-footer>

            </div>
        );

    }

}
