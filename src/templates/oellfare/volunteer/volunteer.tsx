import { Build, Component,
         h, Prop, State     }   from    '@stencil/core';
import { modalController    }   from    "@ionic/core";

import { filter, takeWhile  }   from    'rxjs/operators';

import { OellfareBase          }   from    'oellfare/base/base'
import { AuthService        }   from    'auth/auth.service';
//import { ConfirmResponse,
import { DialogService      }   from    'common/dialog.service';
import { EnvironmentService }   from    'common/environment.service';
import { HelmetService      }   from    'common/helmet.service'
import { Logger             }   from    'common/logger';
import { Volunteer          }   from    'volunteer/volunteer.model';

import * as ngo                 from    'assets/ngo.json';

/**
 * 3 States:
 *  1. Not Logged in. Covers both
 *      * Not logged in with Gmail
 *      * Logged in with Gmail, but didn't verify Phone number
 *  2. Logged in - Did't signedup a Volunteer yet
 *  3. Logged in - And Signed up as Volunteer
 */
@Component({
    tag                         :   'oellfare-volunteer',
    styleUrl                    :   'volunteer.css',
})
export class OellfareVolunteer {

    @Prop() ngo                 :   any                 =   ngo;
    @State() me                 :   Volunteer           =   null;

    /**
     * True when Gmail session is present and Mobile number is OTP verified
     */
    @State() isLoggedIn         :   boolean             =   false;

    private alive               :   boolean             =   true;
    //private whyVolunteer        :   string              =   '';

    constructor () {
        console.log('Volunteer :: Constructor');
    }

    async componentWillLoad() {
        console.log('Volunteer :: Component will load');

        if (Build.isBrowser) {

            if (location.hash === '#login') {
                this.openAuthDrawer();
            }

            AuthService.state$.pipe(filter(s => s.length > 0)).subscribe(_s => {
                this.initialize();
            });

        }

    }

    async componentDidLoad() {
        console.log('Volunteer :: Component did load');

        OellfareBase.setupEssentials();
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

    private async initialize() {
        Logger.info('Volunteer :: Initialize :: ');

        DialogService.presentDefaultLoader();

        AuthService.vol$.pipe(takeWhile(_f => this.alive)).subscribe(vol => {

            DialogService.dismissDefaultLoader();
            Logger.info('Volunteer :: Component will load :: vol$', vol);
            this.me             =   vol;
            this.isLoggedIn     =   AuthService.me && AuthService.me.id.length > 0 && AuthService.me.phone.length > 0;

        }, error => {
            DialogService.dismissDefaultLoader();
            DialogService.presentAlert('Auth Error', JSON.stringify(error));
        }); 
    }

    /*
    private handleCommonInput(e, fieldName: string): void {
        console.log(e.target.value, fieldName);
        this.whyVolunteer       =   e.target.value;
    }

    private async joinNgo(): Promise<any> {
        this.me.isJoined        =   true;
        this.me.whyVolunteer    =   this.whyVolunteer;
        this.me.updatedAt       =   new Date();

        await AuthService.saveProfile(this.me);
        await DialogService.presentToast('Joined');
    }

    private async unjoinNgo(): Promise<any> {

        const response          =   await DialogService.presentConfirmAlert('Unjoin', 'Are you sure want to unjoin?');

        if (response === ConfirmResponse.Success) {
            this.me.isJoined    =   false;
            this.me.whyVolunteer=   '';
            this.me.updatedAt   =   new Date();

            await AuthService.saveProfile(this.me);
            await DialogService.presentToast('Unjoined');
        }

    }
    */

    render() {

        return (

        <div class="page-wrapper">

                <oellfare-header ngo={this.ngo}></oellfare-header>


                <oellfare-footer ngo={this.ngo}></oellfare-footer>

                { HelmetService.render(this.ngo, 'Volunteer') }

            </div>
        );

    }

    connectedCallback() {
        this.alive              =   true;
    }

    disconnectedCallback() {
        this.alive              =   false;
    }

}
