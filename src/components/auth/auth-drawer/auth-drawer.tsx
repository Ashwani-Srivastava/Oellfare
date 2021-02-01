import { Build, Component, 
         Element, h, 
         Listen, State      }   from    '@stencil/core';

import { filter, takeWhile  }   from    'rxjs/operators';

import { AuthService        }   from    'auth/auth.service';
import { DialogService      }   from    'common/dialog.service';
import { Logger             }   from    'common/logger';
import { UtilityService     }   from    'common/utility.service';
import { Volunteer          }   from    'volunteer/volunteer.model';

@Component({
    tag                         :   "auth-drawer",
    styleUrl                    :   "auth-drawer.css",
})
export class AuthDrawerComponent {

    @Element() el               :   HTMLElement;
    @State() mode               :   string              =   'login';
    @State() otpSent            :   boolean             =   false;
    @State() me                 :   Volunteer           =   null;
    @State() isLoggedIn         :   boolean             =   false;
    private alive               :   boolean             =   true;
    private recaptchaVerifier   :   any;

    @State() formValue          :   any                 =   {
        name                    :   '',
        email                   :   '',
        countryCode             :   '+91',
        phone                   :   '',
        otp                     :   ''
    };

    componentWillLoad() {
        Logger.info('AuthDrawer Page :: will load');

        if (Build.isBrowser) {

            AuthService.state$.pipe(filter(s => s.length > 0)).subscribe(_s => {
                DialogService.presentDefaultLoader();

                AuthService.vol$.pipe(takeWhile(_f => this.alive)).subscribe(vol => {
                    DialogService.dismissDefaultLoader();
                    Logger.info('AuthDrawer :: Component will load :: vol$', vol);
                    this.me     =   vol;
                    this.formValue.name = this.me.name;
                    this.formValue.email = this.me.email;
                    this.isLoggedIn=this.me && this.me.id.length > 0;

                    if (this.me.phone.length > 0) {
                        this.closeModal();
                    }
                }, error => {
                    DialogService.dismissDefaultLoader();
                    DialogService.presentAlert('Auth Error', JSON.stringify(error));
                }); 

            });

        }
    }

    async googleSignupTapped() {
        Logger.info('AuthDrawer Page :: Google signup tapped');

        await DialogService.presentDefaultLoader();

        try {
            const signupResponse=   await AuthService.initiateGoogleSignup();
            Logger.info('AuthDrawer Page :: Google signup tapped response', signupResponse);

        } catch (e) {
            Logger.error('AuthDrawer Page :: Google signup tapped error', e);
            if (e.code) {
                DialogService.presentAlert('Auth Error', e.code);
            } else {
                DialogService.presentAlert('Auth Error', e);
            }

            /*
            if (e.code === 'auth/invalid-verification-code') {
                DialogService.presentAlert('Auth Error', 'Invalid OTP. Please try again');
            } else if (e.code === 'auth/credential-already-in-use') {
                DialogService.presentAlert('Auth Error', 'Number already associated with some other account');
            } else if (e.code) {
                DialogService.presentAlert('Auth Error', e.code);
            } else {
                DialogService.presentAlert('Auth Error', e);
            }
             */
        }

        DialogService.dismissDefaultLoader();
    }

    async facebookSignupTapped() {
        Logger.info('AuthDrawer Page :: Facebook signup tapped');

        await DialogService.presentDefaultLoader();

        try {
            const signupResponse=   await AuthService.initiateFacebookSignup();
            Logger.info('AuthDrawer Page :: Facebook signup tapped response', signupResponse);

        } catch (e) {
            Logger.error('AuthDrawer Page :: Facebook signup tapped error', e);
            if (e.code) {
                DialogService.presentAlert('Auth Error', e.code);
            } else {
                DialogService.presentAlert('Auth Error', e);
            }
        }

        DialogService.dismissDefaultLoader();
    }

    async componentDidLoad() {
        UtilityService.showPage();
        history.pushState({modal: true}, null);
        this.recaptchaVerifier = AuthService.initializeRecaptcha();
    }

    connectedCallback() {
        Logger.info('AuthDrawer Page :: Connected callback');
        this.alive              =   true;
    }

    disconnectedCallback() {
        Logger.info('AuthDrawer Page :: Disconnected callback');
        this.alive              =   false;
    }

    changeMode = (mode) => {
        this.mode = mode;
    }
    
    async closeModal() {
        history.replaceState(null, null, ' '); // To remove the `#` in url
        await (this.el.closest('ion-modal') as HTMLIonModalElement).dismiss();
    }

    handleDrag = (_e) => {
    }

    @Listen('popstate', {target: 'window'})
        async handleHardwareBackButton(_e: PopStateEvent) {
        await this.closeModal();
    }

    private handleCommonInput(e, fieldName: string): void {
        this.formValue[fieldName]=  e.target.value;
    }


    private async sendOtp() {

        console.log(this.formValue);

        if (!this.validateForm()) return;

        DialogService.presentDefaultLoader();

        AuthService.confirmationResult = await AuthService.sendOTP(
            this.formValue.countryCode + this.formValue.phone,
            this.recaptchaVerifier
        );

        this.otpSent            =   true;

        DialogService.dismissDefaultLoader();

    }

