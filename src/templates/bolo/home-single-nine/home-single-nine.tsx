import { Build, Component, h,
         Prop               }   from    '@stencil/core';

import { filter, takeWhile  }   from    'rxjs/operators';
import * as marked        	from    'marked';

import { BoloBase           }   from    'bolo/base/base'
import { AuthService        }   from    'auth/auth.service';
//import { DialogService      }   from    'common/dialog.service';
import { HelmetService      }   from    'common/helmet.service'
import { Logger             }   from    'common/logger';
import { Ngo                }   from    'ngo/ngo.model';
import { NgoService         }   from    'ngo/ngo.service';

import * as ngo                 from    'assets/ngo.json';
//import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'bolo-home-single-nine',
    styleUrl                    :   'home-single-nine.css',
})
export class BoloHomeSingleNine {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);
    private alive               :   boolean             =   true;
    //private showDonation        :   boolean 			=   false;

    /*
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

        BoloBase.setupEssentials();
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

    /*
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

        window.location.href    =   `https://wa.me/${this.ngo.reachOut.phone1}?text=Hi. I am ${name}. Contacting you for ${subject}. ${query}`;

    }
    */

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
											<h1 class="very-big b"><span>Baby Needs <span class="underline"></span></span>Foundation
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
								{ /** feature box begin  */ }
								<div class="col-md-4 col-sm-6 feature-box mb40 sq-item wow sq-item wow">
									<div class="feature-box style-2 left">
										<i class="icon-pencil"></i>
										<div class="text">
											<h3>Website Design</h3>
											Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
										</div>
									</div>
								</div>
								{ /** feature box close  */ }

								{ /** feature box begin  */ }
								<div class="col-md-4 col-sm-6 feature-box mb40 sq-item wow">
									<div class="feature-box style-2 left">
										<i class="icon-envelope"></i>
										<div class="text">
											<h3>Marketing</h3>
											Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
										</div>
									</div>
								</div>
								{ /** feature box close  */ }

								{ /** feature box begin  */ }
								<div class="col-md-4 col-sm-6 feature-box mb40 sq-item wow">
									<div class="feature-box style-2 left">
										<i class="icon-camera"></i>
										<div class="text">
											<h3>Photography</h3>
											Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
										</div>
									</div>
								</div>
								{ /** feature box close  */ }

								{ /** feature box begin  */ }
								<div class="col-md-4 col-sm-6 feature-box sm-mb40 sq-item wow">
									<div class="feature-box style-2 left">
										<i class="icon-pricetags"></i>
										<div class="text">
											<h3>Branding</h3>
											Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
										</div>
									</div>
								</div>
								{ /** feature box close  */ }

								{ /** feature box begin  */ }
								<div class="col-md-4 col-sm-6 feature-box sm-mb40 sq-item wow">
									<div class="feature-box style-2 left">
										<i class="icon-tools"></i>
										<div class="text">
											<h3>Development</h3>
											Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
										</div>
									</div>
								</div>
								{ /** feature box close  */ }

								{ /** feature box begin  */ }
								<div class="col-md-4 col-sm-6 feature-box sm-mb40 sq-item wow">
									<div class="feature-box style-2 left">
										<i class="icon-magnifying-glass"></i>
										<div class="text">
											<h3>Search Engine Optimisation</h3>
											Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.
										</div>
									</div>
								</div>
								{ /** feature box close  */ }
							</div>
						</div>
					</section>
					{ /** section close  */ }

					{ /** section begin  */ }
					<section id="section-about" class="text-light" data-bgcolor="#212121">
						<div class="container">
							<div class="row align-items-center">

								<div class="col-md-6 offset-md-3 text-center">
									<h2 class="mb20">Our <span>Vision<span class="underline"></span></span> </h2>
									<p> { this.ngo.vision } </p>
									<div class="spacer-half"></div>
									<a href="#section-what-we-do" class="btn-custom scroll-to">See What we do</a>
									<div class="spacer-double"></div>
								</div>

								<div class="col-md-8 offset-md-2 text-center">
									<img src="/assets/bolo/images/misc/laptop_2.png" class="mb-sm-30 img-fluid" alt="" />
								</div>

								<div class="clearfix"></div>
							</div>
						</div>
					</section>
					{ /** section close  */ }

					{ /** section begin  */ }
					<section class="text-light no-top no-bottom let-it-snow" data-bgimage="url(/assets/bolo/images/background/18.jpg)" data-stellar-background-ratio=".2">
						<div class="overlay-bg pt100 pb100 t50">
							<div class="container">
								<div class="row">
									{ /** featured box begin  */ }
									<div class="col-lg-3 col-md-6 mb-md-30">
										<div class="feature-box-style-1">
											<div class="inner">
												<div class="front">
													<i class="icon-lightbulb id-color"></i>
													<h3>Idea</h3>
													<span>First Step</span>
												</div>
												<div class="info">
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
												</div>
											</div>
										</div>
									</div>
									{ /** featured box close  */ }

									{ /** featured box begin  */ }
									<div class="col-lg-3 col-md-6 mb-md-30">
										<div class="feature-box-style-1">
											<div class="inner">
												<div class="front">
													<i class="icon-presentation id-color"></i>
													<h3>Design</h3>
													<span>Second Step</span>
												</div>
												<div class="info">
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
												</div>
											</div>
										</div>
									</div>
									{ /** featured box close  */ }

									{ /** featured box begin  */ }
									<div class="col-lg-3 col-md-6 mb-md-30">
										<div class="feature-box-style-1">
											<div class="inner">
												<div class="front">
													<i class="icon-circle-compass id-color"></i>
													<h3>Develop</h3>
													<span>Third Step</span>
												</div>
												<div class="info">
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
												</div>
											</div>
										</div>
									</div>
									{ /** featured box close  */ }

									{ /** featured box begin  */ }
									<div class="col-lg-3 col-md-6 mb-md-30">
										<div class="feature-box-style-1">
											<div class="inner">
												<div class="front">
													<i class="icon-flag id-color"></i>
													<h3>Result</h3>
													<span>Fourth Step</span>
												</div>
												<div class="info">
													<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
												</div>
											</div>
										</div>
									</div>
									{ /** featured box close  */ }

									<div class="clearfix"></div>
								</div>
							</div>
						</div>
				</section>
				{ /** section close  */ }


				{ /** section begin  */ }
				<section id="section-portfolio" aria-label="section-portfolio" class="no-top no-bottom" data-bgcolor="#fafafa">
					<div class="container-fluid">
						<div class="row no-gutters gallery-wrap sequence_pf">

							{ /** gallery item  */ }
							<div class="col-lg-4 col-md-6 col-sm-6 sq-item">
								<div class="picframe gray wow">
									<div class="pf-click" data-value="/assets/bolo/html/project-details-image.html">
										<span class="overlay">
													<span class="title">
														<span>Single Image</span>
										</span>
										</span>
										<img src="/assets/bolo/images/portfolio/pf%20(1).jpg" class="wow" alt="" />
									</div>
								</div>
							</div>
							{ /** close gallery item  */ }

							{ /** gallery item  */ }
							<div class="col-lg-4 col-md-6 col-sm-6 sq-item">
								<div class="picframe gray wow">
									<div class="pf-click" data-value="/assets/bolo/html/project-details-slider.html">
										<span class="overlay">
													<span class="title">
														<span>Multi /assets/bolo/images Slider</span>
										</span>
										</span>
										<img src="/assets/bolo/images/portfolio/pf%20(2).jpg" class="wow" alt="" />
									</div>
								</div>
							</div>
							{ /** close gallery item  */ }

							{ /** gallery item  */ }
							<div class="col-lg-4 col-md-6 col-sm-6 sq-item wow">
								<div class="picframe gray wow">
									<div class="pf-click" data-value="/assets/bolo/html/project-details-youtube.html">
										<span class="overlay">
													<span class="title">
														<span>Youtube Video</span>
										</span>
										</span>
										<img src="/assets/bolo/images/portfolio/pf%20(3).jpg" class="wow" alt="" />
									</div>
								</div>
							</div>
							{ /** close gallery item  */ }

							{ /** gallery item  */ }
							<div class="col-lg-4 col-md-6 col-sm-6 sq-item">
								<div class="picframe gray wow">
									<div class="pf-click" data-value="/assets/bolo/html/project-details-image-big.html">
										<span class="overlay">
													<span class="title">
														<span>Single Image Big</span>
										</span>
										</span>
										<img src="/assets/bolo/images/portfolio/pf%20(4).jpg" class="wow" alt="" />
									</div>
								</div>
							</div>
							{ /** close gallery item  */ }

							{ /** gallery item  */ }
							<div class="col-lg-4 col-md-6 col-sm-6 sq-item">
								<div class="picframe gray wow">
									<div class="pf-click" data-value="/assets/bolo/html/project-details-slider-big.html">
										<span class="overlay">
													<span class="title">
														<span>Multi /assets/bolo/images Slider Big</span>
										</span>
										</span>
										<img src="/assets/bolo/images/portfolio/pf%20(5).jpg" class="wow" alt="" />
									</div>
								</div>
							</div>
							{ /** close gallery item  */ }

							{ /** gallery item  */ }
							<div class="col-lg-4 col-md-6 col-sm-6 sq-item">
								<div class="picframe gray wow">
									<div class="pf-click" data-value="/assets/bolo/html/project-details-youtube-big.html">
										<span class="overlay">
													<span class="title">
														<span>Youtube Video Big</span>
										</span>
										</span>
										<img src="/assets/bolo/images/portfolio/pf%20(6).jpg" class="wow" alt="" />
									</div>
								</div>
							</div>
							{ /** close gallery item  */ }

						</div>
					</div>
				</section>
				{ /** section close  */ }

				<div id="loader-area" data-bgcolor="#fafafa">
					<div class="container">
						<div class="project-load"></div>
					</div>
				</div>

				{ /** section begin  */ }
				<section id="section-features">
					<div class="container">
						<div class="row">

							<div class="col-md-4 wow fadeInLeft">
								<div class="spacer-single"></div>
								<div class="box-icon-simple right">
									<span class="num wow bounceIn" data-wow-delay=".5s">1</span>
									<div class="text">
										<h3>In Page Portfolio</h3>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
								<div class="spacer-single"></div>
								<div class="box-icon-simple right">
									<span class="num wow bounceIn" data-wow-delay=".5s">2</span>
									<div class="text">
										<h3>Responsive layouts</h3>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
								<div class="spacer-single"></div>
								<div class="box-icon-simple right mb-sm-30">
									<span class="num wow bounceIn" data-wow-delay=".5s">3</span>
									<div class="text">
										<h3>HTML 5 and CSS 3</h3>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
							</div>

							<div class="col-md-4 wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1s">
								<img src="/assets/bolo/images/misc/deco_2.png" class="img-fluid" alt="" />
							</div>

							<div class="col-md-4 wow fadeInRight">
								<div class="spacer-single"></div>
								<div class="box-icon-simple left">
									<span class="num wow bounceIn" data-wow-delay=".5s">4</span>
									<div class="text">
										<h3>W3C Valid HTML</h3>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
								<div class="spacer-single"></div>
								<div class="box-icon-simple left">
									<span class="num wow bounceIn" data-wow-delay=".5s">5</span>
									<div class="text">
										<h3>Animated Elements</h3>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
								<div class="spacer-single"></div>
								<div class="box-icon-simple left">
									<span class="num wow bounceIn" data-wow-delay=".5s">6</span>
									<div class="text">
										<h3>Bootstrap 4 Powered</h3>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									</div>
								</div>
							</div>

						</div>
					</div>
				</section>
				{ /** section close  */ }

				{ /** section service begin  */ }
				<section id="section-sid3" class="side-bg no-padding bg-color text-light">
					<div class="image-container col-md-6 pull-right d-block d-sm-none d-md-block">
						<div class="background-image let-it-snow" data-bgimage={`url(/assets/images/baby001.jpg)`}></div>
					</div>

					<div class="container">
						<div class="row">
							<div class="inner-padding">
								<div class="col-md-5 offset-md-7 wow fadeIn">
									<h2 id='section-what-we-do' class="mb20"> What we do? </h2>
                                	<p innerHTML={ marked.parse(this.ngo.description) }> </p>
									<div class="spacer-half"></div>
									<a href="#section-contact" class="btn-border scroll-to">Contact Us</a>
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
								<h2>Team Of <span>Awesome<span class="underline"></span></span>
								</h2>
							</div>

							<div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
								<div class="profile_pic text-center">
									<figure class="picframe gray sc-icon mb20">
										<div class="icons">
											<a href="#"><i class="fa fa-facebook fa-lg"></i></a>
											<a href="#"><i class="fa fa-twitter fa-lg"></i></a>
											<a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
											<a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
										</div>
										<img src="/assets/bolo/images/team/1.jpg" class="img-fluid" alt="" />
									</figure>

									<h3>Oscar Helman</h3>
									<span class="subtitle">Founder & CEO</span>
								</div>
							</div>

							<div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
								<div class="profile_pic text-center">
									<figure class="picframe gray sc-icon mb20">
										<div class="icons">
											<a href="#"><i class="fa fa-facebook fa-lg"></i></a>
											<a href="#"><i class="fa fa-twitter fa-lg"></i></a>
											<a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
											<a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
										</div>
										<img src="/assets/bolo/images/team/2.jpg" class="img-fluid" alt="" />
									</figure>

									<h3>Isaac Nicholas</h3>
									<span class="subtitle">Founder & CEO</span>
								</div>
							</div>

							<div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
								<div class="profile_pic text-center">
									<figure class="picframe gray sc-icon mb20">
										<div class="icons">
											<a href="#"><i class="fa fa-facebook fa-lg"></i></a>
											<a href="#"><i class="fa fa-twitter fa-lg"></i></a>
											<a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
											<a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
										</div>
										<img src="/assets/bolo/images/team/3.jpg" class="img-fluid" alt="" />
									</figure>

									<h3>Rose Shipp</h3>
									<span class="subtitle">Founder & CEO</span>
								</div>
							</div>

							<div class="col-lg-3 col-md-6 col-sm-6 mb-md-30">
								<div class="profile_pic text-center">
									<figure class="picframe gray sc-icon mb20">
										<div class="icons">
											<a href="#"><i class="fa fa-facebook fa-lg"></i></a>
											<a href="#"><i class="fa fa-twitter fa-lg"></i></a>
											<a href="#"><i class="fa fa-linkedin fa-lg"></i></a>
											<a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
										</div>
										<img src="/assets/bolo/images/team/4.jpg" class="img-fluid" alt="" />
									</figure>

									<h3>John Arnold</h3>
									<span class="subtitle">Founder & CEO</span>
								</div>
							</div>
						</div>
					</div>
				</section>
				{ /** section close  */ }

				{ /** section begin  */ }
				<section data-bgcolor="#212121" class="pt40 pb40 text-light">
					<div class="container">

						<div class="row">
							<div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
								<div class="de_count">
									<h3 class="timer" data-to="8240" data-speed="2500">0</h3>
									<span>Hours of Works</span>
								</div>
							</div>

							<div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
								<div class="de_count">
									<h3 class="timer" data-to="315">0</h3>
									<span>Projects Done</span>
								</div>
							</div>

							<div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
								<div class="de_count">
									<h3 class="timer" data-to="250">0</h3>
									<span>Satisfied Customers</span>
								</div>
							</div>

							<div class="col-md-3 col-sm-6 col-xs-6 mb-sm-30">
								<div class="de_count">
									<h3 class="timer" data-to="32" data-speed="2500">0</h3>
									<span>Awards Winning</span>
								</div>
							</div>
						</div>
					</div>
				</section>
				{ /** section close  */ }

				{ /** section begin  */ }
				<section id="section-blog">
					<div class="container">
						<div class="row">
							<div class="col-md-12 text-center">
								<h2>Latest <span>Posts<span class="underline"></span></span>
								</h2>
							</div>

							<div class="col-md-12">
								<div id="blog-carousel" class="owl-carousel owl-theme">
									<div class="post-item s1 item">
										<div class="date-box">
											<div class="m">10</div>
											<div class="d">JUN</div>
										</div>

										<div class="post-content">
											<div class="post-text">
												<h3><a href="#">Make Better User Interface</a></h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
										</div>
									</div>

									<div class="post-item s1 item">
										<div class="post-content">
											<div class="date-box">
												<div class="m">15</div>
												<div class="d">JUN</div>
											</div>

											<div class="post-text">
												<h3><a href="#">Experts Web Design Tips</a></h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
										</div>
									</div>

									<div class="post-item s1 item">
										<div class="post-content">
											<div class="date-box">
												<div class="m">20</div>
												<div class="d">JUN</div>
											</div>

											<div class="post-text">
												<h3><a href="#">Importance Of Web Design</a></h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>


										</div>
									</div>

									<div class="post-item s1 item">
										<div class="post-content">
											<div class="date-box">
												<div class="m">22</div>
												<div class="d">JUN</div>
											</div>

											<div class="post-text">
												<h3><a href="#">Avoid Erros In UI Design</a></h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
										</div>
									</div>

									<div class="post-item s1 item">
										<div class="post-content">
											<div class="date-box">
												<div class="m">28</div>
												<div class="d">JUN</div>
											</div>

											<div class="post-text">
												<h3><a href="#">Make Your Website Faster</a></h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>
										</div>
									</div>

									<div class="post-item s1 item">
										<div class="post-content">
											<div class="date-box">
												<div class="m">30</div>
												<div class="d">JUN</div>
											</div>

											<div class="post-text">
												<h3><a href="#">Create Marketing Website</a></h3>
												<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
											</div>


										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

				</section>
				{ /** section close  */ }

				{ /** section begin  */ }
				<section id="section-contact" class="text-light let-it-snow" data-bgimage="url(/assets/bolo/images/background/20.jpg)" data-stellar-background-ratio=".2">
					<div class="container">
						<div class="row">
							<div class="col-md-12 text-center">
								<h2>Contact <span>Bolo<span class="underline"></span></span>
								</h2>
							</div>

							<div class="col-md-8 offset-md-2 mb-md-30">
								<form name="contactForm" id='contact_form' class="de_form form_underline" method="post" action='email.php'>
									<div class="row">
										<div class="col-md-6">
											<div class="field-set">
												<input type='text' name='name' id='name' class="form-control" placeholder="Your Name" />
												<div class="line-fx"></div>
											</div>

											<div class="field-set">
												<input type='text' name='email' id='email' class="form-control" placeholder="Your Email" />
												<div class="line-fx"></div>
											</div>

											<div class="field-set">
												<input type='text' name='phone' id='phone' class="form-control" placeholder="Your Phone" />
												<div class="line-fx"></div>
											</div>
										</div>

										<div class="col-md-6">
											<div class="field-set">
												<textarea name='message' id='message' class="form-control" placeholder="Your Message"></textarea>
												<div class="line-fx"></div>
											</div>
										</div>

										<div class="col-md-12 text-center">
											<div id='submit'>
												<input type='submit' id='send_message' value='Submit Form' class="btn btn-custom color-2" />
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
								(208) 333 9296
							</div>

							<div class="col-md-4 text-center mb-sm-30">
								<h6 class="id-color">Address</h6>
								Collins Street West, London, UK
							</div>

							<div class="col-md-4 text-center mb-sm-30">
								<h6 class="id-color">Email Us</h6>
								contact@bolostudio.com
							</div>

						</div>

					</div>
				</section>
				{ /** section close  */ }


			</div>
			{ /** content close  */ }

			<bolo-footer ngo={this.ngo}></bolo-footer>

			<a href="#" id="back-to-top"></a>

			<div id="preloader">
				<div class="preloader1"></div>
			</div>

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
