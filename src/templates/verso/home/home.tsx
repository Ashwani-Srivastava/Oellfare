import { Component, h, Prop }   from    '@stencil/core';

import { VersoBase          }   from    'verso/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';
import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'verso-home',
    styleUrl                    :   'home.css'
})
export class VersoHome {

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

        VersoBase.setupEssentials();
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
        <div id='page-wrapper' class="page-wrapper verso-content-box verso-content-box-move-behind">

            <verso-header ngo={this.ngo}></verso-header>

            { /** Content */ }
            <div class="verso-content">

                <div class="section">
                    <div class="section-background">
                        <div class="section-bg-image section-bg-image-size-md-cover section-bg-image-position-xs-top verso-demo-bg-image-1 section-bg-image-attachment-fix"></div>
                    </div>
                    <div class="section-content">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8 verso-text-light verso-pt-18 verso-pb-19">
                                    <h1 class="display-2 verso-opacity-8 verso-text-shadow verso-os-animation verso-mb-0" data-os-animation="fadeInRight" data-os-animation-delay=".3s">
                                        Educate & save their lifes!
                                    </h1>
                                    <p class="lead verso-text-shadow verso-os-animation verso-mt-0 verso-mb-3 text-uppercase" data-os-animation="fadeInRight" data-os-animation-delay=".4s">Creating a better world requires teamwork.</p>

                                    <a href="#" class="btn btn-lg btn-primary verso-mt-1 verso-mr-2 verso-os-animation verso-shadow-4 verso-shadow-hover-8 verso-transition" data-os-animation="fadeInRight" data-os-animation-delay=".5s" data-toggle="modal" data-target="#donate">
                                        Donate
                                    </a>
                                    <a href="about.html" class="btn btn-lg btn-secondary verso-mt-1 verso-os-animation verso-shadow-4 verso-shadow-hover-8 verso-transition" data-os-animation="fadeInRight" data-os-animation-delay=".6s">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-background">
                        <div class="section-bg-image section-bg-image-size-md-cover section-bg-image-position-xs-top verso-demo-bg-image-1 section-bg-image-attachment-fix"></div>
                    </div>
                    <div class="section-content">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3 col-xs-6 verso-py-6 text-center verso-demo-bg-orange-45 verso-text-light text-capitalize verso-os-animation" data-os-animation="fadeInUp" data-os-animation-delay=".3s">
                                    <i class="fa fa-graduation-cap fa-2x"></i>
                                    <h2 class="verso-mb-1">250</h2>
                                    <h5 class="verso-mb-0">School Graduates</h5>
                                </div>
                                <div class="col-md-3 col-xs-6 verso-py-6 text-center verso-demo-bg-orange-60 verso-text-light text-capitalize verso-os-animation" data-os-animation="fadeInUp" data-os-animation-delay=".4s">
                                    <i class="fa fa-heartbeat fa-2x"></i>

