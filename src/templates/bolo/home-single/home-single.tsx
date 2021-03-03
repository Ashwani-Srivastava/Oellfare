import { Build, Component, h,
         Prop               }   from    '@stencil/core';

import { filter, takeWhile  }   from    'rxjs/operators';
import * as marked        	from    'marked';

import { BoloBase           }   from    'bolo/base/base'
import { AuthService        }   from    'auth/auth.service';
import { DialogService      }   from    'common/dialog.service';
import { HelmetService      }   from    'common/helmet.service'
import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
import { NgoService         }   from    'ngo/ngo.service';

import * as ngo                 from    'assets/ngo.json';
//import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'bolo-home-single',
    styleUrl                    :   'home-single.css',
})
export class BoloHomeSingle {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);
    private alive               :   boolean             =   true;
    //private showDonation        :   boolean 			=   false;

    private formValue           :   any                 =   {
        name                    :   '',
        subject                 :   '',
        query                   :   ''
    };


    /*
    private coverSlideOptions   :   any                 =   {
        autoplay: {
            delay: 4000
        }
    };
    */

    async componentWillLoad() {
        console.log('Home :: Component will load');

        if (Build.isBrowser) {

            AuthService.state$.pipe(
                takeWhile(_p => this.alive),
                filter(s => s.length > 0)
            ).subscribe(_s => {
                this.initialize();
            });

        }

    }

    async componentDidLoad() {
        console.log('Home :: Component did load');

        if (Build.isBrowser) {
            BoloBase.setupEssentials(true);
        }
    }

    private async initialize() {
        Logger.info('Home :: Initialize :: ');
        NgoService
            .fetchNgo(this.ngo.id)
            .pipe(takeWhile(_p => this.alive))
            .subscribe(n => {
                this.ngo = n;
            });
    }

    private handleCommonInput(e, fieldName: string): void {
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

			<audio loop={true} autoplay="autoplay">
				<source src="https://www.designesia.com/Noel.mp3" type="audio/mpeg" />
			</audio>,

			<div id="wrapper" style={{ 'overflow-y': 'scroll' }}>

				<div class="page-overlay">
					<div class="preloader-wrap">
						<div class="spinner">
							<div class="bounce1"></div>
							<div class="bounce2"></div>
							<div class="bounce3"></div>
						</div>
					</div>
				</div>

				<bolo-header-single ngo={this.ngo}></bolo-header-single>

				{ /** content begin  */ }
				<div id="content" class="no-bottom no-top">
					<div id="top"></div>

					{ /** section begin  */ }
					<section id="section-intro" class="full-height relative owl-slide-wrapper text-light no-top no-bottom let-it-snow" data-bgimage={`url(${this.ngo.photos[0]})`} data-stellar-background-ratio=".2">
						<div class="overlay-bg t50">

							<div class="center-y relative">
								<div class="container">
									<div class="row">
										<div class="col-md-12 text-center">
											<div class="spacer-single d-block d-sm-none d-md-block"></div>
											<h1 class="big b"><span>Baby Needs <span class="underline"> </span></span> Foundation
											</h1>
											<div class="spacer-single"></div>
										</div>
									</div>
								</div>
							</div>

						</div>

						<a href="#section-services" class="scroll-to">
							<span class="mouse">
								 <span class="scroll"></span>
							</span>
						</a>
					</section>
					{ /** section close  */ }

					{ /** section begin  */ }
					<section id="section-services">
						<div class="container">

							<div class="row sequence">

                                { this.ngo.activities.map(activity => (
								<div class="col-md-4 col-sm-6 feature-box mb40 sq-item wow sq-item wow">
									<div class="feature-box style-2 left">
										<i class="icon-heart"></i>
										<div class="text">
											<h3 style={{ 'padding-top': '12px'}}> { activity }</h3>
										</div>
									</div>
								</div>
                                )) }

							</div>
						</div>
					</section>
					{ /** section close  */ }

					{ /** section begin  */ }
					<section id="section-about" class="text-light" data-bgcolor="#212121">
						<div class="container">
							<div class="row align-items-center">

								<div class="col-md-10 offset-md-1 text-center">
									<h2 class="mb20">Our <span>Vision<span class="underline"></span></span> </h2>
									<p> { this.ngo.vision } </p>
									<img src='/assets/images/baby001.jpg' class="mb30 img-fluid" alt="" />
									<h2 class="mb20"> What <span>we do?<span class="underline"></span></span> </h2>
                                	<p style={{ 'text-align': 'left' }} innerHTML={ marked.parse(this.ngo.description) }> </p>
									<div class="spacer-half"></div>
									<a href="#section-what-we-do" class="btn-custom scroll-to">See How we do</a>
									<div class="spacer-double"></div>
								</div>

								<div class="col-md-8 offset-md-2 text-center">
									<img src='/assets/images/baby002.jpg' class="mb-sm-30 img-fluid" alt="" />
								</div>

								<div class="clearfix"></div>
							</div>
						</div>
					</section>
					{ /** section close  */ }

				{ /** section service begin  */ }
				<section id="section-sid3" class="side-bg no-padding bg-color text-light">
					<div class="image-container col-md-6 pull-right d-block d-sm-none d-md-block">
						<div class="background-image let-it-snow" data-bgimage={`url(${ this.ngo.photos[1] })`}></div>
					</div>

					<div class="container">
						<div class="row">
							<div class="inner-padding">
								<div class="col-md-5 offset-md-7 wow fadeIn">
									<h2 id='section-what-we-do' class="mb20"> How we do? </h2>
                                	<p>
                                        Worried about how we are going to do this? Please check our video so you can easily understand.
                                        <br/>
                                        <br/>
                                        As we receive donors from one location we will try to get the same location volunteer to deliver in the needful orphanages also in the same location. So it will easy for the volunteers. Others which cannot be delivered will be kept stock and then delivered.
                                    </p>
									<div class="spacer-half"></div>
									<a href="#section-volunteer" class="btn-border scroll-to">Join Us</a>
								</div>
								<div class="clearfix"></div>
							</div>
						</div>
					</div>
				</section>
				{ /** section service close  */ }


				{ /** section begin  */ }
				<section id="section-team" data-bgcolor="#f9f9f9">
					<div class="container">
						<div class="row">
							<div class="col-md-12 text-center">
								<h2>Team Of <span>{ this.ngo.name }<span class="underline"></span></span>
								</h2>
							</div>

                            { this.ngo.team.map(mem => (
							<div class="col-lg-2 offset-lg-5 col-md-4 offset-md-4 col-sm-6 mb-md-30">
								<div class="profile_pic text-center">
									<figure class="picframe gray sc-icon mb20">
										<div class="icons">
                                            { mem.reachOut.facebook.length > 0 ?
											    <a href={ mem.reachOut.facebook }><i class="fa fa-facebook fa-lg"></i></a>: null }
                                                
                                            { mem.reachOut.twitter.length > 0 ?
											    <a href={ mem.reachOut.twitter }><i class="fa fa-twitter fa-lg"></i></a>: null }

                                            { mem.reachOut.linkedin.length > 0 ?
											    <a href={ mem.reachOut.linkedin}><i class="fa fa-linkedin fa-lg"></i></a>: null }

                                            { mem.reachOut.instagram.length > 0 ?
                                                <a href={ mem.reachOut.instagram }><i class="fa fa-google-plus fa-lg"></i></a>: null }
										</div>
										<img src={ mem.photo.url } class="img-fluid" alt="" />
									</figure>

									<h3> { mem.name } </h3>
									<span class="subtitle"> { mem.role } </span>
								</div>
							</div>
                            )) }

						</div>
					</div>
				</section>
				{ /** section close  */ }

				{ /** section begin  */ }
				<section data-bgcolor="#212121" class="pt40 pb40 text-light">
					<div class="container">

						<div class="row">

							<div class="col-md-3 offset-md-3 col-sm-6 col-xs-6 mb-sm-30">
								<div class="de_count">
									<h3 class="timer" data-to={ this.ngo.impactPrimitive.toysDistributed } data-speed="2500">0</h3>
									<span> Toys Distributed </span>
								</div>
							</div>

							<div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
								<div class="de_count">
									<h3 class="timer" data-to={ this.ngo.impactPrimitive.dressDistributed }>0</h3>
									<span> Dress Distributed </span>
								</div>
							</div>


						</div>
					</div>
				</section>
				{ /** section close  */ }

				{ /** section begin  */ }
				<section id="section-volunteer" class="text-light let-it-snow" data-bgimage="url(/assets/bolo/images/background/20.jpg)" data-stellar-background-ratio=".2">
					<div class="container">
						<div class="row">
							<div class="col-md-12 text-center">
								<h2>Contact <span>us<span class="underline"></span></span>
								</h2>
							</div>

							<div class="col-md-8 offset-md-2 mb-md-30">
								<form name="contactForm" id='contact_form' class="de_form form_underline" method="post" action='email.php'>
									<div class="row">
										<div class="col-md-6">

											<div class="field-set">
												<input type='text' 
                                                    name='name' id='name' 
                                                    class="form-control" 
                                                    onInput={ (e) => this.handleCommonInput(e, 'name') } 
					                                required={true}
                                                    placeholder="Your Name" />
												<div class="line-fx"></div>
											</div>

											<div class="field-set">
                                                <select 
                                                    class="form-control" 
                                                    style={{ 'width': '100%' }}
                                                    onInput={(e) => this.handleCommonInput(e, 'subject')}
                                                    required>
                                                    <option value='Volunteering'> Like to Volunteer </option>
                                                    <option value='Toy Donation'> Donate Toy </option>
                                                    <option value='General Enquiry'> General Enquiry </option>
                                                </select>
												<div class="line-fx"></div>
											</div>

										</div>

										<div class="col-md-6">
											<div class="field-set">
												<textarea 
                                                    name='message' id='message' 
                                                    class="form-control" 
                                                    onInput={ (e) => this.handleCommonInput(e, 'query') } 
                                                    required={true}
                                                    placeholder="Your Message"></textarea>
												<div class="line-fx"></div>
											</div>
										</div>

										<div class="col-md-12 text-center">
											<div id='submit'>
												<input type='button' 
                                                    onClick={() => this.sendMessage()}
                                                    value='Send Message' class="btn btn-custom color-2" />
											</div>
											<div id='mail_success' class='success'>Your message has been sent successfully.</div>
											<div id='mail_fail' class='error'>Sorry, error occured this time sending your message.</div>
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
				{ /** section close  */ }


			</div>
			{ /** content close  */ }

			<bolo-footer ngo={this.ngo}></bolo-footer>

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
