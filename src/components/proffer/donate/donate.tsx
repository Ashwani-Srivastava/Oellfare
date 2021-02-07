import { Build, Component,
         h, Prop, State     }   from    '@stencil/core';
import { modalController    }   from    "@ionic/core";

import { filter, takeWhile  }   from    'rxjs/operators';

import { AuthService        }   from    'auth/auth.service';
import { DialogService      }   from    'common/dialog.service';
import { EnvironmentService }   from    'common/environment.service';
import { HelmetService      }   from    'common/helmet.service';
import { Fundraiser         }   from    'fundraiser/fundraiser.model';
//import { FundraiserService  }   from    'fundraiser/fundraiser.service';
import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
import { NgoService         }   from    'ngo/ngo.service';
import { PaymentState       }   from    'payment/payment.model';
import { PaymentService     }   from    'payment/payment.service';
import { Volunteer          }   from    'volunteer/volunteer.model';
import { UtilityService     }   from    'common/utility.service';

import * as ngo                 from    'assets/ngo.json';
import * as fund                from    'assets/fund.json';

declare var $:any;

@Component({
    tag                         :   'proffer-donate',
    styleUrl                    :   'donate.css',
})
export class ProfferDonate {

    @Prop() ngo                 :   any                 =   new Ngo(ngo);
    @Prop() fund                :   any                 =   new Fundraiser(fund);
    @State() me                 :   Volunteer           =   null;

    /**
     * True when Gmail session is present and Mobile number is OTP verified
     */
    @State() isLoggedIn         :   boolean             =   false;

    private alive               :   boolean             =   true;
    private donationAmount      :   number              =   0
    private whyDonate           :   string              =   '';
    private referredBy          :   string              =   '';
    private isAnonymous         :   boolean             =   false

    constructor () {
        console.log('Donate :: Constructor');
    }

    async componentWillLoad() {
        console.log('Donate :: Component will load');

        if (Build.isBrowser) {

            if (location.hash === '#login') {
                this.openAuthDrawer();
            }

            AuthService.state$.pipe(filter(s => s.length > 0)).subscribe(_s => {
                this.initialize();
            });

            //https://checkout.razorpay.com/v1/checkout.js
            UtilityService.loadScript('/assets/lib/checkout.min.js')
                .then(_resp => console.log('razorpay lib ready'))
                .catch(_err => console.log);
        }

    }

    async componentDidLoad() {
        console.log('Donate :: Component did load');

        var navbar = $(".navigation-holder").last();
        var openBtn = $(".navbar-header .open-btn").last();
        var closeBtn = $(".navigation-holder .close-navbar").last();
        var body = $(".page-wrapper").last();

        console.log(navbar);

        openBtn.on("click", function() {
            if (!navbar.hasClass("slideInn")) {
                navbar.addClass("slideInn");
                body.addClass("body-overlay");
            }
            return false;
        })

        closeBtn.on("click", function() {
            if (navbar.hasClass("slideInn")) {
                navbar.removeClass("slideInn");
            }
            body.removeClass("body-overlay");
            return false;
        })


        if ($(".progress-bar").length) {
            var $progress_bar = $('.progress-bar');
            $progress_bar.appear();
            $(document.body).on('appear', '.progress-bar', function() {
                var current_item = $(this);
                if (!current_item.hasClass('appeared')) {
                    var percent = current_item.data('percent');
                    current_item.css('width', percent + '%').addClass('appeared').append('<span>' + percent + '%' + '</span>');
                }
                
            });
        };
    }

    private async initialize() {
        Logger.info('Donate :: Initialize :: ');

        DialogService.presentDefaultLoader();

        /*
        NgoService
            .fetchNgo(this.ngo.id)
            .pipe(takeWhile(_p => this.alive))
            .subscribe(n => this.ngo = n);
         */

        AuthService.vol$.pipe(takeWhile(_f => this.alive)).subscribe(vol => {

            DialogService.dismissDefaultLoader();
            Logger.info('Donate :: Component will load :: vol$', vol);
            this.me             =   vol;
            this.isLoggedIn     =   AuthService.me && AuthService.me.id.length > 0 && AuthService.me.phone.length > 0;

        }, error => {
            DialogService.dismissDefaultLoader();
            DialogService.presentAlert('Auth Error', JSON.stringify(error));
        }); 
    }