                                    <h2 class="verso-mb-1">450</h2>
                                    <h5 class="verso-mb-0">Health Check-ups</h5>
                                </div>
                                <div class="col-md-3 col-xs-6 verso-py-6 text-center verso-demo-bg-orange-75 verso-text-light text-capitalize verso-os-animation" data-os-animation="fadeInUp" data-os-animation-delay=".5s">
                                    <i class="fa fa-stethoscope fa-2x"></i>
                                    <h2 class="verso-mb-1">250</h2>
                                    <h5 class="verso-mb-0">medical checks</h5>
                                </div>
                                <div class="col-md-3 col-xs-6 verso-py-6 text-center verso-demo-bg-orange-90 verso-text-light text-capitalize verso-os-animation" data-os-animation="fadeInUp" data-os-animation-delay=".6s">
                                    <i class="fa fa-university fa-2x"></i>
                                    <h2 class="verso-mb-1">85</h2>
                                    <h5 class="verso-mb-0">University Scholarships</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-content">
                        <div class="container">
                            <div class="row verso-py-10 flex-items-xs-middle">
                                <div class="col-md-6 verso-os-animation" data-os-animation="fadeIn" data-os-animation-delay=".3s">
                                    <img class="w-100" src="/assets/verso/images/charity-pastor-1-600x600-notinclude.jpg" alt="Pastor" />
                                </div>
                                <div class="col-md-6 verso-os-animation" data-os-animation="fadeIn" data-os-animation-delay=".4s">
                                    <h2 class="display-4 verso-heading-bordered text-capitalize verso-mb-4 verso-os-animation" data-os-animation="fadeIn" data-os-animation-delay=".3s">
                                        <small class="text-muted font-italic">About</small> Verso Charity
                                    </h2>
                                    <p class="lead">Faithful enlightenment contradict ideal marvelous aversion transvaluation play. Overcome madness intentions abstract good war transvaluation superiority.</p>
                                    <p class="lead verso-mb-4">Passion abstract hatred sexuality play prejudice merciful ubermensch victorious abstract derive victorious value victorious. Horror aversion spirit ultimate morality eternal-return war strong intentions derive mountains.</p>
                                    <div class="text-center">
                                        <img class="verso-pr-3 img-fluid" src="/assets/verso/images/charity-signature-400x100-notinclyde.jpg" alt="Pastor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section verso-demo-bg-black">
                    <div class="section-background">
                        <div class="section-bg-image section-bg-image-size-md-cover section-bg-image-position-xs-top verso-demo-bg-image-2 section-bg-image-paralax "></div>
                    </div>
                    <div class="section-content">
                        <div class="container">
                            <div class="row verso-py-10">
                                <div class="col-md-10 ml-auto mr-auto text-center">
                                    <div class="card verso-shadow-15 verso-shadow-hover-20 verso-transition card-hero card-inverse verso-mt-10 verso-mb-10 verso-os-animation verso-mb-3" data-os-animation="fadeIn" data-os-animation-delay="1s">
                                        <div class="card-body">
                                            <div id="carousel-example-1" class="carousel slide verso-mb-0 carousel-indicators-circle " data-ride="carousel">
                                                <ol class="carousel-indicators verso-mb--3">
                                                    <li data-target="#carousel-example-1" data-slide-to="0" class="active verso-transition"></li>
                                                    <li class="verso-transition" data-target="#carousel-example-1" data-slide-to="1"></li>
                                                    <li class="verso-transition" data-target="#carousel-example-1" data-slide-to="2"></li>
                                                </ol>
                                                <div class="carousel-inner" role="listbox">
                                                    <div class="carousel-item active">
                                                        <blockquote class="card-blockquote blockquote verso-pl-4 blockquote-lg">
                                                            <p>Dare to imagine a free world, without hunger, without poverty & sickness. A world for everyone.</p>
                                                            <footer class="blockquote-footer verso-mt-3">Corinthians
                                                                <cite title="Source Title">13:12 NIV</cite>
                                                            </footer>
                                                        </blockquote>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <blockquote class="card-blockquote blockquote verso-pl-4 blockquote-lg">
                                                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. </p>
                                                            <footer class="blockquote-footer verso-mt-3">Corinthians
                                                                <cite title="Source Title">13:12 NIV</cite>
                                                            </footer>
                                                        </blockquote>
                                                    </div>
                                                    <div class="carousel-item">
                                                        <blockquote class="card-blockquote blockquote verso-pl-4 blockquote-lg">
                                                            <p>Podcasting operational change management inside of workflows to establish a framework. Taking.</p>
                                                            <footer class="blockquote-footer verso-mt-3">Corinthians
                                                                <cite title="Source Title">13:12 NIV</cite>
                                                            </footer>
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-content">
                        <div class="container">
                            <div class="row verso-py-10">
                                <div class="col-md-12">
                                    <h2 class="verso-heading-bordered text-capitalize verso-mb-4 verso-os-animation" data-os-animation="fadeIn" data-os-animation-delay=".3s">
                                        <small class="text-muted font-italic">Providing</small> Fundamental Needs
                                    </h2>
                                </div>
                                <div class="col-md-4">
                                    <div class="card verso-photo-filter-hover-desaturate-50 verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-3" data-os-animation="fadeInUp" data-os-animation-delay=".3s">
                                        <div class="card-img-container">
                                            <img class="card-img" src="/assets/verso/images/charity-01-350x350-notinclude.jpg" alt="Card image" />
                                        </div>
                                        <div class="card-body">
                                            <h3 class="card-title">Donate a Smile!</h3>
                                            <h5 class="card-subtitle font-italic">
                                                <a href="single-cause.html">Learn more</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card verso-photo-filter-hover-desaturate-50  verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-3" data-os-animation="fadeInUp" data-os-animation-delay=".4s">
                                        <div class="card-img-container">
                                            <img class="card-img" src="/assets/verso/images/charity-02-350x350-notinclude.jpg" alt="Card image" />
                                        </div>
                                        <div class="card-body">
                                            <h3 class="card-title">Clean fresh water!</h3>
                                            <h5 class="card-subtitle font-italic">
                                                <a href="single-cause.html">Learn more</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card verso-photo-filter-hover-desaturate-50  verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-3" data-os-animation="fadeInUp" data-os-animation-delay=".5s">
                                        <div class="card-img-container">
                                            <img class="card-img" src="/assets/verso/images/charity-03-350x350-notinclude.jpg" alt="Card image" />
                                        </div>
                                        <div class="card-body">
                                            <h3 class="card-title">Education & Books!</h3>
                                            <h5 class="card-subtitle font-italic">
                                                <a href="single-cause.html">Learn more</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card verso-photo-filter-hover-desaturate-50 verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-3" data-os-animation="fadeInUp" data-os-animation-delay=".6s">
                                        <div class="card-img-container">
                                            <img class="card-img" src="/assets/verso/images/charity-04-350x350-notinclude.jpg" alt="Card image" />
                                        </div>
                                        <div class="card-body">
                                            <h3 class="card-title">First Book</h3>
                                            <h5 class="card-subtitle font-italic">
                                                <a href="single-cause.html">Learn more</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card verso-photo-filter-hover-desaturate-50  verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-3" data-os-animation="fadeInUp" data-os-animation-delay=".7s">
                                        <div class="card-img-container">
                                            <img class="card-img" src="/assets/verso/images/charity-05-350x350-notinclude.jpg" alt="Card image" />
                                        </div>
                                        <div class="card-body">
                                            <h3 class="card-title">Globus Relief!</h3>
                                            <h5 class="card-subtitle font-italic">
                                                <a href="single-cause.html">Learn more</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card verso-photo-filter-hover-desaturate-50  verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-3" data-os-animation="fadeInUp" data-os-animation-delay=".8s">
                                        <div class="card-img-container">
                                            <img class="card-img" src="/assets/verso/images/charity-06-350x350-notinclude.jpg" alt="Card image" />
                                        </div>
                                        <div class="card-body">
                                            <h3 class="card-title">Children's Fund</h3>
                                            <h5 class="card-subtitle font-italic">
                                                <a href="single-cause.html">Learn more</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section verso-demo-bg-black">
                    <div class="section-background">
                        <div class="section-bg-image section-bg-image-size-md-cover section-bg-image-position-xs-top verso-demo-bg-image-3 section-bg-image-paralax verso-opacity-8"></div>
                    </div>
                    <div class="section-content">
                        <div class="container">
                            <div class="row verso-py-10">
                                <div class="col-lg-8 ml-auto mr-auto text-center">
                                    <div class="card card-hero p-a-1 p-a-md-0 verso-transition verso-os-animation verso-mb-0 verso-shadow-4 verso-shadow-hover-16 verso-mb-3" data-os-animation="fadeInUp" data-os-animation-delay=".3s">
                                        <div class="card-body">
                                            <h2 class="card-title verso-mb-2">
                                                <a href="single-cause.html">A smile & your Love, the only thing they need!</a>
                                            </h2>
                                            <p class="card-text lead">Blessed is the man who doesn't walk in the counsel of the wicked, nor stand in the way of sinners, nor sit in the seat of scoffers </p>
                                            <div class="progress-wrapper verso-mb-3">
                                                <div class="progress verso-mb-1">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ 'width': '25%' }}>
                                                        <span class="sr-only">25% Complete</span>
                                                    </div>
                                                </div>
                                                <i class="fa fa-map-marker progress-indicator"></i>
                                                <div class="progress-progress clearfix">
                                                    <span class="float-left">$230 raised</span>
                                                    <span class="float-right">$2000 total</span>
                                                </div>
                                            </div>
                                            <div class="text-center verso-mt-2">
                                                <a href="#" class="btn btn-primary btn-lg verso-shadow-4 verso-shadow-hover-16 verso-transition" data-toggle="modal" data-target="#donate">
                                                    Donate
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-content">
                        <div class="container">
                            <div class="row verso-py-10">
                                <div class="col-md-12">
                                    <h2 class="verso-heading-bordered text-capitalize verso-mb-4 verso-os-animation" data-os-animation="fadeIn" data-os-animation-delay=".3s">
                                        <small class="text-muted font-italic">Be Someone</small> In their Lifes
                                    </h2>
                                    <div class="card card-horizontal verso-shadow-4 verso-shadow-hover-8 verso-transition verso-mb-3 align-items-stretch card-hero">
                                        <div class="row">
                                            <div class="col-lg-6">

                                                <div class="card-img-container verso-photo-filter-hover-desaturate-50 ">
                                                    <img class="card-img" src="/assets/verso/images/charity-05-1000x800-notinclude.jpg" alt="Card image" />
                                                </div>

                                            </div>
                                            <div class="col-lg-6">
                                                <div class="card-body">
                                                    <h2 class="card-title verso-mb-3">
                                                        <a href="single-cause.html">Becoming a Foster Parent Initiative</a>
                                                    </h2>
                                                    <p class="card-text lead">Creating a better world requires teamwork, partnerships, and collaboration, as we need an entire army of companies to work together to build a better world within the next few decades. </p>
                                                    <div class="text-center">
                                                        <a href="#" class="btn btn-secondary verso-mt-2 btn-lg verso-shadow-2 verso-shadow-hover-4 verso-transition verso-os-animation" data-os-animation="bounce" data-os-animation-delay=".3s" data-toggle="modal" data-target="#donate">
                                                            Request a direct consult
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-xs-6 ">
                                    <div class="card verso-photo-filter-hover-desaturate-50 verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-1" data-os-animation="fadeInUp" data-os-animation-delay=".8s">
                                        <div class="card-img-container">
                                            <img src="/assets/verso/images/charity-01-200x200-notinclude.jpg" alt="child" class="card-img" />
                                        </div>
                                        <div class="card-img-overlay card-img-overlay-bottom card-img-overlay-fade-to-top card-img-overlay-on-hover  verso-transition">
                                            <h4 class="card-title verso-transition">Samuel</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-xs-6 ">
                                    <div class="card verso-photo-filter-hover-desaturate-50 verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-1" data-os-animation="fadeInUp" data-os-animation-delay=".6s">
                                        <div class="card-img-container">
                                            <img src="/assets/verso/images/charity-02-200x200-notinclude.jpg" alt="child" class="card-img" />
                                        </div>
                                        <div class="card-img-overlay card-img-overlay-bottom card-img-overlay-fade-to-top card-img-overlay-on-hover  verso-transition">
                                            <h4 class="card-title verso-transition">Merica</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-xs-6 ">
                                    <div class="card verso-photo-filter-hover-desaturate-50 verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-1" data-os-animation="fadeInUp" data-os-animation-delay=".4s">
                                        <div class="card-img-container">
                                            <img src="/assets/verso/images/charity-03-200x200-notinclude.jpg" alt="child" class="card-img" />
                                        </div>
                                        <div class="card-img-overlay card-img-overlay-bottom card-img-overlay-fade-to-top card-img-overlay-on-hover  verso-transition">
                                            <h4 class="card-title verso-transition">Joshua</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-xs-6 ">
                                    <div class="card verso-photo-filter-hover-desaturate-50 verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-1" data-os-animation="fadeInUp" data-os-animation-delay=".4s">
                                        <div class="card-img-container">
                                            <img src="/assets/verso/images/charity-04-200x200-notinclude.jpg" alt="child" class="card-img" />
                                        </div>
                                        <div class="card-img-overlay card-img-overlay-bottom card-img-overlay-fade-to-top card-img-overlay-on-hover  verso-transition">
                                            <h4 class="card-title verso-transition">Peter</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-xs-6 ">
                                    <div class="card verso-photo-filter-hover-desaturate-50 verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-1" data-os-animation="fadeInUp" data-os-animation-delay=".6s">
                                        <div class="card-img-container">
                                            <img src="/assets/verso/images/charity-05-200x200-notinclude.jpg" alt="child" class="card-img" />
                                        </div>
                                        <div class="card-img-overlay card-img-overlay-bottom card-img-overlay-fade-to-top card-img-overlay-on-hover  verso-transition">
                                            <h4 class="card-title verso-transition">Emmanuel</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-2 col-xs-6 ">
                                    <div class="card verso-photo-filter-hover-desaturate-50 verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-1" data-os-animation="fadeInUp" data-os-animation-delay=".8s">
                                        <div class="card-img-container">
                                            <img src="/assets/verso/images/charity-06-200x200-notinclude.jpg" alt="child" class="card-img" />
                                        </div>
                                        <div class="card-img-overlay card-img-overlay-bottom card-img-overlay-fade-to-top card-img-overlay-on-hover  verso-transition">
                                            <h4 class="card-title verso-transition">Shaya</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section verso-demo-bg-black">
                    <div class="section-background">
                        <div class="section-bg-image section-bg-image-size-cover section-bg-image-position-bottom verso-demo-bg-image-6 section-bg-image-paralax verso-opacity-3"></div>
                    </div>
                    <div class="section-content ">
                        <div class="container">
                            <div class="row verso-py-10">
                                <div class="col-lg-12">
                                    <h2 class="verso-heading-bordered text-capitalize verso-text-light verso-mb-4 verso-os-animation" data-os-animation="fadeIn" data-os-animation-delay=".3s">
                                        <small class="text-muted font-italic">We need you!</small> Urgent Causes
                                    </h2>
                                </div>
                                <div class="col-md-6">
                                    <div class="card  verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-3" data-os-animation="fadeInUp" data-os-animation-delay=".6s">
                                        <div class="card-img-container verso-photo-filter-hover-desaturate-50">
                                            <img class="card-img" src="/assets/verso/images/charity-02-550x400-notinclude.jpg" alt="Card image" />
                                        </div>
                                        <div class="card-body">
                                            <h3 class="card-title">Help Educate Orphaned Children</h3>
                                            <p>This project will fund the first year at a local secondary school for children who pass this year's exams</p>

                                            <div class="progress-wrapper verso-mb-3">
                                                <div class="progress verso-mb-1">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ 'width': '25%' }}>
                                                        <span class="sr-only">25% Complete</span>
                                                    </div>
                                                </div>
                                                <i class="fa fa-map-marker progress-indicator"></i>
                                                <div class="progress-progress clearfix">
                                                    <span class="float-left">$230 raised</span>
                                                    <span class="float-right">$2000 total</span>
                                                </div>
                                            </div>
                                            <div class="text-center verso-mb-2">
                                                <a href="#" class="btn btn-primary btn-lg verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation" data-os-animation="bounce" data-os-animation-delay=".3s" data-toggle="modal" data-target="#donate">
                                                    Donate
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="card  verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation text-center verso-mb-3" data-os-animation="fadeInUp" data-os-animation-delay=".6s">
                                        <div class="card-img-container verso-photo-filter-hover-desaturate-50">
                                            <img class="card-img" src="/assets/verso/images/charity-05-550x400-notinclude.jpg" alt="Card image" />
                                        </div>
                                        <div class="card-body">
                                            <h3 class="card-title">Educate and Empower Street Children</h3>
                                            <p>This project will fund the first year at a local secondary school for children who pass this year's exams</p>

                                            <div class="progress-wrapper verso-mb-3">
                                                <div class="progress verso-mb-1">
                                                    <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ 'width': '25%' }}>
                                                        <span class="sr-only">25% Complete</span>
                                                    </div>
                                                </div>
                                                <i class="fa fa-map-marker progress-indicator"></i>
                                                <div class="progress-progress clearfix">
                                                    <span class="float-left">$230 raised</span>
                                                    <span class="float-right">$2000 total</span>
                                                </div>
                                            </div>
                                            <div class="text-center verso-mb-2">
                                                <a href="#" class="btn btn-primary btn-lg verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation" data-os-animation="bounce" data-os-animation-delay=".3s" data-toggle="modal" data-target="#donate">
                                                    Donate
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="section">
                    <div class="section-content">
                        <div class="container">
                            <div class="row verso-py-10">
                                <div class="col-lg-12">
                                    <h2 class="verso-heading-bordered text-capitalize verso-mb-4 verso-os-animation" data-os-animation="fadeIn" data-os-animation-delay=".3s">
                                        <small class="text-muted font-italic">Latest</small> News & Updates
                                    </h2>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation verso-mb-3" data-os-animation="fadeIn" data-os-animation-delay=".4s">
                                        <div class="card-img-container">
                                            <img class="card-img-top" src="/assets/verso/images/charity-03-550x450-notinclude.jpg" alt="Card image cap" />
                                        </div>
                                        <div class="card-body">
                                            <h3 class="card-title verso-mb-2">
                                                <a href="single-post.html">No one has ever become poor by giving.</a>
                                            </h3>
                                            <h6 class="card-subtitle font-italic text-muted verso-mb-3">By
                                                <a href="blog.html">Christos</a> on May 12 2017</h6>
                                            <p class="card-text">Many are those who rise up against me. Many there are who say of my soul, «There is no help for him in God.» But you, Yahweh, are a shield around me</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation verso-mb-3" data-os-animation="fadeIn" data-os-animation-delay=".5s">
                                        <div class="card-body">
                                            <blockquote class="card-blockquote blockquote">
                                                <p class="card-text">
                                                    Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.
                                                </p>
                                                <footer class="blockquote-footer">Mother Teresa</footer>
                                            </blockquote>
                                        </div>
                                    </div>

                                    <div class="card verso-shadow-4 verso-shadow-hover-16 verso-transition verso-os-animation" data-os-animation="fadeIn" data-os-animation-delay=".6s">
                                        <div class="card-body">
                                            <h3 class="card-title verso-mb-2">
                                                <a href="single-post.html">Doing nothing for others is the undoing of ourselves.</a>
                                            </h3>
                                            <h6 class="card-subtitle font-italic text-muted verso-mb-3">By
                                                <a href="blog.html">Christos</a> on Sep 21 2017</h6>
                                            <p class="card-text">While we do our good works let us not forget that the real solution lies in a world in which charity will have become unnecessary.</p>
                                            <p class="card-text verso-mb-1">The hills bring the fruit of righteousness. He will judge the poor.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="section verso-demo-bg-black">
                    <div class="section-background">
                        <div class="section-bg-image section-bg-image-size-md-cover section-bg-image-position-xs-bottom verso-demo-bg-image-4 section-bg-image-paralax verso-opacity-5"></div>
                    </div>
                    <div class="section-content ">
                        <div class="container">
                            <div class="row verso-py-10">
                                <div class="col-lg-8 ml-auto mr-auto text-center verso-text-light">
                                    <h2 class="verso-os-animation" data-os-animation="fadeIn" data-os-animation-delay=".3s">
                                        Thousands of other kids, just like these, need a parent or financial help.
                                    </h2>
                                    <p class="lead verso-os-animation verso-mb-3" data-os-animation="fadeIn" data-os-animation-delay=".4s">Our sole purpose is Aiding, anything & anyone who needs help.</p>
                                    <a href="#" class="btn btn-lg btn-primary verso-os-animation btn-lg verso-shadow-4 verso-shadow-hover-8" data-os-animation="fadeInDown" data-os-animation-delay=".5s" data-toggle="modal" data-target="#donate">
                                        ACT TODAY!
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="donate" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h3 class="modal-title text-uppercase" id="myModalLabel">Help our Cause</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form action="contact_mailer.php" class="contact-form">
                                    <input type="text" id="name" name="name" class="form-control verso-shadow-0 verso-shadow-focus-2 verso-transition verso-mb-3" placeholder="Your Name" />
                                    <input type="email" id="email" name="email" class="form-control verso-shadow-0 verso-shadow-focus-2 verso-transition verso-mb-3" placeholder="Your Email" />
                                    <input type="number" id="ammount" name="ammount" class="form-control verso-shadow-0 verso-shadow-focus-2 verso-transition verso-mb-3" placeholder="Your Ammount" />
                                    <textarea id="message" name="message" rows={8} class="form-control verso-shadow-0 verso-shadow-focus-2 verso-transition verso-mb-3" placeholder="Describe your issue and the date you wish to visit us"></textarea>
                                    <button type="submit" class="btn btn-primary verso-shadow-2">Donate Now</button>
                                    <div class="verso-messages verso-pt-2"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            { /** Footer */ }


            <a href="#" class="verso-go-top verso-shadow-10 verso-shadow-hover-15 d-none d-sm-block hide">
                <i class="fa fa-angle-up"></i>
            </a>

            <verso-footer ngo={this.ngo}></verso-footer>

            { HelmetService.render(this.ngo, 'Home') }

        </div>

        );
    }
}
