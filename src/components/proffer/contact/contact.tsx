import { Component, h, Prop }   from    '@stencil/core';

import { ProfferBase        }   from    'proffer/base/base'
import { DialogService      }   from    'common/dialog.service';
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag: 'proffer-contact',
    styleUrl: 'contact.css',
})
export class ProfferContact {

    @Prop() ngo                 :   any                 =   ngo

    private formValue           :   any                 =   {
        name                    :   '',
        query                   :   ''
    };

    constructor () {
        console.log('Contact :: Constructor');
    }

    async componentWillLoad() {
        console.log('Contact :: Component will load');
    }

    async componentDidLoad() {
        console.log('Contact :: Component did load');

        ProfferBase.setupEssentials();
    }

    private handleCommonInput(e, fieldName: string): void {
        this.formValue[fieldName]=  e.target.value;
    }

    private async sendMessage() {
        debugger;

        const name              =   this.formValue.name;
        const query             =   this.formValue.query;

        if (name.length < 2) {
            await DialogService.presentAlert('Error', 'Please enter your name');
            return;
        }

        if (query.length < 10) {
            await DialogService.presentAlert('Error', 'Your query should be atleast 10 characters in length');
            return;
        }

        window.location.href    =   `https://wa.me/${this.ngo.reachOut.phone1}?text=Hi. I am ${name}. ${query}`;

    }

    render() {

        return (
        <div class="page-wrapper">

                <proffer-header ngo={this.ngo}></proffer-header>

                { /** start page-title */ }
                <section class="page-title" style={{ 'background': 'url(/assets/images/contact-001x1024.jpg) center center/cover no-repeat local', 'background-color': 'rgba(0, 0, 0, 0.5)'}}>
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
                                        <h3>Fill out the form to reach us through Whatsapp!</h3>
                                    </div>
                                </div>
                                <div class="col col-md-8">
                                    <div class="contact-form">
                                        <form class="contact-validation-active">
                                            <div class='fullwidth'>
                                                <input type="text" 
                                                    class="form-control" 
                                                    name="name" 
                                                    id="name" 
                                                    onInput={ (e) => this.handleCommonInput(e, 'name') } 
                                                    placeholder="Name*" />
                                            </div>

                                            <div class="fullwidth">
                                                <textarea class="form-control" 
                                                    name="note"  
                                                    id="note" 
                                                    onInput={ (e) => this.handleCommonInput(e, 'query') } 
                                                    placeholder="Your query...">
                                                </textarea>
                                            </div>

                                        </form>

                                            <div>
                                                <button 
                                                    onClick={() => this.sendMessage()}
                                                    class="theme-btn-s6">
                                                    <i class="fi flaticon-like"></i>
                                                    Connect through Whatsapp
                                                </button>
                                            </div>
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15546.278682013113!2d80.2276578!3d13.0630411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10fa5ee3a9fe959d!2sUravugal%20Trust!5e0!3m2!1sen!2sin!4v1612789479917!5m2!1sen!2sin" ></iframe>
                    </div>
                </section>
                { /** end contact-map */ }

                <proffer-footer ngo={this.ngo}></proffer-footer>

                { HelmetService.render(this.ngo, 'Contact') }

            </div>
        );

    }

}