    private async verifyOtp() {
        debugger;
        DialogService.presentDefaultLoader();
        const resp              =   await AuthService.verifyOTP(this.formValue.otp, AuthService.confirmationResult);
        const vol               =   AuthService.prepareUserdata(resp);
        vol.name                =   this.formValue.name;
        AuthService.saveProfile(vol);
        this.closeModal();
        DialogService.dismissDefaultLoader();
    }

    validateForm() {
        if (this.formValue.name.length < 3) {
            DialogService.presentAlert('Alert', 'Please give a proper Name');
            return false;
        }

        const mailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.formValue.email.length < 4 || !mailRegex.test(this.formValue.email)) {
            DialogService.presentAlert('Alert', 'Please give a proper email');
            return false;
        }

        if (this.formValue.countryCode.length < 2) {
            DialogService.presentAlert('Alert', 'Please select proper Country code');
            return false;
        }

        if (!AuthService.isValidNumber(this.formValue.phone)) {
            DialogService.presentAlert('Alert', 'Please give a proper phone number');
            return false;
        }

        return true;

    }

    render() {
        return [
            <div class="auth-drawer-wrapper">
                <div class="header" onDrag={this.handleDrag}>
                    <ion-button class='close-btn' fill="clear" onClick={() => this.closeModal()}>
                        <ion-icon color="dark" name="close"></ion-icon>
                    </ion-button>
                    <span class="title"><b>
                            {
                                this.mode === 'login' ?
                                <span> Log in </span>
                                :
                                <span> Signup </span>
                            }
                    </b></span>
                </div>
                <div class="content-wrapper">
                <ion-grid>

                    { !this.isLoggedIn ?
                    <ion-item lines='none' class='ion-no-padding'> 
                        <ion-button onClick={() => this.googleSignupTapped() } style={{ 'width': '100%', 'height': '44px' }} >
                            <ion-icon name="logo-google" slot="start"> </ion-icon>
                            {this.mode === 'login' ? 'Login with Gmail': 'Sign Up'}
                        </ion-button>
                    </ion-item> : null }

                    <ion-item class="br-t br-r br-l br-rt" disabled={ !this.isLoggedIn }>
						<ion-label position="floating" class="gry-color ff-regular">
							Name
						</ion-label>
						<ion-input class="ff-regular" type="text" onIonChange={ (e) => this.handleCommonInput(e, 'name') } disabled={true} value={ this.formValue.name } >
						</ion-input>
					</ion-item>

					<ion-item class="br-r br-l" disabled={ !this.isLoggedIn }>
						<ion-label position="floating" class="gry-color ff-regular">
							Email
						</ion-label>
						<ion-input class="ff-regular" type="email" onIonChange={ (e) => this.handleCommonInput(e, 'email') } disabled={true} value={ this.formValue.email } >
						</ion-input>
					</ion-item>


					<ion-item class="br-r br-l" disabled={ !this.isLoggedIn }>
						<ion-label position="floating" class="gry-color ff-regular">
							Country/Region
						</ion-label>
						<ion-select class="ff-regular" value="+91" onIonChange={ (e) => this.handleCommonInput(e, 'countryCode') }>
							<ion-select-option value="+91" class="ff-regular">
								India (+91)
							</ion-select-option>
						</ion-select>
					</ion-item>

					<ion-item class="br-r br-l" lines="none" disabled={ !this.isLoggedIn }>
						<ion-label position="floating" class="gry-color ff-regular">
							Phone Number
						</ion-label>
						<ion-input class="ff-regular" type="tel" onIonChange={ (e) => this.handleCommonInput(e, 'phone') }>
						</ion-input>
                        <ion-button onClick={this.sendOtp.bind(this)} fill='outline' size='large' slot='end'>
                            <ion-icon name="send-outline"></ion-icon>
                        </ion-button>
					</ion-item>

                    <div id="recaptcha-verifier"></div>

					<ion-item class="br-b br-r br-l br-rb" lines="none" disabled={ !this.isLoggedIn }>
						<ion-label position="floating" class="gry-color ff-regular">
							OTP
						</ion-label>
						<ion-input class="ff-regular" disabled={!this.otpSent} type="number" onIonChange={ (e) => this.handleCommonInput(e, 'otp') }>
						</ion-input>
					</ion-item>

					<div class="pt-24">
						<ion-button 
                            disabled={!this.otpSent}
							class="hg-50 br-6px fs-16 txt-none ff-demi bs-none"
							expand="block" onClick={ this.verifyOtp.bind(this) }>
							Login
						</ion-button>
					</div>

                    <ion-row class="pt-16 pb-16 mb-16">
                        <ion-label class='ff-regular'>
                            Supports: <b>Chrome/Firefox</b> in <b>Android, PC</b>
                        </ion-label>
                    </ion-row>

                    <ion-row>
                        <ion-label class="ff-regular" color="dark">
                            {
                                this.mode === 'login' ?
                                    <span> Don't have an account?&nbsp;
                                    <a class="ff-demi black-c" onClick={()=>this.changeMode('sign-up')}>Sign Up</a>
                                    </span>
                                :
                                    <span> Already have an account?&nbsp;
                                    <a class="ff-demi black-c" onClick={()=>this.changeMode('login')}>Login</a>
                                    </span>
                            }
                        </ion-label>
                    </ion-row>

                    </ion-grid>
                </div>
            </div>
        ]
    }
}