    private async makeDonation(): Promise<any> {
        console.log('makeDonation', this.donationAmount, this.referredBy, this.isAnonymous, this.whyDonate);

        await DialogService.presentDefaultLoader();
        const pay               =   await PaymentService.initiateDonation(this.fund, this.ngo, AuthService.me, this.donationAmount, this.referredBy, this.isAnonymous, this.whyDonate);

        if (pay && pay.status === PaymentState.RzPending) {
            PaymentService.showRazorpay(pay)
                .then(success => {
                    DialogService.presentAlert('Thanks', `Hey ${AuthService.me.name}, Thanks for being a Hero and supporting this cause. You will receive the receipt in mail shortly.`);
                    Logger.log('Showrazorpay success', success);
                }).catch(err => {
                    Logger.error('Showrazorpay error', err);
                    DialogService.presentAlert('Error', 'Reach out to 6385051777 for support. ' + JSON.stringify(err) );
                });
        } else {
            DialogService.presentAlert('Error', `${pay ? pay.gateway.failureReason : 'Network error. Please retry'}. Reach out to 6385051777 for support. `);
        }

        DialogService.dismissDefaultLoader();

        //await DialogService.presentToast('Donated');
    }


    private async openAuthDrawer() {
        console.log('show auth popup', EnvironmentService.config.firebase);

        location.hash           =   "login";

        const modal             :   HTMLIonModalElement =   await modalController.create({
            component           :   'auth-drawer',
            cssClass            :   'auth-modal',
            swipeToClose        :   false,
            mode                :   'ios'
        })
        modal.present();

    }

    private handleCommonInput(e, fieldName: string): void {
        console.log(e.target.value, fieldName);
        if (fieldName === 'donationAmount') {
            this.donationAmount =   parseInt(e.target.value);
        } else if (fieldName === 'isAnonymous') {
            this.isAnonymous    =   !this.isAnonymous;
        } else {
            this[fieldName]     =   e.target.value;
        }
    }


