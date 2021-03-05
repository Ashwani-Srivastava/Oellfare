import { Component, h, Prop }   from    '@stencil/core';

import { ClabBase          }   from    'clab/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';
import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'clab-home',
    styleUrl                    :   'home.css'
})
export class ClabHome {

    @Prop() ngo                 :   any                 =   ngo;
    @Prop() fund                :   any                 =   fund;

    constructor () {
        console.log('Home :: Constructor');
    }

    async componentWillLoad() {
        console.log('Home :: componentWillLoad');
    }

    async componentDidLoad() {
        console.log('Home :: componentDidLoad');

        ClabBase.setupEssentials();
    }

    coverText = [{
        header                  :   'For the betterment of Humanity...',
        subHeader               :   'Join us in giving the Departed, their deserving final rites.',
        length                  :   5
    }, {
        header                  :   'No one is Alone',
        subHeader               :   'As long as We are here.',
        length                  :   4
    }, {
        header                  :   'Started by a bunch of College students',
        subHeader               :   'To give Love, to those who really need it.',
        length                  :   7
    }];

    render() {
        return (
        <div class='page-wrapper'>

            <clab-header ngo={this.ngo}></clab-header>

            <section class="section-gap section-top section-full">
                <div class="hero-img bg-overlay" data-overlay="2" style={{ 'background-image': 'url(/assets/clab/img/hero/img-13.jpg)' }}></div>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-8">
                            <p class="lead text-white font-weight-600">Help The Humanity</p>
                            <h1 class="text-white font-size-72">
                                Săve the children
                            </h1>
                            <h4 class="text-white mb-0 font-weight-normal">
                                to the underprivileged childen
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-gap bg-gray">
                <div class="container">
                    <div class="row justify-content-md-center">
                        <div class="col-md-10">
                            <div class="card border-0 row no-gutters flex-column flex-md-row box-hover">
                                <div  class="flex-column col-md-4">
                                    <img class="card-img flex-grow-1 h-100" src="/assets/clab/img/cards/21a.jpg" alt="" />
                                    <div class="ft-tag ft-overflow-tr">urgent</div>
                                </div>
                                <div class="card-body d-flex align-items-center text-center col-md-8 px-5">
                                    <div class="w-100">
                                        <h2 class="">Pure Water Supply</h2>
                                        <p class="text-danger">5 days remaining...</p>
                                        <div class="progress custom-progress-inside dark-progress mb-lg-5 mb-4">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ 'width': '80%' }} >
                                                <div class="skills-info"><span>80%</span></div>
                                            </div>
                                        </div>
                                        <div class="row text-left justify-content-between mb-lg-5 mb-4">
                                            <div class="col-5">
                                                <h6 class="text-muted">GOAL</h6>
                                                <h4>$15,750</h4>
                                            </div>
                                            <div class="col-5">
                                                <h6 class="text-muted">RAISED</h6>
                                                <h4>$12,130</h4>
                                            </div>
                                        </div>
                                        <div class="text-center">
                                            <a href="#" class="btn btn-pill btn-theme">Donate</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-gap" id="go-next-section">
                <div class="container">
                    <div class="row justify-content-md-center text-center mb-lg-5 mb-4 pb-lg-5">
                        <div class="col-md-8">
                            <h1 class="mb-md-4">Causes Need Ăttentions</h1>
                            <p class="lead text-muted">Education charities make learning possible for students of all ages</p>
                        </div>
                    </div>
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="card mb-md-0 mb-3 box-hover">
                                <div class="position-relative">
                                    <img class="card-img-top" src="/assets/clab/img/cards/21b.jpg" alt="card image" />
                                    <div class="ft-tag ft-overflow-br">7 Days</div>
                                </div>
                                <div class="card-body py-4">
                                    <h5 class="mb-4">Child Education</h5>
                                    <div class="mb-4">
                                        <p>Lorem ipsum dolor sit amet, consect adipiscing elit sed do eiusmod Lorem ipsum dolor sit amet ben consect.</p>
                                        <div class="mt-lg-5">
                                            <p>Raised: <strong>$52,872</strong> / $70,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <a href="#">Donate Now</a>
                                        <span class="card-arrow-icon"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-md-0 mb-3 box-hover">
                                <div class="position-relative">
                                    <img class="card-img-top" src="/assets/clab/img/cards/21c.jpg" alt="card image" />
                                    <div class="ft-tag ft-overflow-br">19 Days</div>
                                </div>
                                <div class="card-body py-4">
                                    <h5 class="mb-4">Youth Empowerment</h5>
                                    <div class="mb-4">
                                        <p>Lorem ipsum dolor sit amet, consect adipiscing elit sed do eiusmod Lorem ipsum dolor sit amet ben consect.</p>
                                        <div class="mt-lg-5">
                                            <p>Raised: <strong>$12,872</strong> / $30,000</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <a href="#">Donate Now</a>
                                        <span class="card-arrow-icon"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-gap">
                <div class="hero-img parallax-img bg-overlay" data-overlay="0" style={{ 'background-image': 'url(/assets/clab/img/parallax/p7.jpg)' }}></div>
                <div class="container">
                    <div class="row justify-content-start align-items-center">
                        <div class="col-md-5">
                            <div class="list-group list-group-gap list-group-right-arrow list-group-right-arrow-on-hover">
                                <a href="#" class="list-group-item border-0 d-flex">
                                    <i class="vl-money pr-4 fa-2x mt-2"></i>
                                    <div>
                                        <strong>Donate Money</strong>
                                        <p class="mb-0">Each theme is architected as an...</p>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item border-0 d-flex active">
                                    <i class="vl-bag pr-4 fa-2x mt-2"></i>
                                    <div>
                                        <strong>Sponshorship</strong>
                                        <p class="mb-0">A self-contained unit of a discourse</p>
                                    </div>
                                </a>
                                <a href="#" class="list-group-item border-0 d-flex">
                                    <i class="vl-avatar-man pr-4 fa-2x mt-2"></i>
                                    <div>
                                        <h6>Become Volunteer</h6>
                                        <p class="mb-0">thoroughly documented with examples</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-gap">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <h2 class="mb-lg-5 mb-4">Our Education Work</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident</p>
                            <a href="#" class="btn btn-pill btn-theme my-4">Donate Now</a>
                        </div>
                        <div class="col-md-6">
                            <div class="position-relative mb-md-5 mb-4">
                                <img class="rounded" src="/assets/clab/img/cards/22a.jpg" alt="" />
                                <div class="video-btn video-play-btn-align-center">
                                    <a href="https://www.youtube.com/watch?v=kuceVNBTJio" class="video-play-icon popup-youtube v-Center">
                                        <i class="fa fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-gap">
                <div class="hero-img parallax-img bg-overlay" data-overlay="9" style={{ 'background-image': 'url(/assets/clab/img/parallax/p8.jpg)' }}></div>
                <div class="container">
                    <div class="row justify-content-between align-items-center text-white">
                        <div class="col-md-5">
                            <img class="mb-md-0 mb-4" src="/assets/clab/img/cards/22b.png" alt="" />
                        </div>
                        <div class="col-md-6">
                            <h2>Buy a T-shirt and Support us</h2>
                            <p class="lead font-lora text-muted mb-lg-5">Total profit will be spend for the underprevillaged children</p>
                            <p class="text-muted">Sed do eiusmod Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elie</p>
                            <a href="#" class="btn btn-pill btn-theme mt-lg-5">Go Shop</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-gap bg-gray">
                <div class="container">
                    <div class="row justify-content-md-center text-center pb-lg-5 mb-lg-5 mb-4">
                        <div class="col-md-8">
                            <h1 class="mb-md-4">Meet the Volunteers</h1>
                            <p class="lead text-muted">Great things in business are never done by one person. They're done by a team of people. We have that dynamic group of peoples</p>
                        </div>
                    </div>
                    <div class="row justify-content-md-center pb-lg-5 mb-lg-5 mb-4">
                        <div class="col-md-4">
                            <div class="card border-0 mb-md-0 mb-3 box-hover">
                                <div class="position-relative">
                                    <div class="ft-tag ft-inside-tr" data-toggle="tooltip" data-placement="top" title="" data-original-title="Employee of the month">EOM</div>
                                    <img class="card-img-top" src="/assets/clab/img/team/t-1.jpg" alt="" />
                                </div>
                                <div class="card-footer border-0">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            Arnold Niditsch
                                            <span class="text-muted d-block font-size-14">Chief Executive Officer</span>
                                        </div>
                                        <span class="card-arrow-icon"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card border-0 mb-md-0 mb-3 box-hover">
                                <img class="card-img-top" src="/assets/clab/img/team/t-2.jpg" alt="" />
                                <div class="card-footer border-0">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            Sharron Berry
                                            <span class="text-muted d-block font-size-14">Project Manager</span>
                                        </div>
                                        <span class="card-arrow-icon"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card border-0 mb-md-0 mb-3 box-hover">
                                <div class="position-relative">
                                    <div class="ft-tag ft-overflow-br" data-toggle="tooltip" data-placement="top" title="" data-original-title="Employee of the Year">
                                        EOY
                                    </div>
                                    <img class="card-img-top" src="/assets/clab/img/team/t-3.jpg" alt="" />
                                </div>
                                <div class="card-footer border-0">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <div>
                                            Thomas Johnson
                                            <span class="text-muted d-block font-size-14">Lead Designer</span>
                                        </div>
                                        <span class="card-arrow-icon"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-md-center text-center">
                        <div class="col-md-6">
                            <h2>Register for Volunteer</h2>
                            <p class="text-muted">You will be liable to assist the charity campaign</p>
                            <p class="text-muted">Sed do eiusmod Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod</p>
                            <a href="#" class="btn btn-pill btn-theme mt-lg-5">sign up now</a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-gap bg-dark">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-4 text-white">
                            <h2 class="mb-md-4">What’s going on</h2>
                            <p class="text-muted">Sed do eiusmod Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod</p>
                            <div class="mb-md-0 mb-4">
                                <a href="#">View all blog</a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card border-0 mb-md-0 mb-3 box-hover">
                                <div class="card-body py-4">
                                    <span class="mt-3 mb-3 text-muted font-size-12 d-block text-uppercase">today’s story</span>
                                    <h5 class="mb-4">It is better to fail in originality than to succeed in imitation</h5>
                                </div>
                                <div class="card-footer border-top">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <a href="#">Explore More</a>
                                        <span class="card-arrow-icon"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card border-0 mb-md-0 mb-3 box-hover">
                                <div class="card-body py-4">
                                    <span class="mt-3 mb-3 text-muted font-size-12 d-block text-uppercase">blog</span>
                                    <h5 class="mb-4">It is better to fail in originality than to succeed in imitation</h5>
                                </div>
                                <div class="card-footer border-top">
                                    <div class="d-flex align-items-center justify-content-between">
                                        <a href="#">Explore More</a>
                                        <span class="card-arrow-icon"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="section-gap pb-0">
                <div class="container">
                    <div class="row justify-content-md-center text-center pb-lg-5 mb-lg-5 mb-4">
                        <div class="col-md-8">
                            <h2 class="mb-4">Change Lives with your gift</h2>
                            <p class="text-muted">Giving a donation to donatics can help us to reach more children transform their lives for the better. Join your hand with us for a better life and feautiful future</p>
                            <a href="#" class="btn btn-pill btn-outline mt-lg-5">donate now</a>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-4">
                            <img class="rounded" src="/assets/clab/img/cards/23a.jpg" alt="" />
                        </div>
                        <div class="col-4">
                            <img class="rounded" src="/assets/clab/img/cards/23b.jpg" alt="" />
                        </div>
                        <div class="col-4">
                            <img class="rounded" src="/assets/clab/img/cards/23c.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>


            <clab-footer ngo={this.ngo}></clab-footer>

            { HelmetService.render(this.ngo, 'Home') }

        </div>

        );
    }
}
