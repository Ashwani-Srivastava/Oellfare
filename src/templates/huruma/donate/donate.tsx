import { Build, Component,
         h, Prop, State     }   from    '@stencil/core';
import { modalController    }   from    "@ionic/core";

import { filter, takeWhile  }   from    'rxjs/operators';
//import * as marked        	    from    'marked';

import { HurumaBase         }   from    'huruma/base/base'
import { AuthService        }   from    'auth/auth.service';
import { DialogService      }   from    'common/dialog.service';
import { EnvironmentService }   from    'common/environment.service';
import { HelmetService      }   from    'common/helmet.service';
import { Fundraiser         }   from    'fundraiser/fundraiser.model';
// import { FundraiserService  }   from    'fundraiser/fundraiser.service';
import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
import { NgoService         }   from    'ngo/ngo.service';
import { PaymentState       }   from    'payment/payment.model';
import { PaymentService     }   from    'payment/payment.service';
import { Volunteer          }   from    'volunteer/volunteer.model';
import { UtilityService     }   from    'common/utility.service';

import * as ngo                 from    'assets/ngo.json';
import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'huruma-donate',
    styleUrl                    :   'donate.css',
})
export class HurumaDonate {

    @Prop() ngo                 :   any                 =   new Ngo(ngo);
    @Prop() fund                :   Fundraiser          =   new Fundraiser(fund);
    @State() me                 :   Volunteer           =   null;

    /**
     * True when Gmail session is present and Mobile number is OTP verified
     */
    @State() isLoggedIn         :   boolean             =   false;

    private alive               :   boolean             =   true;
    private donationAmount      :   number              =   1000;
    private whyDonate           :   string              =   '';
    private referredBy          :   string              =   '';
    private isAnonymous         :   boolean             =   false;

    constructor () {
        console.log('Donate :: Constructor');
    }

    async componentWillLoad() {
        console.log('Donate :: Component will load');

        if (Build.isBrowser) {

            if (location.hash === '#login') {
                this.openAuthDrawer();
            }

            AuthService.state$.pipe(
                takeWhile(_p => this.alive),
                filter(s => s.length > 0)
            ).subscribe(_s => {
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

        HurumaBase.setupEssentials();
        HurumaBase.setupProgressBars();
    }

    private async initialize() {
        Logger.info('Donate :: Initialize :: ');

        DialogService.presentDefaultLoader();

        NgoService
            .fetchNgo(this.ngo.id)
            .pipe(takeWhile(_p => this.alive))
            .subscribe(n => this.ngo = n);

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

    private async makeDonation(): Promise<any> {
        console.log('makeDonation', this.donationAmount, this.referredBy, this.isAnonymous, this.whyDonate);

        if (this.donationAmount < 100) {
            await DialogService.presentAlert('Error', 'Donation amount should be atleast Rs. 100');
            return;
        }

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

        return [
        <div class="page-wrapper">

            { this.ngo.name === 'Thozhan' ?
            <huruma-header-trans ngo={this.ngo}></huruma-header-trans>
            : <huruma-header-trans-oscar ngo={this.ngo}></huruma-header-trans-oscar>
            }

            <huruma-title name='Donate' bg-image='/assets/images/begin-002x960.jpg'></huruma-title>

            <section class="causes-details-area ptb-100">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8 col-md-12">
                            <div class="causes-details-desc">
                                
                                <div class="causes-details-payment">
                                    <div class="payment-method">
                                        <h3>Donation Details</h3>
                                    </div>

                                    <form class="contact-form">
                                        <div class="row">

                                            { !this.isLoggedIn ?
                                            <div class="col-lg-12 mb-3">
                                                <div onClick={() => this.openAuthDrawer()} class="causes-details-btn">
                                                    <a href="#" class="default-btn">
                                                        Login with Gmail
                                                        <span></span>
                                                    </a>
                                                </div>
                                            </div>: null }
                    
                                            { this.isLoggedIn ?
                                            <div class="col-md-12">
                                                <h5> Not { this.me?.name }? <a href='#' onClick={() => AuthService.logout() }>Log out</a> </h5>
                                            </div> : null }

                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <select class='form-control mb-4' disabled={ !this.isLoggedIn } >
                                                        <option> { this.fund.name } </option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <input type="number"
                                                        class="form-control" 
                                                        onInput={ (e) => this.handleCommonInput(e, 'donationAmount') } 
                                                        min={100}
                                                        name="name" 
                                                        placeholder="Donation Amount"
                                                        disabled={ !this.isLoggedIn } />
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <input type="text"
                                                        class="form-control" 
                                                        onInput={ (e) => this.handleCommonInput(e, 'referredBy') } 
                                                        placeholder="Referred by"
                                                        disabled={ !this.isLoggedIn } />
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <input type="checkbox" 
                                                        onInput={ (e) => this.handleCommonInput(e, 'isAnonymous') }
                                                        style={{ 'width': '18px', 'height': '18px' }} 
                                                        id="anonymous" name="anonymous" value="yes"
                                                        disabled={ !this.isLoggedIn } />
                                                    <span style={{ 'padding-left': '16px' }} > Make Anonymous </span>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="form-group">
                                                    <textarea class="form-control" 
                                                        style={{ 'height': '120px' }}
                                                        onInput={ (e) => this.handleCommonInput(e, 'whyDonate') } 
                                                        cols={30} rows={7} 
                                                        placeholder="Why am I donating?"
                                                        disabled={ !this.isLoggedIn } ></textarea>
                                                </div>
                                            </div>

                                            <div class="col-lg-12">
                                                <div class="causes-details-btn"
                                                    onClick={() => this.makeDonation()}
                                                    style={{ 'width': '100%' }} >

                                                    <a class="default-btn" style={{ 'cursor': 'pointer' }}>
                                                        Donate Now
                                                        <span></span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-4 col-md-12">
                            <aside class="widget-area" id="secondary">

                                { /**
                                <section class="widget widget_huruma_posts_thumb">
                                    <h3 class="widget-title"> Recent Donors </h3>

                                    <article class="item">
                                        <a href="#" class="thumb">
                                            <span class="fullimage cover bg1" role="img"></span>
                                        </a>
                                        <div class="info">
                                            <time dateTime="2019-06-30">June 30, 2020</time>
                                            <h4 class="title usmall">
                                                <a href="#"> Anbu </a>
                                                <p> Rs. 2000 </p>
                                            </h4>
                                        </div>

                                        <div class="clear"></div>
                                    </article>

                                    <article class="item">
                                        <a href="#" class="thumb">
                                            <span class="fullimage cover bg2" role="img"></span>
                                        </a>
                                        <div class="info">
                                            <time dateTime="2019-06-30">June 30, 2020</time>
                                            <h4 class="title usmall">
                                                <a href="#"> Shiva </a>
                                                <p> Rs. 5000 </p>
                                            </h4>
                                        </div>

                                        <div class="clear"></div>
                                    </article>

                                </section>
                                */ }

                                

                            </aside>
                        </div>
                    </div>
                </div>
            </section>


            <huruma-footer ngo={this.ngo}></huruma-footer>

            <span> { HelmetService.render(this.ngo, 'Donate') } </span>

        </div>
        

        ];

    }

    connectedCallback() {
        //this.alive              =   true;
    }

    disconnectedCallback() {
        //this.alive              =   false;
    }

}
