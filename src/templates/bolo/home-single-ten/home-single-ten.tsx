import { Build, Component,
         h, Prop, State     }   from    '@stencil/core';
import { modalController    }   from    "@ionic/core";

import { filter, takeWhile  }   from    'rxjs/operators';
import * as marked        	from    'marked';

import { BoloBase           }   from    'bolo/base/base'

import { AuthService        }   from    'auth/auth.service';
import { DialogService      }   from    'common/dialog.service';
import { EnvironmentService }   from    'common/environment.service';
import { Fundraiser         }   from    'fundraiser/fundraiser.model';
import { HelmetService      }   from    'common/helmet.service'
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
    tag                         :   'bolo-home-single-ten',
    styleUrl                    :   'home-single-ten.css',
})
export class BoloHomeSingleTen {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);
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

    /*
    private formValue           :   any                 =   {
        name                    :   '',
        subject                 :   '',
        query                   :   ''
    };
    */

    private coverSlideOptions   :   any                 =   {
        spaceBetween: 10,
        slidesPerView: 1,
        autoplay: {
            delay: 4000
        },
        breakpoints: {
            480: {
                spaceBetween: 20,
                slidesPerView: 2,
            },
            960: {
                spaceBetween: 40,
                slidesPerView: 3,
            },
            1440: {
                spaceBetween: 60,
                slidesPerView: 4,
            }
        }
    };

    async componentWillLoad() {
        console.log('Home :: Component will load');

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
        console.log('Home :: Component did load');

        BoloBase.setupEssentials();
    }

    private async initialize() {
        Logger.info('Home :: Initialize :: ');
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

    /*
    private async sendMessage() {

        const name              =   this.formValue.name;
        const subject           =   this.formValue.subject;
        const query             =   this.formValue.query;

        if (name.length < 2) {
            await DialogService.presentAlert('Error', 'Please enter your name');
            return;
        }

        if (subject.length < 2) {
            await DialogService.presentAlert('Error', 'Please select your Support type');
            return;
        }

        window.location.href    =   `https://wa.me/${this.ngo.reachOut.phone1}?text=Hi. I am ${name}. Contacting you for ${subject}. ${query}`;

    }
    */

    render() {

        return [

			<audio loop={true} autoplay="autoplay">
				<source src="https://www.designesia.com/Noel.mp3" type="audio/mpeg" />
			</audio>,

			<div id="wrapper" style={{ 'overflow-y': 'scroll' }}>
            
                <bolo-header-single ngo={this.ngo}></bolo-header-single>

                { /** content begin */}
                <div id="content" class="no-bottom no-top">
                    <div id="top"></div>

                    { /** section begin */}
                    {/*
                    <section id="section-intro" class="full-height relative owl-slide-wrapper text-light no-top no-bottom" data-bgimage={`url(/assets/images/kids-001x1440.jpg)`} data-stellar-background-ratio=".2">
                    */}
                    <section id="section-intro" class="full-height relative owl-slide-wrapper text-light no-top no-bottom" data-bgimage={`url(${this.ngo.photos[1]})`} data-stellar-background-ratio=".2">
                        <div class="overlay-bg t50">

                            <div class="center-y relative">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="spacer-double d-block d-sm-none d-md-block"></div>
                                            <h1 class="big b"><span>Daiva Doni<span class="underline"></span></span> Trust</h1>
                                            <div class="spacer-half"></div>
                                            <p class="lead"> Our Vision - { this.ngo.vision } </p>
                                            <div class="spacer-half"></div>
                                            <a class="btn-border" href="#section-about"> Know more </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <a href="#section-features" class="scroll-to">
                            <span class="mouse">
                                 <span class="scroll"></span>
                            </span>
                        </a>
                    </section>
                    { /** section close */}

                    { /** section begin */}
                    <section id="section-features">
                        <div class="container">

                            <div class="row sequence">

                                { this.ngo.activities.map((activity, index) => (
                                <div class="col-md-4 col-sm-6 feature-box mb40 sq-item wow sq-item wow">
                                    <div class="box-icon-simple left">
                                        <span class="num wow bounceIn" data-wow-delay=".5s"> { index }</span>
                                        <div class="text">
                                            <h3 style={{ 'padding-top': '12px' }}> { activity } </h3>
                                        </div>
                                    </div>
                                </div>
                                )) }

                            </div>
                        </div>
                    </section>
                    { /** section close */}


                    <section id="section-about" class="text-light" data-bgcolor="#2d3840">
                        <div class="container">
                            <div class="row align-items-center">

                                <div class="col-md-6">
                                    <figure class="picframe invert transparent rounded hover-shadow">
                                            <span class="overlay-v">
                                                <span class="v-center">
                                                    <span>
                                                        <a id="play-video" class="video-play-button popup-youtube" href="https://www.youtube.com/watch?v=EWPFmdAWRZ0">
                                                            <span></span>
                                                        </a>
                                                    </span>
                                                </span>
                                            </span>
                                        <img src={this.ngo.photos[3]} class="img-fullwidth" alt="" />
                                    </figure>
                                </div>

                                <div class="col-md-5 offset-md-1">
                                    <h4 class="uptitle"><span class="id-color">About Us</span></h4>
                                    <h2 class="mb20"> What we do? </h2>
                                	<p style={{ 'text-align': 'left' }} innerHTML={ marked.parse(this.ngo.description) }> </p>
                                    <div class="spacer-half"></div>
                                    <a href="#section-donate" class="btn-custom scroll-to"> Like to Contribute? </a>
                                </div>

                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </section>

                    <section id="section-screenshots" aria-label="section" class="text-light">

                        <ion-slides id='coverSlides' options={this.coverSlideOptions} >
                            { this.ngo.photos.slice(0, 6).map(p => (
                                <ion-slide style={{ 'height': '320px' }}>
                                    <img src={p} style={{ 'height': '100%', 'width': '100%', 'object-fit': 'cover' }} />
                                </ion-slide>
                            )) }
                        </ion-slides>

                    </section>

                    <section id="section-team">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h4 class="uptitle id-color">Behind The Table</h4>
                                    <h2>Team Of { this.ngo.name } </h2>
                                </div>

                                { this.ngo.team.map(member => (
                                <div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
                                    <div class="profile_pic text-center">
                                        <figure class="picframe sc-icon mb20">
                                            <div class="icons">
                                                <a href="#"><i class="fa fa-facebook fa-lg"></i></a>
                                                <a href="#"><i class="fa fa-twitter fa-lg"></i></a>
                                                <a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
                                                <a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
                                            </div>
                                            <img src={ member.photo.url } class="img-fluid" alt="" style={{ 'height': '36vh', 'width': '100%', 'object-fit': 'cover' }} />
                        
                                        </figure>

                                        <h3> { member.name } </h3>
                                        <span class="subtitle"> { member.role } </span>
                                    </div>
                                </div>
                                )) }
                            </div>
                        </div>
                    </section>

                    { /** section begin */}
                    <section data-bgcolor="#2d3840" class="text-light">
                        <div class="container">

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="de_count">
                                        <h1 class="big timer" data-to="3100" data-speed="2500">0</h1>
                                        <span> Food packets distributed</span>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="de_count">
                                        <h1 class="big timer" data-to="520" data-speed="2500">0</h1>
                                        <span> Kids Educated </span>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="de_count">
                                        <h1 class="big timer" data-to="15" data-speed="2500">0</h1>
                                        <span> Health Camps conducted </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    { /** section close */}

                    { /** section begin */}
                    <section id="section-blog">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h2>Our work <span>in Media<span class="underline"></span></span>
                                    </h2>
                                </div>

                                <div class="col-md-12">
                                    <div id="blog-carousel" class="owl-carousel owl-theme">

                                        { this.ngo.media.map(med => (
                                        <div class="post-item s1 item">
                                            <div class="date-box">
                                                <div class="m">09</div>
                                                <div class="d">Oct</div>
                                            </div>

                                            <div class="post-content">
                                                <div class="post-text">
                                                    <h3><a href="#">{ med.name } - { med.publicationName } </a></h3>
                                                    <p> <img src={ med.photo.url } style={{ 'height': '180px', 'object-fit': 'cover' }} /> </p>
                                                </div>
                                            </div>
                                        </div>
                                        )) }

                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                    { /** section close */}

                    <section id="section-donate" class="text-light" data-bgcolor="#202020" data-bgimage="url(/assets/bolo/images/background/23.jpg)" data-stellar-background-ratio=".2">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <h4 class="uptitle"><span class="id-color">Contribute</span></h4>
                                    <h2>Donation to the Cause</h2>
                                </div>

                                <div class="col-md-8 offset-md-2 mb-md-30">
                                    <form name="contactForm" id='contact_form' class="de_form form_underline" method="post" action='email.php'>
                                        <div class="row">
                                            <div class="col-md-6">

                                                <div class="field-set" style={{ 'margin-bottom': '20px' }}>
                                                    { this.isLoggedIn ?
                                                    <h5> Not { this.me?.name }? <a href='#' onClick={() => AuthService.logout() }>Log out</a> </h5>
                                                    :
                                                    <input type="button" 
                                                        onClick={() => this.openAuthDrawer()}
                                                        value="Login with Grassroots" 
                                                        class="btn btn-custom form-control" 
                                                        style={{ 'width': '100%' }} />
                                                    }
                                                    <div class="line-fx"></div>
                                                </div>

                                                <div class="field-set">
                                                    <input type='text' 
                                                        name='amount' 
                                                        value="1000"
                                                        onInput={ (e) => this.handleCommonInput(e, 'donationAmount') } 
                                                        min={100}
                                                        autocomplete="off"
                                                        data-amount="1000"
                                                        required
                                                        disabled={ !this.isLoggedIn }
                                                        class="form-control" 
                                                        placeholder="Donation Amount" />
                                                    <div class="line-fx"></div>
                                                </div>

                                                <div class="field-set">
                                                    <input type='text' 
                                                        name='referral' id='referral' 
                                                        class="form-control" 
                                                        placeholder="Referred by"
                                                        onInput={ (e) => this.handleCommonInput(e, 'referredBy') } 
                                                        value="" aria-required="true"
                                                        disabled={ !this.isLoggedIn } />
                                                    <div class="line-fx"></div>
                                                </div>

                                                <div class="field-set">
                                                     <input type="checkbox" 
                                                         onInput={ (e) => this.handleCommonInput(e, 'isAnonymous') }
                                                         value="1"
                                                         disabled={ !this.isLoggedIn } />
                                                        Make this an anonymous donation.
                                                    <div class="line-fx"></div>
                                                </div>
                                            </div>

                                            <div class="col-md-6">
                                                <div class="field-set">
                                                    <textarea name='message' id='message' 
                                                        class="form-control" 
                                                        style={{ 'height': '200px' }}
                                                        placeholder="Why am I donating?" 
                                                        onInput={ (e) => this.handleCommonInput(e, 'whyDonate') } 
                                                        cols={30} rows={7} 
                                                        disabled={ !this.isLoggedIn }></textarea>
                                                    <div class="line-fx"></div>
                                                </div>
                                            </div>

                                            <div class="col-md-12 text-center">
                                                <div id='submit'>
                                                    <input type="button" 
                                                        class="btn btn-custom color-2" 
                                                        onClick={() => this.makeDonation()}
                                                        style={{ 'width': '100%' }}
                                                        value="Donate Now" 
                                                        disabled={ !this.isLoggedIn } />
                                                </div>
                                            </div>


                                        </div>
                                    </form>

                                </div>
                                
                                <div class="spacer-double"></div>

                                <div class="col-md-4 text-center mb-sm-30">
                                    <h6 class="id-color">Call Us</h6>
                                    <a style={{ 'color': 'white', 'text-decoration': 'underline' }} href={ `tel:${ this.ngo.reachOut.phone1 }` }> { this.ngo.reachOut.phone1 } </a>
                                </div>
                                
                                <div class="col-md-4 text-center mb-sm-30">
                                    <h6 class="id-color">Address</h6>
                                    { this.ngo.address }
                                </div>
                                
                                <div class="col-md-4 text-center mb-sm-30">
                                    <h6 class="id-color">Email Us</h6>
                                    <a style={{ 'color': 'white', 'text-decoration': 'underline' }} href={ `tel:${ this.ngo.reachOut.email }` }> { this.ngo.reachOut.email } </a>
                                </div>

                            </div>

                        </div>
                    </section>


                </div>
                { /** content close */}

                <bolo-footer ngo={ this.ngo } ></bolo-footer>

                <a href="#" id="back-to-top"></a>

    
            </div>,


            <span>
            { HelmetService.render(this.ngo, 'Home') }
            </span>
        ];
    }

    connectedCallback() {
        this.alive              =   true;
    }

    disconnectedCallback() {
        this.alive              =   false;
    }


}
