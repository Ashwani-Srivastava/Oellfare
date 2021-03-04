import { Build, Component,
         h, Prop, State     }   from    '@stencil/core';
import { modalController    }   from    "@ionic/core";

import { filter, takeWhile  }   from    'rxjs/operators';

import { HurumaBase         }   from    'huruma/base/base'
import { AuthService        }   from    'auth/auth.service';
import { ConfirmResponse, 
         DialogService      }   from    'common/dialog.service';
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
    tag                         :   'huruma-volunteer',
    styleUrl                    :   'volunteer.css',
})
export class HurumaVolunteer {

    @Prop() ngo                 :   any                 =   ngo;
    @State() me                 :   Volunteer           =   null;

    /**
     * True when Gmail session is present and Mobile number is OTP verified
     */
    @State() isLoggedIn         :   boolean             =   false;

    private alive               :   boolean             =   true;
    private whyVolunteer        :   string              =   '';

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

        HurumaBase.setupEssentials();
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
    

    render() {

        return [
            <div class="page-wrapper">

                { this.ngo.name === 'Thozhan' ?
                <huruma-header-trans ngo={this.ngo}></huruma-header-trans>
                : <huruma-header-trans-oscar ngo={this.ngo}></huruma-header-trans-oscar>
                }

                <huruma-title name='Volunteer' bg-image='/assets/images/team-008x1440.jpg'></huruma-title>

                <section class="cta-s1-section" style={{ 'margin-top': '32px' , 'margin-bottom': '32px' }}>
                    <div class="container">
                        <div class="row">
                            <div class="col col-lg-5 col-md-5">
                                <div class="img-holder">
                                    <img src="/assets/images/help-001x640.jpg" />
                                </div>
                            </div>
                            <div class="col col-lg-6 col-lg-offset-1 col-md-10 col-md-offset-1">


                                <section class="contact-section section-padding" style={{ 'padding-top': '40px' }} >

                                    <div class="contact-area" style={{ 'margin-top': '0px' }} >
                                        <div class="contact-form">

                                        { !this.isLoggedIn ?
                                        <div class="send-btn" style={{ 'width': '100%' }}>
                                            <button type="button" onClick={() => this.openAuthDrawer()} value="Login with Grassroots" class="default-btn" style={{ 'width': '100%' }} > Login with Grassroots </button>
                                        </div> : null }

                                        <div style={{ 'width': '100%' , 'margin-top':'20px', 'margin-bottom': '20px' }}>
                                            <h2> Volunteer Details </h2>
                                        </div>

                                        { this.isLoggedIn && this.me?.isJoined === false ?
                                        <div style={{ 'width': '100%' }}>
                                            <h5> Not { this.me?.name }? <a href='#' onClick={() => AuthService.logout() }>Log out</a> </h5>
                                        </div> : null }


            { !this.me?.isJoined ? <span>
                <form method="post" class="contact-validation-active" id="contact-form-main">
                    <div class="form-group">
                        <input type="text" class="form-control" name="name" id="name" placeholder="Name*" disabled={ !this.isLoggedIn } value={ this.me?.name } />
                    </div>

                    <div class="form-group">
                        <input type="email" class="form-control" name="email" id="email" placeholder="Email*" disabled={ !this.isLoggedIn } value={ this.me?.email } />
                    </div>

                    <div class="fullwidth form-group">
                        <textarea class="form-control" 
                            name="note"  id="note" 
                            onInput={ (e) => this.handleCommonInput(e, 'whyVolunteer') } 
                            cols={30} rows={7} 
                            placeholder="Why I am joining?" 
                            disabled={ !this.isLoggedIn } ></textarea>
                    </div>

                </form> 
                <div class="send-btn">

                    <button type="submit" 
                        onClick={() => this.joinNgo()}
                        value="Join as a Volunteer"
                        class="default-btn"
                        style={{ 'width': '100%' }}
                        disabled={ !this.isLoggedIn } > <i class="fi flaticon-like"></i> Join as a Volunteer </button>

                </div> </span> : null }


                { this.me?.isJoined ?
                <div class="fullwidth">
                    <h5> Already Volunteering as { this.me?.name }. Would you like to <a href='#' onClick={() =>  this.unjoinNgo() }> Unjoin </a> </h5>
                </div>: null }

                { /* Show profile here (For Later) */ }





                                        </div>
                                    </div>
                                </section>


                            </div>
                        </div>
                    </div>
                </section>
                    {/* <br/><br/> */}
                <huruma-footer ngo={this.ngo}></huruma-footer>

                <span> { HelmetService.render(this.ngo, 'Volunteer') } </span>
            </div>
            
        ];

    }

    connectedCallback() {
        this.alive              =   true;
    }

    disconnectedCallback() {
        this.alive              =   false;
    }

}
