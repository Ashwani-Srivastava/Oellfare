import { Component, h, Prop }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { DialogService      }   from    'common/dialog.service';
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';

@Component({
    tag: 'huruma-contact',
    styleUrl: 'contact.css',
})
 export class HurumaContact {

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

        HurumaBase.setupEssentials();

    }

    
    private handleCommonInput(e, fieldName: string): void {
        this.formValue[fieldName]=  e.target.value;
    }

    private async sendMessage() {
        debugger;

        const name              =   this.formValue.name;
        const query             =   this.formValue.query;

        console.log(1);

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

                { this.ngo.name === 'Thozhan' ?
                <huruma-header-trans ngo={this.ngo}></huruma-header-trans>
                : <huruma-header-trans-oscar ngo={this.ngo}></huruma-header-trans-oscar>
                }

                <huruma-title name='Contact ' bg-image='/assets/images/contact-001x1024.jpg'></huruma-title>

                <section class="contact-section ptb-100">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="contact-info-address">
                                    <h3>Quick Contact </h3>

                                    <div class="info-contact">
                                        <i class="flaticon-pin"></i>
                                        <h3>Location</h3>
                                        <span>{this.ngo.address}</span>
                                    </div>

                                    <div class="info-contact">
                                        <i class="flaticon-call"></i>
                                        <h3>Call Us</h3>
                                        <span><a href="tel:+882-569-756">{this.ngo.reachOut.phone1}</a></span>
                                    </div>

                                    <div class="info-contact">
                                        <i class="flaticon-email"></i>
                                        <h3>Email Us</h3>
                                        <span>
                                            <a href="mailto:hello@plamb.com">
                                                {this.ngo.reachOut.email}
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-8">
                                <div class="contact-area">
                                    <div class="contact-content">
                                        <h2>Let’s talk!</h2>
                                        <h5>Fill out the form to reach us through Whatsapp!</h5>
                                    </div>

                                    <div class="contact-form">
                                        <form id="contactForm">
                                            <div class="row">
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                        <input 
                                                        type="text" 
                                                        name="name" 
                                                        id="name" 
                                                        class="form-control" 
                                                        required data-error="Please enter your name" 
                                                        onInput={ (e) => this.handleCommonInput(e, 'name')}
                                                        placeholder="Name"/>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>
                
                                                <div class="col-lg-12 col-md-12">
                                                    <div class="form-group">
                                                        <textarea 
                                                        name="message" 
                                                        class="form-control" 
                                                        id="message" 
                                                        required data-error="Write your query" 
                                                        onInput={ (e) => this.handleCommonInput(e, 'query')}
                                                        placeholder="Your Query"></textarea>
                                                        <div class="help-block with-errors"></div>
                                                    </div>
                                                </div>

                                                <div class="col-lg-12">
                                                    <div class="send-btn">
                                                        <button 
                                                            onClick={() => this.sendMessage()}
                                                            type="submit" 
                                                            class="default-btn">
                                                            Contact us
                                                            <i class="flaticon-right"></i>
                                                            <span></span>
                                                        </button>
                                                    </div>
                                                    <div id="msgSubmit" class="h3 text-center hidden"></div>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //  <!-- End Contact Area -->

                // <!-- Start Map Area -->  */}
                <div class="map-section">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13654.642347280882!2d77.71064429124829!3d8.693259307851733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b041245d28d3ad5%3A0x142cb300453d8888!2s1st%20St%2C%20Tirunelveli%2C%20Tamil%20Nadu%20627005!5e0!3m2!1sen!2sin!4v1614827230047!5m2!1sen!2sin"></iframe>
                </div>
                {/* //  <!-- End Map Area -->  */}

                <huruma-footer ngo={this.ngo}></huruma-footer>,

                <span> { HelmetService.render(this.ngo, 'Contact') } </span>
            </div>

        );

    }

}
