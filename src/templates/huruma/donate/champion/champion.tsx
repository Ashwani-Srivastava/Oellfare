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
//import { FundraiserService  }   from    'fundraiser/fundraiser.service';
import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
import { NgoService         }   from    'ngo/ngo.service';
//import { PaymentState       }   from    'payment/payment.model';
//import { PaymentService     }   from    'payment/payment.service';
import { Volunteer          }   from    'volunteer/volunteer.model';
import { UtilityService     }   from    'common/utility.service';

import * as ngo                 from    'assets/ngo.json';
import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'huruma-champion',
    styleUrl                    :   'champion.css',
})
export class HurumaChampion {

    @Prop() ngo                 :   any                 =   new Ngo(ngo);
    @Prop() fund                :   Fundraiser          =   new Fundraiser(fund);
    @State() me                 :   Volunteer           =   null;

    /**
     * True when Gmail session is present and Mobile number is OTP verified
     */
    @State() isLoggedIn         :   boolean             =   false;

    private alive               :   boolean             =   true;
    //private donationAmount      :   number              =   1000;
    //private whyDonate           :   string              =   '';
    //private referredBy          :   string              =   '';
    //private isAnonymous         :   boolean             =   false;

    constructor () {
        console.log('Donate :: Champion :: Constructor');
    }

    async componentWillLoad() {
        console.log('Donate :: Champion :: Component will load');

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
        console.log('Donate :: Champion :: Component did load');

        HurumaBase.setupEssentials();
        HurumaBase.setupProgressBars();
    }

    private async initialize() {
        Logger.info('Donate :: Champion :: Initialize :: ');

        DialogService.presentDefaultLoader();

        NgoService
            .fetchNgo(this.ngo.id)
            .pipe(takeWhile(_p => this.alive))
            .subscribe(n => this.ngo = n);

        AuthService.vol$.pipe(takeWhile(_f => this.alive)).subscribe(vol => {

            DialogService.dismissDefaultLoader();
            Logger.info('Donate :: Champion :: Component will load :: vol$', vol);
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

    /*
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

    */

    render() {

        return (
            <div class="page-wrapper">

                { this.ngo.name === 'Thozhan' ?
                <huruma-header-trans ngo={this.ngo}></huruma-header-trans>
                : <huruma-header-trans-oscar ngo={this.ngo}></huruma-header-trans-oscar>
                }

                <huruma-title name='Champion' bg-image='/assets/images/team-008x1440.jpg'></huruma-title>

                <h1> Become a Champion </h1>,
                <h5> Monthly automated Donations - Coming soon </h5>,

                <huruma-footer ngo={this.ngo}></huruma-footer>,

                <span> { HelmetService.render(this.ngo, 'Champion') } </span>

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
