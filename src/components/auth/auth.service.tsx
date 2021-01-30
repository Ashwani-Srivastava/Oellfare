//import { Build              }   from    '@stencil/core';
//import { doc                }   from    'rxfire/firestore';
import { user               }   from    'rxfire/auth';

import { Observable, of     }   from    'rxjs';
import { BehaviorSubject    }   from    'rxjs';
import { map, switchMap     }   from    'rxjs/operators';
import { shareReplay        }   from    'rxjs/operators';

import { AnalyticsService   }   from    'common/analytics.service';
import { DialogService      }   from    'common/dialog.service';
import { ConfigService      }   from    'common/config.service';
import { FirestoreService   }   from    'common/firestore.service';
import { Logger             }   from    'common/logger';
import { Volunteer          }   from    'volunteer/volunteer.model';

/**
 * Different possible Signup status
 */
export enum SignupState {
    ExceptionOccured            =   0,  // Happens after 60s of sending OTP
    NoInternet                  =   1,  // No Internet
    InitialState                =   5,  // Starting state of Signup Component
    FirebaseSigningIn           =   6,  // Signin button tapped and Firebase signing in happened in other tab
    ExistingVolunteer           =   10, // Found to be an existing volunteer. Existing volunteer profile to be synced down from server
    NewVolunteer                =   11, // Proceeds to OTP Verification, Location, Cause and Time Preferences
    ProfileMissing              =   12, // Proceeds to OTP Verification, Location, Cause and Time Preferences
    MobileEntered               =   15, // Mobile number is typed and entered
    CaptchaVerified             =   16, // Captcha is verified
    InvalidMobileNumber         =   17, // Google signed in, but didn't do OTP yet. Dont allow to use system. Force redirect to OTP Page
    OTPVerifying                =   20, // OTP Verification happens
    OTPSuccess                  =   21, // OTP code is verified to be right
    OTPFailure                  =   30, // OTP code verification fails
    OTPTimeout                  =   21, // Happens after 60s of sending OTP
}

export class AuthServiceController {

    public state$               :   BehaviorSubject<string>;
    public isInitialized        :   boolean             =   false;
    public vol$                 :   Observable<Volunteer>;
    public me                   :   Volunteer;

    /**
     * Holds the Country code, entered by Volunteer
     * Defaults to +91
     */
    public countryCode          :   string              =   '+91';

    /**
     * Holds the mobile number, entered by Volunteer
     */
    public mobileNo             :   string              =   '';

    /**
     * Status of Registration process at any point of time
     */
    public state                :   SignupState         =   SignupState.InitialState;

    public loginResponse        :   any;

    private timerID             :   any                 =   0;
    public confirmationResult   :   any;

    constructor() {
        Logger.info('Auth Service :: Constructor');
    }

    async initialize() {
        Logger.info('Auth Service :: Initialize');

        this.state$             =   new BehaviorSubject('');
        
        await FirestoreService.initialize();
        await AnalyticsService.initialize(FirestoreService.firebase);

        const router        :   HTMLIonRouterElement=   document.querySelector('ion-router');

        if (['prod', 'live'].includes(ConfigService.build)) {
            router.addEventListener('ionRouteDidChange',(_e: any)=>{
                AnalyticsService.trackPage();
            });
        }

        const auth              =   this.getAuth();
        this.vol$               =   user(auth).pipe(
            switchMap((firebaseUser:any) => {

                if (firebaseUser) {
                    localStorage.setItem('username', firebaseUser.displayName);
                    localStorage.setItem('userid', firebaseUser.uid);
                }

                if (firebaseUser) {

                    const vol   =   this.prepareUserdata(firebaseUser);
                    const ref   =   FirestoreService.fetchSingleDocument('Volunteer', vol.id, Volunteer);

                    return ref.pipe(
                        map(_vol => {
                            if (_vol && _vol.id.length > 0) {
                                this.state              =   SignupState.ExistingVolunteer;
                                return _vol;
                            } else {
                                this.state              =   SignupState.ProfileMissing;
                                return vol;
                            }
                        })
                    );
                } else {
                    this.state  =   SignupState.NewVolunteer;
                    return of(null);
                }
            }),
            map((firebaseUser: any) => { 
                this.me     =   new Volunteer(firebaseUser);
                if (this.state === SignupState.ProfileMissing) {
                    this.saveProfile(this.me).then(_a => {
                        console.log('profile saved', _a);
                    });
                }

                return this.me;
            }),
            shareReplay(1)
        );

        this.vol$.subscribe(_v => {
            //Logger.log('AuthService :: initialize :: volunteer -> ', _v);
            //console.log('AuthService :: initialize :: volunteer -> ', _v);
        });

        this.state$.next('Firebase ready');
    }

