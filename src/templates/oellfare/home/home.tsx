import { Component, h, Prop }   from    '@stencil/core';

import { OellfareBase          }   from    'oellfare/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/ngo.json';
import * as fund                from    'assets/fund.json';

@Component({
    tag                         :   'oellfare-home',
    styleUrl                    :   'home.css'
})
export class OellfareHome {

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

        OellfareBase.setupEssentials();
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

            <oellfare-header ngo={this.ngo}></oellfare-header>

        <div class="main-wrapper">
            <div class="slider_type2  wow fadeInDown">
                <div class="slider mousemove" style={{"background-image": "url(/assets/oellfare/images/slider/slider_bg3.jpg)" }}>
                    <div class="container">
                        <div class="slide-content text-left">
                            <h5 class="sub_heading">All they need is love and kindness</h5>
                            <h1 class="heading">We promote all Childcare <br/> <span class="typed"></span> Programs</h1>
                            <div id="typed-strings">
                                <p>Charity</p>
                                <p>Educational</p>
                                <p>Health</p>
                            </div>
                            <div class="power_button_group">
                                <a href="#" class="power_button effect_1">
                                    <span class="button_value">Donate Now</span>
                                </a>
                                <a href="#" class="power_button alt effect_1">
                                    <span class="button_value">Learn More</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overlapping_urgent_cause wow fadeInUp">
                <div class="container">
                    <div class="urgent_cause_block alt">
                        <div class="row">
                            <div class="col-lg-4">
                                <div class="urgent_cause_heading">
                                    <div class="power_highlight_tag">Urgent Cause</div>
                                    <h3>Food for homeless children</h3>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="power_progress_content">
                                    <div class="power_progress_inner">
                                        <div class="power_progress_bar_back">
                                            <div class="power_progress_bar" style={{"max-width": "95%"}}><span class="power_progress_value">95%</span></div>
                                        </div>
                                        <div class="power_progress_amount"><span><b>Goal:</b> $1000</span> <span><b>Raised:</b> $950</span></div>
                                    </div>
                                    <div class="power_button_group">
                                        <a href="donate1.html" class="power_button effect_1">
                                            <span class="button_value">Donate Now</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6">
                            <div class="power_iconbox type_2 wow fadeInLeft">
                                <div class="power_iconbox_icon">
                                    <img class="primary_img" src="/assets/oellfare/images/bird.png" alt="alt" />
                                    <img class="secondary_img" src="/assets/oellfare/images/bird_white.png" alt="alt" />
                                </div>
                                <div class="power_iconbox_content">
                                    <h5>Sponsorship</h5>
                                    <p>Lorem ipsum dolo amet cons ectetur adipis, cing elit sed congue erat condi eget.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="power_iconbox type_2 wow fadeInDown">
                                <div class="power_iconbox_icon">
                                    <img class="primary_img" src="/assets/oellfare/images/fund.png" alt="alt" />
                                    <img class="secondary_img" src="/assets/oellfare/images/fund_white.png" alt="alt" />
                                </div>
                                <div class="power_iconbox_content">
                                    <h5>Donation Activity</h5>
                                    <p>Lorem ipsum dolo amet cons ectetur adipis, cing elit sed congue erat condi eget.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="power_iconbox type_2 wow fadeInUp">
                                <div class="power_iconbox_icon">
                                    <img class="primary_img" src="/assets/oellfare/images/giving.png" alt="alt" />
                                    <img class="secondary_img" src="/assets/oellfare/images/giving_white.png" alt="alt" />
                                </div>
                                <div class="power_iconbox_content">
                                    <h5>Become Volunteer</h5>
                                    <p>Lorem ipsum dolo amet cons ectetur adipis, cing elit sed congue erat condi eget.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="power_iconbox type_2 wow fadeInRight">
                                <div class="power_iconbox_icon">
                                    <img class="primary_img" src="/assets/oellfare/images/love.png" alt="alt" />
                                    <img class="secondary_img" src="/assets/oellfare/images/love_white.png" alt="alt" />
                                </div>
                                <div class="power_iconbox_content">
                                    <h5>Social Welfare</h5>
                                    <p>Lorem ipsum dolo amet cons ectetur adipis, cing elit sed congue erat condi eget.</p>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>