    render() {

        return (

        <div class="page-wrapper">

            <proffer-header ngo={this.ngo}></proffer-header>

            { /** start page-title  */ }
            <section class="page-title" style={{ 'background': 'url(/assets/charity/images/thank-010x1024.jpg) center center/cover no-repeat local', 'background-color': 'rgba(0, 0, 0, 0.5)'}}>
                <div class="page-title-container">
                    <div class="page-title-wrapper">
                        <div class="container">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <h2> Donate </h2>
                                    <ol class="breadcrumb">
                                        <li> <a> <ion-router-link href='/' color='light'> Home </ion-router-link> </a> </li>
                                        <li> Donate </li>
                                    </ol>
                                </div>
                            </div> { /** end row  */ }
                        </div> { /** end container  */ }
                    </div>
                </div>
            </section>
            { /** end page-title  */ }





        { /** start case-single-section  */ }
        <section class="case-single-section">
            <div class="container">
                <div class="row donate-area-bottom">
                    <div class="col col-md-8">
                        <div class="donate-area-wrapper">

                            { !this.isLoggedIn ?
                            <input type="button" 
                                class="give-submit give-btn" 
                                id="give-purchase-button" 
                                name="give-purchase" 
                                onClick={() => this.openAuthDrawer()} 
                                style={{ 'width': '100%' }} 
                                value="Login with Grassroots" /> : null }

                            <form id="give-form-232-1" class="give-form give-form-232 give-form-type-multi" data-id="232-1" data-currency_symbol="&#36;" data-currency_code="USD" data-currency_position="before" data-thousands_separator="," data-decimal_separator="." data-number_decimals="2">

                                <div id="give_purchase_form_wrap">
                                    <fieldset id="give_checkout_user_info" class="">
                                        <legend> Donation details </legend>
 
                                        { this.isLoggedIn ?
                                        <div class="col-md-12">
                                            <h5> Not { this.me?.name }? <a href='#' onClick={() => AuthService.logout() }>Log out</a> </h5>
                                        </div> : null }


                                        <p id="give-email-wrap" class="form-row form-row-wide">

                                            <div class="give-donation-amount form-row-wide give-custom-amount-focus-in">
                                                <span class="give-currency-symbol give-currency-position-before">₹</span>   
                                                <label class="give-hidden" >Donation Amount:</label>
                                                <input class="give-text-input give-amount-top required"
                                                    id="give-amount"
                                                    name="give-amount"
                                                    type="number"
                                                    value="1000"
                                                    onInput={ (e) => this.handleCommonInput(e, 'donationAmount') } 
                                                    min={100}
                                                    autocomplete="off"
                                                    data-amount="1000"
                                                    required
                                                    disabled={ !this.isLoggedIn } />
                                            </div>

                                        </p>

                                        <p id="give-email-wrap" class="form-row form-row-wide">
                                            <label class="give-label" >
                                            Referred by
                                                <span class="give-required-indicator">*</span>
                                                <span class="give-tooltip hint--top hint--medium hint--bounce" aria-label="First Name is used to personalize your donation record.">
                                                    <i class="give-icon give-icon-question"></i>
                                                </span>            
                                            </label>
                                            <input class="give-input"
                                                type="text" 
                                                name="give_referred_by"
                                                placeholder="Referred by"
                                                id="give-referred-by"
                                                onInput={ (e) => this.handleCommonInput(e, 'referredBy') } 
                                                value="" aria-required="true"
                                                disabled={ !this.isLoggedIn } />
                                        </p>

                                        <p id="give-anonymous-donation-wrap" class="form-row form-row-wide">
                                            <label class="give-label" >
                                                <input type="checkbox" 
                                                    class="give-input" 
                                                    name="give_anonymous_donation" 
                                                    id="give-anonymous-donation" 
                                                    onInput={ (e) => this.handleCommonInput(e, 'isAnonymous') }
                                                    value="1"
                                                    disabled={ !this.isLoggedIn } />
                                                    Make this an anonymous donation.                    
                                                <span class="give-tooltip hint--top hint--medium hint--bounce" aria-label="First Name is used to personalize your donation record.">
                                                    <i class="give-icon give-icon-question"></i>
                                                </span>
                                            </label>
                                        </p>

                                        <p id="give-comment-wrap" class="form-row form-row-wide">
                                            <label class="give-label" >
                                            Why am I donating?                                     
                                                <span class="give-tooltip hint--top hint--medium hint--bounce" aria-label="First Name is used to personalize your donation record.">
                                                    <i class="give-icon give-icon-question"></i>
                                                </span>             
                                            </label>

                                            <textarea class="give-input" 
                                                name="give_comment" 
                                                placeholder="Why am I donating?" 
                                                onInput={ (e) => this.handleCommonInput(e, 'whyDonate') } 
                                                cols={30} rows={7} 
                                                id="give-comment"
                                                disabled={ !this.isLoggedIn } >
                                            </textarea>
                                        </p>
                                    </fieldset>

                                    <fieldset id="give_purchase_submit" class="give-donation-submit">
                                        <div class="give-submit-button-wrap give-clearfix">
                                            <input type="button" 
                                                onClick={() => this.makeDonation()}
                                                style={{ 'width': '100%' }}
                                                class="give-submit give-btn" 
                                                id="give-purchase-button" 
                                                name="give-purchase" 
                                                value="Donate Now" 
                                                data-before-validation-label="Donate Now"
                                                disabled={ !this.isLoggedIn } />
                                            <span class="give-loading-animation"></span>
                                        </div>
                                    </fieldset>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col col-md-4">
                        <div class="case-single-sidebar">
                            <div class="widget contact-widget">
                                <div>
                                    <p> Our phone number: </p>
                                    <h4> { this.ngo.reachOut.phone1 } </h4>
                                </div>
                                <div>
                                    <p>Our email address:</p>
                                    <h4> { this.ngo.reachOut.email } </h4>
                                </div>
                            </div>

                            { /*
                            <div class="widget urgent-case-widget">
                                <div class="cases">
                                    <div class="case">
                                        <div class="img-holder">
                                            <img src="/assets/proffer/images/case-single/case-widget/img-1.jpg" alt="" />
                                        </div>
                                        <div class="details">
                                            <h4><a href="#">For your insurance business, employees, or clients</a></h4>
                                            <span class="g-r">Goal: $9000 Raised: $5000</span>
                                        </div>
                                    </div>
                                    <div class="case">
                                        <div class="img-holder">
                                            <img src="/assets/proffer/images/case-single/case-widget/img-3.jpg" alt="" />
                                        </div>
                                        <div class="details">
                                            <h4><a href="#">Be prepared for life’s Once you’ve picked your vorite</a></h4>
                                            <span class="g-r">Goal: $9000 Raised: $5000</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                               */ }

                        </div>
                    </div>
                </div>
            </div> { /** end container  */ }
        </section>
        { /** end case-single-section  */ }






                

            <proffer-footer ngo={this.ngo}></proffer-footer>
        </div>

        );

    }

    connectedCallback() {
        //this.alive              =   true;
    }

    disconnectedCallback() {
        //this.alive              =   false;
    }

}