    public async createAccountAndSendOtp(email: string, countryCode: string, phone: string, verifier: any): Promise<any> {

        debugger;
        return this.getAuth().createUserWithEmailAndPassword(email, '123456')
        .then((user) => {
            Logger.log('createAccountAndSendOtp :: Success : ', user);
            return this.doPhoneAuth(countryCode, phone, verifier);
        })
        .catch((error) => {
            Logger.error('createAccountAndSendOtp :: Error: ', error.code + ' - ' + error.message);
            if (error.code === 'auth/email-already-in-use') {
                return this.loginAndSendOtp(email, countryCode, phone, verifier);
            } else {
                return null;
            }
        });
    }

    /********************************
     * Public functions - BEGIN
     */

    public saveProfile(vol: Volunteer): Promise<void> {
        debugger;
        return FirestoreService.addDocument('Volunteer', vol.id, vol.toJson());
    }

    public getAuth(): any {
        return FirestoreService.firebase.default.auth();
    }

    private loginAndSendOtp(email: string, countryCode: string, phone: string, verifier: any) {
        this.getAuth().signInWithEmailAndPassword(email, '123456')
            .then((user) => {
                Logger.log('loginAndSendOtp :: Success : ', user);
                return this.doPhoneAuth(countryCode, phone, verifier);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                Logger.log('loginAndSendOtp :: Error: ', errorCode + ' - ' + errorMessage);
                return null;
            });
    }

    private doPhoneAuth(countryCode: string, phone: string, verifier: any) {
        this.getAuth().currentUser.linkWithPhoneNumber(countryCode + phone, verifier)
        .then(linkReponse => {
            this.confirmationResult =   linkReponse;
            Logger.log('DoPhoneAuth :: Success', linkReponse);
            DialogService.presentToast('OTP sent');
            return linkReponse;
        }).catch(err => {
            Logger.error('DoPhoneAuth :: Error', err);
            return err;
        });
    }



    /**
     * To enable recaptcha widget and to attach it to DOM
     */
    //TODO: Capthcha error, reeset
    public initializeRecaptcha() {

        Logger.info('Auth Service :: Initialize Recaptcha');

        return new FirestoreService.firebase.default.auth.RecaptchaVerifier('recaptcha-verifier', {
            //'size': 'normal',
            'size': 'invisible',
            'callback': (_response) => {
                //AuthService.state      =  SignupState.CaptchaVerified;
                console.log('captcha callback. reCAPTCHA solved, allow signInWithPhoneNumber.', _response);
            }
        });

    }


    /**
     * Core signup logic
     *  1. Firebase Google login is initiated in a Popup
     *  2. On successfull login,
     *      1. Its checked if the Volunteer profile exists in our DB
     *      2. If not (first time Volunteer), Signup process is shown.
     *      3. If yes (existing Volunteer), the state is set as `ExistingVolunteer`
     *          and the volunteer detail is returned
     *  3. On failure, Retry option is shown
     */
    public initiateGoogleSignup() : Promise<any> {
        Logger.info("Auth Service :: Initiate Google Signup");
        const provider            =   new FirestoreService.firebase.default.auth.GoogleAuthProvider();
        return this.initiateSignup(provider, 'google');
    }

    public initiateFacebookSignup() : Promise<any> {
        Logger.info("Auth Service :: Initiate Facebook Signup");
        const provider            =   new FirestoreService.firebase.default.auth.FacebookAuthProvider();
        return this.initiateSignup(provider, 'facebook');
    }