            <div class="album">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-md-6">
                            <div class="album_text_part wow fadeInLeft">
                                <div class="power_heading_wrapper">
                                    <h2 class="power_title ">We will serve <span class="primary-color">every child</span> <br/> to make a better tomorrow</h2>
                                    <h6 class="primary-color">We are working to make the world a safer & better place</h6>
                                </div>
                                <div class="album_text_part_inner">
                                    <p>Lorem ipsum dolor sit amet adipiscing elit, sed do eiuso a tempor inciddunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiuso tempor inciddunt labore et dolore magna aliqua.</p>
                                </div>
                                <div class="album_text_part_video_inner">
                                    <div class="video_button">
                                        <a class="video_popup" href="https://www.youtube.com/watch?v=YG4WSsRQKnk"><i class="ion-ios-play"></i></a>
                                    </div>
                                    <div class="info">
                                        <h6 class="name">See Company Video</h6>
                                        <p class="company primary-color">Company Features</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6">
                            <div class="album_gallery_part wow fadeInRight">
                                <img src="/assets/oellfare/images/gallery/images.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section causes bg_image_4  wow fadeInUp">
                <div class="container">
                    <div class="power_heading_wrapper text-center">
                        <div class="power_heading_icon"><img src="/assets/oellfare/images/header_icon2.png" alt="" /></div>
                        <h1 class="power_title ">Latest Causes</h1>
                        <div class="power_title_line"></div>
                    </div>
                    <div class="owl-carousel owl-theme causes_carousel side_nav">
                        <div class="item">
                            <div class="power_causes">
                                <div class="power_causes_wrapper">
                                    <div class="power_causes_image">
                                        <img class="primary_img" src="/assets/oellfare/images/causes/1.jpg" alt="" />
                                        <div class="power_highlight_tag">Education</div>
                                    </div>
                                    <div class="power_causes_content">
                                        <h4>School for African children</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing rhoncus nisi.</p>
                                        <div class="power_progress_content">
                                            <div class="power_progress_bar_back">
                                                <div class="power_progress_bar" style={{"max-width": "60%"}}><span class="power_progress_value">60%</span></div>
                                            </div>
                                            <div class="power_progress_amount"><span><i class="ion-md-wifi"></i> <b>Goal:</b> $1000</span> <span><i class="ion-logo-usd"></i> <b>Raised:</b> $600</span></div>
                                        </div>
                                    </div>
                                    <div class="power_button_group">
                                        <a href="#" class="power_button effect_1">
                                            <span class="button_value">Donate Now</span>
                                        </a>
                                        <a href="#" class="power_button effect_3">
                                            <span class="button_value">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="power_causes">
                                <div class="power_causes_wrapper">
                                    <div class="power_causes_image">
                                        <img class="primary_img" src="/assets/oellfare/images/causes/2.jpg" alt="" />
                                        <div class="power_highlight_tag">Hospital</div>
                                    </div>
                                    <div class="power_causes_content">
                                        <h4>Hospital for African children</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing rhoncus nisi.</p>
                                        <div class="power_progress_content">
                                            <div class="power_progress_bar_back">
                                                <div class="power_progress_bar" style={{"max-width": "90%"}}><span class="power_progress_value">90%</span></div>
                                            </div>
                                            <div class="power_progress_amount"><span><i class="ion-md-wifi"></i> <b>Goal:</b> $1000</span> <span><i class="ion-logo-usd"></i> <b>Raised:</b> $900</span></div>
                                        </div>
                                    </div>
                                    <div class="power_button_group">
                                        <a href="#" class="power_button effect_1">
                                            <span class="button_value">Donate Now</span>
                                        </a>
                                        <a href="#" class="power_button effect_3">
                                            <span class="button_value">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="power_causes">
                                <div class="power_causes_wrapper">
                                    <div class="power_causes_image">
                                        <img class="primary_img" src="/assets/oellfare/images/causes/3.jpg" alt="" />
                                        <div class="power_highlight_tag">Nutrition</div>
                                    </div>
                                    <div class="power_causes_content">
                                        <h4>Food nutrition program</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing rhoncus nisi.</p>
                                        <div class="power_progress_content">
                                            <div class="power_progress_bar_back">
                                                <div class="power_progress_bar" style={{"max-width": "80%"}}><span class="power_progress_value">80%</span></div>
                                            </div>
                                            <div class="power_progress_amount"><span><i class="ion-md-wifi"></i> <b>Goal:</b> $1000</span> <span><i class="ion-logo-usd"></i> <b>Raised:</b> $800</span></div>
                                        </div>
                                    </div>
                                    <div class="power_button_group">
                                        <a href="#" class="power_button effect_1">
                                            <span class="button_value">Donate Now</span>
                                        </a>
                                        <a href="#" class="power_button effect_3">
                                            <span class="button_value">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="power_causes">
                                <div class="power_causes_wrapper">
                                    <div class="power_causes_image">
                                        <img class="primary_img" src="/assets/oellfare/images/causes/2.jpg" alt="" />
                                        <div class="power_highlight_tag">Safety</div>
                                    </div>
                                    <div class="power_causes_content">
                                        <h4>Safety for African children</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing rhoncus nisi.</p>
                                        <div class="power_progress_content">
                                            <div class="power_progress_bar_back">
                                                <div class="power_progress_bar" style={{"max-width": "70%"}}><span class="power_progress_value">70%</span></div>
                                            </div>
                                            <div class="power_progress_amount"><span><i class="ion-md-wifi"></i> <b>Goal:</b> $1000</span> <span><i class="ion-logo-usd"></i> <b>Raised:</b> $700</span></div>
                                        </div>
                                    </div>
                                    <div class="power_button_group">
                                        <a href="#" class="power_button effect_1">
                                            <span class="button_value">Donate Now</span>
                                        </a>
                                        <a href="#" class="power_button effect_3">
                                            <span class="button_value">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="power_button_group">
                        <a href="#" class="power_button alt effect_1">
                            <span class="button_value">See All Causes</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="section volunteer_facts bg_image_5">
                <div class="container">                    
                    <div class="power_funfacts  wow fadeIn">
                        <div class="power_funbox">
                            <div class="power_fun_content">
                                <h3 class="power_fun_title">No of employee</h3>
                                <h1 class="power_fun_value">
                                    <span class="power_fun_number">120</span>
                                    <span class="power-suffix">+</span>
                                </h1>
                            </div>
                        </div>
                        <div class="power_funbox">
                            <div class="power_fun_content">
                                <h3 class="power_fun_title">Solved cause</h3>
                                <h1 class="power_fun_value">
                                    <span class="power_fun_number">36</span>
                                    <span class="power-suffix">+</span>
                                </h1>
                            </div>
                        </div>
                        <div class="power_funbox">
                            <div class="power_fun_content">
                                <h3 class="power_fun_title">No of volunteers</h3>
                                <h1 class="power_fun_value">
                                    <span class="power_fun_number">3600</span>
                                    <span class="power-suffix">+</span>
                                </h1>
                            </div>
                        </div>
                        <div class="power_funbox">
                            <div class="power_fun_content">
                                <h3 class="power_fun_title">Charity Award</h3>
                                <h1 class="power_fun_value">
                                    <span class="power_fun_number">30</span>
                                    <span class="power-suffix">+</span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div class="be_volunteer wow fadeInUp">
                        <div class="row">
                            <div class="col-lg-5 col-md-6">
                                <div class="call_to_image_box">
                                    <img src="/assets/oellfare/images/image-2.jpg" alt="" />
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-6">
                                <div class="call_to_inner">
                                    <h1>Be A volunteer</h1>
                                    <h6>There will be a day when we get to celebrate <br/> every person on the planet having access to clean</h6>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                        <li>Curabitur rhoncus nisi justo, sed congue erat condimentum eget</li>
                                    </ul>
                                    <div class="power_button_group">
                                        <a href="#" class="power_button effect_1">
                                            <span class="button_value">Be a Volunteer</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="power_partners_list wow pulse">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 col-sm-4">
                                <div class="power_partner no_round">
                                    <a href="#"><img src="/assets/oellfare/images/partners/logo6.png" alt="" /></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-4">
                                <div class="power_partner no_round">
                                    <a href="#"><img src="/assets/oellfare/images/partners/logo7.png" alt="" /></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-4">
                                <div class="power_partner no_round">
                                    <a href="#"><img src="/assets/oellfare/images/partners/logo8.png" alt="" /></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-sm-4">
                                <div class="power_partner no_round">
                                    <a href="#"><img src="/assets/oellfare/images/partners/logo9.png" alt="" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section bg_color_2 wow fadeInLeft">
                <div class="container">
                    <div class="owl-carousel owl-theme power_testimonialcarousel testimonial_type2 side_nav">
                        <div class="item">
                            <div class="power_testimonial_carousel_item power_testimonial_carousel_reviewer_image_aside">
                                <div class="power_testimonial_carousel_reviewer_meta_inner">
                                    <div class="power_testimonial_carousel_reviewer_image">
                                        <img src="/assets/oellfare/images/testimonials/1.png" alt="Anders Angstrom" />
                                    </div>
                                </div>
                                <div class="power_testimonial_carousel_reviewer_content">
                                    <ul class="power_testimonial_carousel_reviewer_rating">
                                        <li><i class="ion-ios-star"></i></li>
                                        <li><i class="ion-ios-star"></i></li>
                                        <li><i class="ion-ios-star"></i></li>
                                        <li><i class="ion-ios-star"></i></li>
                                        <li><i class="ion-ios-star"></i></li>
                                    </ul>
                                    <p class="power_testimonial_carousel_reviewer_text">“Lorem ipsum dolor sit amet consecteur adipis Ut eniexercitat ullamco laborisnisi ut aliquip commodo labor doloremagna aliqua.”</p>
                                    <div class="power_testimonial_carousel_reviewer_details">
                                        <h4 class="power_testimonial_carousel_reviewer_name">Jessica ballinger</h4>
                                        <h6 class="power_testimonial_carousel_reviewer_company">California</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="power_testimonial_carousel_item power_testimonial_carousel_reviewer_image_aside">
                                <div class="power_testimonial_carousel_reviewer_meta_inner">
                                    <div class="power_testimonial_carousel_reviewer_image">
                                        <img src="/assets/oellfare/images/testimonials/2.png" alt="Anders Angstrom" />
                                    </div>
                                </div>
                                <div class="power_testimonial_carousel_reviewer_content">
                                    <ul class="power_testimonial_carousel_reviewer_rating">
                                        <li><i class="ion-ios-star"></i></li>
                                        <li><i class="ion-ios-star"></i></li>
                                        <li><i class="ion-ios-star"></i></li>
                                        <li><i class="ion-ios-star"></i></li>
                                        <li><i class="ion-ios-star"></i></li>
                                    </ul>
                                    <p class="power_testimonial_carousel_reviewer_text">“Lorem ipsum dolor sit amet consecteur adipis Ut eniexercitat ullamco laborisnisi ut aliquip commodo labor doloremagna aliqua.”</p>
                                    <div class="power_testimonial_carousel_reviewer_details">
                                        <h4 class="power_testimonial_carousel_reviewer_name">Trent Stocklin</h4>
                                        <h6 class="power_testimonial_carousel_reviewer_company">Somalia</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="power_testimonial_carousel_item power_testimonial_carousel_reviewer_image_aside">
                                <div class="power_testimonial_carousel_reviewer_meta_inner">
                                    <div class="power_testimonial_carousel_reviewer_image">
                                        <img src="/assets/oellfare/images/testimonials/1.png" alt="Anders Angstrom" />
                                    </div>
                                </div>
                                <div class="power_testimonial_carousel_reviewer_content">
                                    <ul class="power_testimonial_carousel_reviewer_rating">
                                        <li><i class="ion-ios-star"></i></li>
                                        <li><i class="ion-ios-star"></i></li>
                                        <li><i class="ion-ios-star"></i></li>
                                        <li><i class="ion-ios-star"></i></li>
                                        <li><i class="ion-ios-star"></i></li>
                                    </ul>
                                    <p class="power_testimonial_carousel_reviewer_text">“Lorem ipsum dolor sit amet consecteur adipis Ut eniexercitat ullamco laborisnisi ut aliquip commodo labor doloremagna aliqua.”</p>
                                    <div class="power_testimonial_carousel_reviewer_details">
                                        <h4 class="power_testimonial_carousel_reviewer_name">Christopher ballinger</h4>
                                        <h6 class="power_testimonial_carousel_reviewer_company">Australia</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section blog wow fadeInRight">
                <div class="container">
                    <div class="power_heading_wrapper text-center">
                        <h1 class="power_title ">Get all the charity news</h1>
                        <div class="power_title_line"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="power_blog style_2">
                                <div class="power_blog_wrapper">
                                    <div class="power_blog_image">
                                        <img src="/assets/oellfare/images/blog/1.jpg" alt="" />
                                    </div>
                                    <div class="power_blog_content">
                                        <div class="power_blog_date">
                                            October 22, 2019
                                        </div>
                                        <h5><a href="#">Strategy for clean water crisis</a></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nisi justo, sed congue erat condimentum eget.</p>
                                        <div class="power_button_group">
                                            <a href="#" class="power_button alt effect_1">
                                                <span class="button_value">Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="power_blog style_2">
                                <div class="power_blog_wrapper">
                                    <div class="power_blog_image">
                                        <img src="/assets/oellfare/images/blog/2.jpg" alt="" />
                                    </div>
                                    <div class="power_blog_content">
                                        <div class="power_blog_date">
                                            October 20, 2019
                                        </div>
                                        <h5><a href="#">Evacuation in diseasters</a></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nisi justo, sed congue erat condimentum eget.</p>
                                        <div class="power_button_group">
                                            <a href="#" class="power_button alt effect_1">
                                                <span class="button_value">Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="power_blog style_2">
                                <div class="power_blog_wrapper">
                                    <div class="power_blog_image">
                                        <img src="/assets/oellfare/images/blog/3.jpg" alt="" />
                                    </div>
                                    <div class="power_blog_content">
                                        <div class="power_blog_date">
                                            October 02, 2019
                                        </div>
                                        <h5><a href="#">Our help others blessings</a></h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nisi justo, sed congue erat condimentum eget.</p>
                                        <div class="power_button_group">
                                            <a href="#" class="power_button alt effect_1">
                                                <span class="button_value">Read More</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="newsletter wow pulse">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-3">
                            <div class="power_newsletter_title">
                                <h4>Subscribe to newsletter</h4>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-6">
                            <div class="power_newsletter">
                                <form method="post" action="#" class="form-checkin">
                                    <input type="text" name="email" class="form-control" placeholder="Your E-mail" />
                                    <button type="submit" name="submit" class="newsletter_button"><i class="ion-ios-send"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="offset-lg-1 col-lg-3 col-md-3">
                            <div class="quickcontact">
                                <img src="/assets/oellfare/images/phone_white.png" alt="phone" /><div><span>Contact us to donate</span><br/>(+123)987.654.32</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <oellfare-footer ngo={this.ngo}></oellfare-footer>

            { HelmetService.render(this.ngo, 'Home') }

        </div>

        );
    }
}
