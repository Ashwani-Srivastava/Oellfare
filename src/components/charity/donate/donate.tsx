import { Build, Component,
         h, Prop, State     }   from    '@stencil/core';
import { modalController    }   from    "@ionic/core";

import { filter, takeWhile  }   from    'rxjs/operators';

import { AuthService        }   from    'auth/auth.service';
import { DialogService      }   from    'common/dialog.service';
import { EnvironmentService }   from    'common/environment.service';
//import { Fundraiser         }   from    'fundraiser/fundraiser.model';
//import { FundraiserService  }   from    'fundraiser/fundraiser.service';
import { Logger             }   from    'common/logger';
import { PaymentState       }   from    'payment/payment.model';
import { PaymentService     }   from    'payment/payment.service';
import { Volunteer          }   from    'volunteer/volunteer.model';
import { UtilityService     }   from    'common/utility.service';


import * as ngo                 from    'assets/ngo.json';
import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'charity-donate',
    styleUrl                    :   'donate.css',
})
export class CharityDonate {

    @Prop() ngo                 :   any                 =   ngo;
    @Prop() fund                :   any                 =   fund;
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
                .then(resp => console.log('razorpay lib ready'))
                .catch(_err => console.log);
        }

    }

    async componentDidLoad() {
        console.log('Donate :: Component did load');
    }

    private async initialize() {
        Logger.info('Donate :: Initialize :: ');

        DialogService.presentDefaultLoader();

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

        <div id="fh5co-wrapper">
            <div id="fh5co-page">
 
                <charity-header ngo={this.ngo}></charity-header>

                <div class="fh5co-hero">
                    <div class="fh5co-overlay"></div>
                    <div class="fh5co-cover text-center">
                        <img src='/assets/charity/images/thank-010x1024.jpg' class='cover-image' />
                        <div class="desc animate-box">
                            <h2><strong>Donate</strong> for Impact</h2>
                        </div>
                    </div>

                </div>
                
                <div id="fh5co-contact" class="animate-box">
                    <div class="container">
                        <form action="#">
                            <div class="row">
                                <div class="col-md-6">
                                    <img src="/assets/images/donate-001x600.jpg" style={{ 'width': '100%' }} />
                                    <br/>
                                    <br/>
                                    <br/>
                                    <h3 class="section-title">Why Giving?</h3>

                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="feature-text">
                                                    <h3> 1. You can reap social, physical, mental, and spiritual benefits. </h3>
                                                    <p> By giving your time to a charity, you get the opportunity to build your social circles by working with like-minded people. </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="feature-text">
                                                    <h3> 2. Giving promotes feelings of happiness. </h3>
                                                    <p> Helping others feels good. When you donate to a charity that is important to you, you not only help them continue their vital work, you’re also improving your emotional wellbeing, a win-win situation! </p>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="feature-text">
                                                    <h3> 3. Giving to Charity strengthens personal values. </h3>
                                                    <p> Having the power to improve the lives of others is, to many people, a privilege, and one that comes with its own sense of obligation.  </p>
                                                </div>
                                            </div>
                                        </div>

                                </div>
                                <div class="col-md-6">
                                    <div class="row">

                                        { !this.isLoggedIn ?
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="button" onClick={() => this.openAuthDrawer()} value="Login with Grassroots" class="btn btn-primary" style={{ 'width': '100%' }} />
                                            </div>
                                        </div> : null }

                                        <div class="col-md-12">
                                            <h3 class="section-title">Donation Details</h3>
                                        </div>
                
                                        { this.isLoggedIn ?
                                        <div class="col-md-12">
                                            <h5> Not { this.me?.name }? <a href='#' onClick={() => AuthService.logout() }>Log out</a> </h5>
                                        </div> : null }

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <select class='form-control' disabled={ !this.isLoggedIn } >
                                                    <option> General Donation </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="number" 
                                                    onInput={ (e) => this.handleCommonInput(e, 'donationAmount') } 
                                                    min={100}
                                                    class="form-control" 
                                                    placeholder="Amount"
                                                    disabled={ !this.isLoggedIn } />
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" 
                                                    onInput={ (e) => this.handleCommonInput(e, 'referredBy') } 
                                                    class="form-control" 
                                                    placeholder="Referred by"
                                                    disabled={ !this.isLoggedIn } />
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-group form-control">
                                                <input type="checkbox" 
                                                    onInput={ (e) => this.handleCommonInput(e, 'isAnonymous') }
                                                    style={{ 'width': '18px', 'height': '18px' }} 
                                                    id="anonymous" name="anonymous" value="yes"
                                                    disabled={ !this.isLoggedIn } />
                                                <span style={{ 'padding-left': '16px' }} > Make Anonymous </span>
                                            </div>
                                        </div>


                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea class="form-control" 
                                                    onInput={ (e) => this.handleCommonInput(e, 'whyDonate') } 
                                                    cols={30} rows={7} 
                                                    placeholder="Why am I donating?"
                                                    disabled={ !this.isLoggedIn } ></textarea>
                                            </div>
                                        </div>

                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="button" 
                                                    onClick={() => this.makeDonation()}
                                                    value="Donate" 
                                                    class="btn btn-primary" 
                                                    style={{ 'width': '100%' }}
                                                    disabled={ !this.isLoggedIn } />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div id="fh5co-blog-section" class="fh5co-section-gray">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                                <h3> Our Donations </h3>
                                <p> We meant it, when we say we take 'Transparency and Trust' close to the Heart. </p>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row row-bottom-padded-md">

                            <div class='col-md-8 col-md-offset-2'>
                                <table style={{ 'width': '100%' }}>
                                    <tr>
                                        <th> Receipt # </th>
                                        <th> Donor Name </th>
                                        <th> Date </th>
                                        <th> Amount </th>
                                        <th> Towards </th>
                                    </tr>
                                {this.ngo.media.slice(0, 3).map(_m => (
                                    <tr>
                                        <td> ON-10002 </td>
                                        <td> Subash </td>
                                        <td> Jan 25, 2017 </td>
                                        <td> Rs. 1000 </td>
                                        <td> General Donation </td>
                                    </tr>
                                )) }
                                </table>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4 col-md-offset-4 text-center animate-box">
                                <a class="btn btn-primary btn-lg"> Load more </a>
                            </div>
                        </div>

                    </div>
                </div>

                <charity-footer ngo={this.ngo}></charity-footer>
            </div>
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