    public initiateSignup(provider: any, platform: string): Promise<any> {

        this.state              =   SignupState.FirebaseSigningIn;

        const auth              =   this.getAuth();
        if (platform === 'google') {
            provider.setCustomParameters({
                prompt              :   'select_account',
            });
        } else {
            provider.setCustomParameters({
                auth_type           :   'reauthenticate',
                prompt              :   {
                    auth_type       :   'reauthenticate'
                }
            });
        }

        return auth.signInWithRedirect(provider).then(loginResponse => {
            return loginResponse;
        }, loginError => {

            //Logger.error("Auth Service :: Initiate Signup", loginError, {});

            this.state          =   SignupState.ExceptionOccured;
            return Promise.reject(loginError);
        }) as Promise<any>;
    }

    
    /**
     * Calls Firebase API to send OTP to given Volunteer's number
     */
    public sendOTP(mobileNo, appVerifier) {

        const phoneNumber:string=   mobileNo;

        const auth              =   this.getAuth();
        this.state              =   SignupState.MobileEntered;

        /*
        clearInterval(this.timerID);
        this.otpTimer           =   180;
        this.timerID            =   setInterval(() => {
            this.otpTimer--;
            if (this.otpTimer <= 0) {
                clearInterval(this.timerID);
                this.state      =   SignupState.OTPTimeout;
                //this.logger.error("Signup Serive :: Initiate Signup :: Failure - ", null, false);
                //this.utility.showAlert("Timeout", "Didnt receive OTP. Please retry.");
            }
        }, 1000);
         */

        return auth.currentUser.linkWithPhoneNumber(phoneNumber, appVerifier)
        .then(linkReponse => {
            //console.log('SMS Sent', linkReponse);
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with linkReponse.confirm(code).
            return Promise.resolve(linkReponse);
        }).catch(linkError => {

            //this.logger.error("Auth Service :: Send OTP",
                //linkError, { mobile : phoneNumber });

            this.state          =   SignupState.ExceptionOccured;
            return Promise.reject(linkError);
        });

    }

    /**
     * Verifies the validity of given OTP number
     */
    public verifyOTP(oCode: string, confirmationResult: any) {

        this.state              =   SignupState.OTPVerifying;

        return confirmationResult.confirm(oCode).then(confirmResponse => {
            let user            =   confirmResponse.user;
            this.state          =   SignupState.OTPSuccess;
            return Promise.resolve(user);
        }).catch(confirmError => {
            this.state          =   SignupState.OTPFailure;
            return Promise.reject(confirmError);
        });
    }

    public logout() {
        this.state              =   SignupState.InitialState;
        const auth              =   this.getAuth();
        auth.signOut();
    }


    /**
     * Public functions - END
     *******************************/

    /********************************
     * Internal Private functions - BEGIN
     */

    public prepareUserdata(usd: any): Volunteer {
        return new Volunteer({
            id                  :   usd.uid,
            email               :   usd.email,
            name                :   usd.displayName,
            photo               :   {
                caption         :   '',
                url             :   usd.photoURL
            },
            phone               :   usd.phoneNumber,
            provider            :   usd.providerData[0].providerId,
            createdBy           :   usd.uid,
            updatedBy           :   usd.uid
        });
    }

    /**
     * Reset all class variables toto initial state
     */
    public reset() {
        this.state              =   SignupState.InitialState;
        //this.mobileNo           =   "";
        //this.otpCode            =   "";
        //this.otpTimer           =   180;
        clearInterval(this.timerID);
    }

    public isValidNumber(mobile: string) {
        const parsedNo          =   parseInt(mobile);
        const len               =   parsedNo.toString().length;
        return mobile.length >= 5 && mobile.length <= 10 && len >= 5 && len <= 10;
    }

    /**
     * Internal Private functions - END
     *******************************/



}

export const AuthService        =   new AuthServiceController();



/*
Test Scenarios:

1. User with Auth.mail, Auth.phone and Profile
 - Home Page
 - Signup Page          -> Redirect back to home page
 - Mobile OTP Page      -> Redirect back to home page
2. User with Auth.mail, Auth.phone and NO Profile
 - Home Page            -> Save profile
 - Signup Page          -> Save profile and Redirect back to home page
 - Mobile OTP Pagee     -> Save profile and Redirect back to home page
3. User with Auth.mail, NO Auth.phone and NO Profile
 - Home Page            -> Redirect to OTP page
 - Signup Page          -> Redirect to OTP page
 - Mobile OTP Page

 */

