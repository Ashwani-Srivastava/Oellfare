import { Build, Component,
         h, Prop, State     }   from    '@stencil/core';
import { modalController    }   from    "@ionic/core";

import { filter, takeWhile  }   from    'rxjs/operators';
import * as marked        	    from    'marked';

import { AlorBase           }   from    'alor/base/base'
import { AuthService        }   from    'auth/auth.service';
import { DialogService      }   from    'common/dialog.service';
import { EnvironmentService }   from    'common/environment.service';
import { HelmetService      }   from    'common/helmet.service'
import { Fundraiser         }   from    'fundraiser/fundraiser.model';
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
    tag                         :   'alor-home-single',
    styleUrl                    :   'home-single.css',
})
export class AlorHomeSingle {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);
    @Prop() fund                :   Fundraiser          =   new Fundraiser(fund);
    @State() me                 :   Volunteer           =   null;
    private showDonation        :   boolean 		    =   true;

    /**
     * True when Gmail session is present and Mobile number is OTP verified
     */
    @State() isLoggedIn         :   boolean             =   false;
    private alive               :   boolean             =   true;
    private donationAmount      :   number              =   1000;
    private whyDonate           :   string              =   '';
    private referredBy          :   string              =   '';
    private isAnonymous         :   boolean             =   false;

    private formValue           :   any                 =   {
        name                    :   '',
        subject                 :   '',
        query                   :   ''
    };

    private coverSlideOptions   :   any                 =   {
        autoplay: {
            delay: 4000
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

        AlorBase.setupEssentials();
    }

    private async initialize() {
        Logger.info('Home :: Initialize :: ');
        NgoService
            .fetchNgo(this.ngo.id)
            .pipe(takeWhile(_p => this.alive))
            .subscribe(n => {
                this.ngo = n;
            });

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

    private handleDonationInput(e, fieldName: string): void {
        console.log(e.target.value, fieldName);
        if (fieldName === 'donationAmount') {
            this.donationAmount =   parseInt(e.target.value);
        } else if (fieldName === 'isAnonymous') {
            this.isAnonymous    =   !this.isAnonymous;
        } else {
            this[fieldName]     =   e.target.value;
        }
    }

    private handleCommonInput(e, fieldName: string): void {
        console.log(e.target.value, fieldName);
        this.formValue[fieldName]=  e.target.value;
    }


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

/*
        if (query.length < 10) {
            await DialogService.presentAlert('Error', 'Your query should be atleast 10 characters in length');
            return;
        }
*/

        window.location.href    =   `https://wa.me/${this.ngo.reachOut.phone1}?text=Hi. I am ${name}. Contacting you for ${subject}. ${query}`;

    }

    render() {

        return [

        <alor-header-single ngo={this.ngo}></alor-header-single>,

        <div class="banner">
            <ion-slides style={{ 'height': '100%' }} id='coverSlides' options={this.coverSlideOptions} >
                { this.ngo.photos.slice(0, 3).map(p => (
                    <ion-slide>
                        <img src={p} style={{ 'width': '100%', 'object-fit': 'cover' }} />
                    </ion-slide>
                )) }
            </ion-slides>
        </div>,

        <div id="history" class="history">
            { /** history */ }
            <div class="container">
                <h3>Our Vision</h3>
                <h5 class="text-center" style={{ 'font-size': '1.5em' }} > { this.ngo.vision } </h5>
            </div>
            { /** //history */ }
        </div>,

        <div class="lorum">
            { /** lorum */ }
            <div class="container">
                <div class="lorum-info">
                    <h3>Children have neither past nor future. They enjoy the present, which very few of us do. <br/> - Jean De La Bruyere - </h3>
                </div>
            </div>
            { /** //lorum */ }
        </div>,

        <div id="about" class="about">
            { /** about */ }
            <div class="container">
                <h3>ABOUT US</h3>
                <div class="about-grids">
                    <div class="col-md-6 about-grid">
                        <h2>A Glimpse into our Activities</h2>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{'width': '60%' }} >
                                <span class="sr-only">60% Complete</span>
                            </div>
                        </div>
                        <div class="about-grid-fig">
                            <img src="/assets/images/baby001.jpg" alt=" " />
                            <a class="play-icon popup-with-zoom-anim" href="#small-dialog">
                                <span> </span>
                            </a>
                            <div id="small-dialog" class="mfp-hide">
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/tQr-Lt2PtTg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 about-grid">
                        <h2 class="community">What we do?</h2>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{'width': '60%;' }}>
                                <span class="sr-only">60% Complete</span>
                            </div>
                        </div>
                        <div class="mission-vision">
                            <div class="vission-grid">
                                <p innerHTML={ marked.parse(this.ngo.description) }> </p>
                            </div>
                        </div>

                        { this.ngo.name === 'Baby Needs Foundation' ?
                        <span>
                            <h2 class="community"> How we work? </h2>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{'width': '60%;' }}>
                                    <span class="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div class="mission-vision">
                                <div class="vission-grid">
                                    <p> Worried about how we are going to do this? Please check our video so you can easily understand.</p>
                                    <p> As we receive donors from one location we will try to get the same location volunteer to deliver in the needful orphanages also in the same location. So it will easy for the volunteers. Others which cannot be delivered will be kept stock and then delivered. </p>
                                </div>
                                <img src='/assets/images/baby002.jpg' />
                            </div>
                        </span>: null }

                    </div>

                    
                    <div class="clearfix"> </div>
                </div>
            </div>
            { /** //about */ }
        </div>,

        <div id="activities" class="activities">
            { /** activities */ }
            <div class="container">
                <h3>OUR ACTIVITIES</h3>
                <div class="activities-grids">

                    { this.ngo.activities.map(activity => (
                        <div class="col-md-4 activities-grid">
                            <div class="activities-grid-right">
                                <h4> { activity } </h4>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                )) }


                <div class="clearfix"> </div>
            </div>
        </div>
            { /** //activities */ }
        </div>,

    <span> { this.ngo.media.length > 0 ? 
        <div class="liton">
            { /** liton */ }
            <div class="container">
                <div class="lton-inf">
                    <div class="wmuSlider example1">
                        <div class="wmuSliderWrapper">

                            { this.ngo.media.map(med => (
                                <article style={{'position': 'absolute', 'width': '100%', 'opacity': '0' }}> 
                                    <div class="banner-wrap">
                                        <div class="liton-inf">
                                            <div class="liton-fig">
                                                <img src={ med.photo.url } style={{ 'width': '50%' }} />
                                            </div>
                                            <div class="liton-info">
                                                <h3> { med.publicationName } </h3>
                                                <p> { med.description } </p>
                                            </div>
                                            <p class="tortor"> { med.name } </p>
                                        </div>
                                    </div>
                                </article>
                        )) }
                        <ul class="wmuSliderPagination">
                            <li><a href="#" class="">0</a></li>
                            <li><a href="#" class="">1</a></li>
                            <li><a href="#" class="wmuActive">2</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        { /** //liton */ }
    </div>: null } </span>,

    <span> { this.ngo.team.length > 0 ? 
    <div id="team" class="team">
        <div class="container">
            <h3>MEET OUR TEAM</h3>
            <div class="team-grids">

                { this.ngo.team.map(member => (
                <div class="col-xs-6 col-md-4 col-lg-3 team-grid">
                    <div class="thumbnail team-grid-main">
                        <img src={ member.photo.url } alt=" " style={{ 'height': '36vh', 'width': '100%', 'object-fit': 'cover' }} />
                        <div class="caption pretium">
                            <h4> { member.name } </h4>
                            <p class="founder"> { member.role } </p>
                        </div>
                    </div>
                </div>
                )) }
                <div class="clearfix"> </div>
            </div>
        </div>
    </div>: null } </span>,

            <div id="volunteer" class="contact">
                { /** contact */ }
                <div class="container">
                    <div class="contact-header">
                        <h3> SUPPORT US </h3>
                    </div>

                    <div class="contact-header" style={{ 'overflow': 'auto' }} >

                        <div class='col-md-6'>

                            { this.showDonation ?
                            <div class='contact-info' style={{ 'float': 'none', 'width': '90%', 'margin': '1em' }}>
                                <h4> Make Donation </h4>
                                
                                <p></p>

                                { !this.isLoggedIn ?
                                <input type="button" 
                                    onClick={() => this.openAuthDrawer()} 
                                    style={{ 'width': '100%' }} 
                                    value="Login with Grassroots" /> : null }

                                { this.isLoggedIn ?
                                    <h5> Not { this.me?.name }? <a href='#' onClick={() => AuthService.logout() }>Log out</a> </h5>
                                : null }

                                <form>

                                    <input type="number" 
                                        placeholder="Donation Amount" 
                                        value="1000"
                                        onInput={ (e) => this.handleDonationInput(e, 'donationAmount') } 
                                        min={100}
                                        autocomplete="off"
                                        data-amount="1000"
                                        required
                                        disabled={ !this.isLoggedIn } />

                                    <input type="text" 
                                        placeholder="Referred by"
                                        id="give-referred-by"
                                        onInput={ (e) => this.handleDonationInput(e, 'referredBy') } 
                                        value="" aria-required="true"
                                        disabled={ !this.isLoggedIn } />

                                    <label class="give-label" >
                                        <input type="checkbox" 
                                            onInput={ (e) => this.handleDonationInput(e, 'isAnonymous') }
                                            value="1"
                                            disabled={ !this.isLoggedIn } />
                                            Make this an anonymous donation.
                                    </label>

                                    <textarea 
                                        placeholder="Why am I donating?" 
                                        onInput={ (e) => this.handleDonationInput(e, 'whyDonate') } 
                                        cols={30} rows={7} 
                                        disabled={ !this.isLoggedIn } >
                                    </textarea>
                                </form>

                                    <input type="button" 
                                        onClick={() => this.makeDonation()}
                                        style={{ 'width': '100%' }}
                                        value="Donate Now" 
                                        disabled={ !this.isLoggedIn } />

                            </div> : null }

                        </div>

                        <div class='col-md-6'>

                            <div class='contact-info' style={{ 'float': 'none', 'width': '90%', 'margin': '1em' }}>
            
                                <h4> Contact us </h4>

                                <p>
                                    { this.ngo.address } <br/>
                                    Mobile: <a href={ `tel:${ this.ngo.reachOut.phone1 }` }> { this.ngo.reachOut.phone1 } </a> <br/>
                                    Email: <a href={ `mailto:${ this.ngo.reachOut.email }` }> { this.ngo.reachOut.email } </a> <br/>
                                </p>

                                <p></p>

                                <form>
                                    <input type="text" 
                                        placeholder="Name" 
                                        onInput={ (e) => this.handleCommonInput(e, 'name') } 
                                        required={true} />
                                    <select 
                                        onInput={(e) => this.handleCommonInput(e, 'subject')}
                                        required>
                                            <option value='Volunteering'> Like to Volunteer </option>
                                            { /*
                                            <option value='Toy Donation'> Donate Toy </option>
                                            */ }
                                            <option value='General Enquiry'> General Enquiry </option>
                                    </select>
                                    <textarea 
                                        onInput={ (e) => this.handleCommonInput(e, 'query') } 
                                        required={true} placeholder='Message...'></textarea>
                                </form>

                                <input type="button" 
                                    onClick={() => this.sendMessage()}
					                value="Send Message" />
                            
                            </div>

                        
                        </div>

                    </div>

                </div>
                { /** contact */ }
            </div>,

            <alor-footer ngo={this.ngo}></alor-footer>,

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
