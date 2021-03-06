import { Component, h, Prop }   from    '@stencil/core';

import { OellfareBase       }   from    'oellfare/base/base'
import { HelmetService      }   from    'common/helmet.service'
import * as ngo                 from    'assets/thozhan.json';
import * as fund                from    'assets/thozhan-fund.json';

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
        console.log(ngo);
        console.log("Hello");
        console.log(fund);
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
        var image2='url('+'https://firebasestorage.googleapis.com/v0/b/gr-live.appspot.com/o/grcare%2Fregional%2Fin%2F31%2F3126%2Fngo%2FrdYkw6SBHECOJn2AXeoV%2Foriginal_cover3.jpg?alt=media'+')';
        return (
        
        <div class='page-wrapper'>
        
            <oellfare-header ngo={this.ngo}></oellfare-header>
            
            <div class="main-wrapper">
            <div class="slider_type1">
                <div class="owl-carousel owl-theme slider_carousel  side_dots">
                    
                    
                    { this.ngo.photos.slice(0, 3).map((ph, index) => (
                        <div class="item">
                        <div class="slider" style={{'background-image': `url(${ph})`, 'background-size':'cover'}}>
                        <div class="container">
                            <div class="slide-content text-left">
                            <h5 class="sub_heading"> { this.coverText[index].header } </h5>
                                            <h1 class="heading">  { this.coverText[index].subHeader } </h1>
                                <div class="power_button_group">
                                    <a href="#" class="power_button third effect_1">
                                        <span class="button_value">Donate Now </span>
                                    </a>
                                    <a href="#" class="power_button alt fourth effect_1">
                                        <span class="button_value">Learn More</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        )) } 
                        
                </div>
            </div>

            <div class="services">
                <div class="container">
                    <div class="row justify-content-around">
                        <div class="col-lg-4 col-md-6">
                            <div class="power_iconbox type_1 third">
                                <div class="power_iconbox_icon">
                                    <img class="primary_img" src="assets/oellfare/images/donate_white.png" alt="alt"/>
                                    <img class="secondary_img" src="assets/oellfare/images/donate_white.png" alt="alt"/>
                                </div>
                                <div class="power_iconbox_content">
                                    {/* <p>Service One</p> */}
                                    <h5>{this.ngo.activities[0]}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="power_iconbox type_1 first">
                                <div class="power_iconbox_icon">
                                    <img class="primary_img" src="assets/oellfare/images/donation_white.png" alt="alt"/>
                                    <img class="secondary_img" src="assets/oellfare/images/donation_white.png" alt="alt"/>
                                </div>
                                <div class="power_iconbox_content">
                                    {/* <p>Service Two</p> */}
                                    <h5>{this.ngo.activities[1]}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="power_iconbox type_1 second">
                                <div class="power_iconbox_icon">
                                    <img class="primary_img" src="assets/oellfare/images/handraise_white.png" alt="alt"/>
                                    <img class="secondary_img" src="assets/oellfare/images/handraise_white.png" alt="alt"/>
                                </div>
                                <div class="power_iconbox_content">
                                    {/* <p>Service Three</p> */}
                                    <h5>{this.ngo.activities[2]}</h5>
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>

            <div class="video">
                <div class="video_inner">
                    <h1>A Short Video of <span class="primary-color">What We Do</span></h1>
                    <div class="video_button">
                        <a class="video_popup fourth" href={this.ngo.video.url}><i class="ion-ios-play"></i></a>
                    </div>
                </div>
            </div>


            <div class="section accordion">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6">
                            <div class="power-accordion" id="accordion">
                                <h2 class="title">About Us</h2>
                                <div class="power-card">
                                    <div class="power-card-header" id="headingOne">
                                        <a href="collapseOne" class="power-btn-link right_icon" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                            <span class="power-accordion-title">{this.ngo.name} <span class="primary-color">Mission Statements</span></span>
                                            <div class="power_accordion_icon_group">
                                                <i aria-hidden="true" class="icon-open icon-right ion-ios-add"></i>
                                                <i aria-hidden="true" class="icon-closed icon-right ion-ios-remove"></i>										
                                            </div>
                                        </a>
                                    </div>
                                
                                    <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="power-card-body">
                                           {this.ngo.mission}
                                        </div>
                                    </div>
                                </div>
                                <div class="power-card">
                                    <div class="power-card-header" id="headingTwo">
                                        <a href="collapseTwo" class="power-btn-link right_icon" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            <span class="power-accordion-title">{this.ngo.name} <span class="primary-color">Vision Statements</span></span>
                                            <div class="power_accordion_icon_group">
                                                <i aria-hidden="true" class="icon-open icon-right ion-ios-add"></i>
                                                <i aria-hidden="true" class="icon-closed icon-right ion-ios-remove"></i>										
                                            </div>
                                        </a>
                                    </div>
                                
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="power-card-body">
                                            {this.ngo.vision}
                                        </div>
                                    </div>
                                </div>
                                <div class="power-card">
                                    <div class="power-card-header" id="headingThree">
                                        <a href="collapseThree" class="power-btn-link right_icon" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                            <span class="power-accordion-title">Why <span class="primary-color">Help matters?</span></span>
                                            <div class="power_accordion_icon_group">
                                                <i aria-hidden="true" class="icon-open icon-right ion-ios-add"></i>
                                                <i aria-hidden="true" class="icon-closed icon-right ion-ios-remove"></i>										
                                            </div>
                                        </a>
                                    </div>
                                
                                    <div id="collapseThree" class="collapse show" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="power-card-body">
                                        <p>The Heart that gives, <span class="primary-color">Gathers</span></p>
                                            <div class="ext_content">
                                            <div class="inline">
                                                    <h6 class="hey"><img src="assets/oellfare/images/happy_colored.png" alt=""/> {this.ngo.whyHelpMatters[0].text}</h6>
                                                    <h6 class="hey"><img src="assets/oellfare/images/apple_colored.png" alt=""/>{this.ngo.whyHelpMatters[1].text}</h6>
                                                </div>
                                                <div class="inline">
                                                    <h6 class="hey"> <img src="assets/oellfare/images/reading_colored.png" alt=""/> {this.ngo.whyHelpMatters[2].text}</h6>
                                                    {/* <h6><img src="assets/oellfare/images/heart_colored.png" alt=""/> Health facility for all</h6> */}
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <img src={this.ngo.photos[3]} class="pic" alt=""/>
                        </div>
                    </div>
                    <div class="power_funfacts fifth">
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
                    </div>
                </div>
            </div>

            <div class="section causes bg_color_1">
                <div class="container">
                    <div class="power_heading_wrapper text-center">
                        <div class="power_heading_icon"><img src="assets/oellfare/images/header_icon1.png" alt=""/></div>
                        <h1 class="power_title ">Latest Causes</h1>
                        <div class="power_title_line fifth"></div>
                    </div>
                    <div class="owl-carousel owl-theme causes_carousel side_nav">
                        <div class="item">
                            <div class="power_causes">
                                <div class="power_causes_wrapper">
                                    <div class="power_causes_image">
                                        <img class="primary_img" src={this.fund.coverPhoto[0].url} alt=""/>
                                        <div class="power_highlight_tag">{this.fund.cause.name}</div>
                                    </div>
                                    <div class="power_causes_content">
                                        <h4>{this.fund.donationBtnText}</h4>
                                        <p>{this.fund.name}</p>
                                        <div class="power_progress_content">
                                            <div class="power_progress_bar_back">
                                                <div class="power_progress_bar" style={{'max-width': '60%;'}}><span class="power_progress_value">{this.fund.donation.collected}*100/{this.fund.donation.required}</span></div>
                                            </div>
                                            <div class="power_progress_amount"><span><i class="ion-md-wifi"></i> <b>Goal:</b>{this.fund.donation.required}</span> <span><i class="ion-logo-usd"></i> <b>Raised:</b> {this.fund.donation.collected}</span></div>
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

                        {/* <div class="item">
                            <div class="power_causes second">
                                <div class="power_causes_wrapper">
                                    <div class="power_causes_image">
                                        <img class="primary_img" src="images/causes/2.jpg" alt=""/>
                                        <div class="power_highlight_tag">Hospital</div>
                                    </div>
                                    <div class="power_causes_content">
                                        <h4>Hospital for African children</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing rhoncus nisi.</p>
                                        <div class="power_progress_content">
                                            <div class="power_progress_bar_back">
                                                <div class="power_progress_bar" style={{"max-width": "90%;"}}><span class="power_progress_value">90%</span></div>
                                            </div>
                                            <div class="power_progress_amount"><span><i class="ion-md-wifi"></i> <b>Goal:</b> $1000</span> <span><i class="ion-logo-usd"></i> <b>Raised:</b> $900</span></div>
                                        </div>
                                    </div>
                                    <div class="power_button_group">
                                        <a href="#" class="power_button second effect_1">
                                            <span class="button_value">Donate Now</span>
                                        </a>
                                        <a href="#" class="power_button second effect_3">
                                            <span class="button_value">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="power_causes third">
                                <div class="power_causes_wrapper">
                                    <div class="power_causes_image">
                                        <img class="primary_img" src="images/causes/3.jpg" alt=""/>
                                        <div class="power_highlight_tag">Nutrition</div>
                                    </div>
                                    <div class="power_causes_content">
                                        <h4>Food nutrition program</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing rhoncus nisi.</p>
                                        <div class="power_progress_content">
                                            <div class="power_progress_bar_back">
                                                <div class="power_progress_bar" style={{"max-width": "80%;"}}><span class="power_progress_value">80%</span></div>
                                            </div>
                                            <div class="power_progress_amount"><span><i class="ion-md-wifi"></i> <b>Goal:</b> $1000</span> <span><i class="ion-logo-usd"></i> <b>Raised:</b> $800</span></div>
                                        </div>
                                    </div>
                                    <div class="power_button_group">
                                        <a href="#" class="power_button third effect_1">
                                            <span class="button_value">Donate Now</span>
                                        </a>
                                        <a href="#" class="power_button third effect_3">
                                            <span class="button_value">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="item">
                            <div class="power_causes fourth">
                                <div class="power_causes_wrapper">
                                    <div class="power_causes_image">
                                        <img class="primary_img" src="images/causes/2.jpg" alt=""/>
                                        <div class="power_highlight_tag">Safety</div>
                                    </div>
                                    <div class="power_causes_content">
                                        <h4>Safety for African children</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing rhoncus nisi.</p>
                                        <div class="power_progress_content">
                                            <div class="power_progress_bar_back">
                                                <div class="power_progress_bar" style={{"max-width": "70%;"}}><span class="power_progress_value">70%</span></div>
                                            </div>
                                            <div class="power_progress_amount"><span><i class="ion-md-wifi"></i> <b>Goal:</b> $1000</span> <span><i class="ion-logo-usd"></i> <b>Raised:</b> $700</span></div>
                                        </div>
                                    </div>
                                    <div class="power_button_group">
                                        <a href="#" class="power_button fourth effect_1">
                                            <span class="button_value">Donate Now</span>
                                        </a>
                                        <a href="#" class="power_button fourth effect_3">
                                            <span class="button_value">Learn More</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div> 
                    <div class="power_button_group">
                        <a href="#" class="power_button alt fifth effect_1">
                            <span class="button_value">See All Causes</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="section bg_image_1">
                <div class="container">
                    <div class="urgent_cause_block fourth">
                        <div class="row">
                            <div class="col-lg-5 col-md-6">
                                <div class="urgent_cause_heading">
                                    <div class="power_highlight_tag fourth">Urgent Cause</div>
                                    <h3>Building children hospital in south sudan</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur rhoncus nisi justo eget.</p>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-6">
                                <div class="power_progress_content">
                                    <div class="power_progress_inner">
                                        <div class="power_progress_bar_back">
                                            <div class="power_progress_bar" style={{"max-width": "95%;"}}><span class="power_progress_value">95%</span></div>
                                        </div>
                                        <div class="power_progress_amount"><span><i class="ion-md-wifi"></i> <b>Goal:</b> $1000</span> <span><i class="ion-logo-usd"></i> <b>Raised:</b> $950</span></div>
                                    </div>
                                    <div class="give_donation">
                                        <form action="registration" method="POST">
                                            <div class="donation_amount_tab">
                                                <div class="select_currency_box">
                                                    <div class="currency_dropdown">
                                                        <select class="select_dropdown_value">
                                                            <option value="1">$</option>
                                                            <option value="2">#</option>
                                                            <option value="3">@</option>
                                                        </select>
                                                    </div>
                                                    <div class="currency">Amount</div>
                                                </div>
                                                <div class="select_amount_box">
                                                    <div class="selectdonate">Select Donation</div>
                                                    <div class="select_amount"><span class="dot"></span>100</div>
                                                    <div class="select_amount"><span class="dot"></span>150</div>
                                                    <div class="select_amount custom"><span class="dot"></span>Custom
                                                        <input type="text" class="custom_field"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="power_button_group">
                                                <input class="power_button effect_1" type="submit" value="Donate Now" name="submit"/>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section events">
                <div class="container">
                    <div class="power_heading_wrapper text-center">
                        <h1 class="power_title ">Through the year 2020 <br/> we've bunch of <span class="primary-color">charity events</span></h1>
                        <div class="power_title_line fourth"></div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="power_events third">
                                <div class="power_events_wrapper">
                                    <div class="power_events_image">
                                        <img class="primary_img" src="images/events/1.jpg" alt=""/>
                                        <div class="power_events_date"><span class="day">04</span><span class="month">May</span></div>
                                    </div>
                                    <div class="power_events_content">
                                        <h3><a href="#">Volunteer Training</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nisi justo, sed congue erat condimentum eget.</p>
                                        <div class="power_events_bottom">
                                            <a href="#">Free Booking</a> <span>30 seats left</span>
                                        </div>
                                        <h6 class="power_events_location"><i class="ion-ios-pin"></i> 23/4 RK Street, United States of America</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="power_events fourth">
                                <div class="power_events_wrapper">
                                    <div class="power_events_image">
                                        <img class="primary_img" src="images/events/2.jpg" alt=""/>
                                        <div class="power_events_date"><span class="day">02</span><span class="month">May</span></div>
                                    </div>
                                    <div class="power_events_content">
                                        <h3><a href="#">Social Work Conference</a></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nisi justo, sed congue erat condimentum eget.</p>
                                        <div class="power_events_bottom">
                                            <a href="#">Book Now</a> <span>10 seats left</span>
                                        </div>
                                        <h6 class="power_events_location"><i class="ion-ios-pin"></i> 23/4 RK Street, United States of America</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="power_events_list fifth">
                                <div class="power_events_list_wrapper">
                                    <div class="power_events_list_image">
                                        <img class="primary_img" src="images/events/thumbnail1.jpg" alt=""/>
                                    </div>
                                    <div class="power_events_list_content">
                                        <h6><a href="#">Healthy food campaign for children</a></h6>
                                        <div class="power_events_list_date">15 April 2020</div>
                                    </div>
                                </div>
                            </div>

                            <div class="power_events_list">
                                <div class="power_events_list_wrapper">
                                    <div class="power_events_list_image">
                                        <img class="primary_img" src="images/events/thumbnail2.jpg" alt=""/>
                                    </div>
                                    <div class="power_events_list_content">
                                        <h6><a href="#">Fund collection for cancer research team</a></h6>
                                        <div class="power_events_list_date">21st February 2020</div>
                                    </div>
                                </div>
                            </div>

                            <div class="power_events_list fourth">
                                <div class="power_events_list_wrapper">
                                    <div class="power_events_list_image">
                                        <img class="primary_img" src="images/events/thumbnail3.jpg" alt=""/>
                                    </div>
                                    <div class="power_events_list_content">
                                        <h6><a href="#">Challenges we face to establish school</a></h6>
                                        <div class="power_events_list_date">19th February 2020</div>
                                    </div>
                                </div>
                            </div>

                            <div class="power_events_list sixth">
                                <div class="power_events_list_wrapper">
                                    <div class="power_events_list_image">
                                        <img class="primary_img" src="images/events/thumbnail4.jpg" alt=""/>
                                    </div>
                                    <div class="power_events_list_content">
                                        <h6><a href="#">Charity marathon race event, California</a></h6>
                                        <div class="power_events_list_date">22nd January 2020</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="banner_2">
                <div class="banner_imageblock col-md-6 d-none d-md-block">
                    <div class="banner_img_holder"></div>
                </div>
                <div class="container">
                    <div class="call_to_action">
                        <div class="row">
                            <div class="col-lg-6 offset-lg-6 col-md-6 offset-md-6">
                                <div class="call_to_inner">
                                    <h1>Be A volunteer</h1>
                                    <h6>There will be a day when we get to celebrate <br/> every person on the planet having access to clean</h6>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                        <li>Curabitur rhoncus nisi justo, sed congue erat condimentum eget</li>
                                    </ul>
                                    <div class="power_button_group">
                                        <a href="#" class="power_button alt effect_1">
                                            <span class="button_value">Be a Volunteer</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="section partners">
                <div class="container">
                    <div class="power_heading_wrapper text-center">
                        <h1 class="power_title ">We've worked with so many <br/> <span class="third-color">amazing partners</span> in our charity journey</h1>
                        <div class="power_title_line fifth"></div>
                        <p>We offer a full line of charity to solve the problems exist in the world. We works so hard on the causes we are supporting. <br/> 
                        We want all of you in the mission. We offer a full line of charity to solve the</p>
                    </div>
                    <div class="power_partners_list">
                        <div class="row">
                            <div class="offset-lg-1 offset-md-2"></div>
                            <div class="col-lg-2 col-md-4 col-sm-4">
                                <div class="power_partner">
                                    <a href="#"><img src="images/partners/logo1.png" alt=""/></a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4">
                                <div class="power_partner">
                                    <a href="#"><img src="images/partners/logo2.png" alt=""/></a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4">
                                <div class="power_partner">
                                    <a href="#"><img src="images/partners/logo3.png" alt=""/></a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4">
                                <div class="power_partner">
                                    <a href="#"><img src="images/partners/logo4.png" alt=""/></a>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 col-sm-4">
                                <div class="power_partner">
                                    <a href="#"><img src="images/partners/logo5.png" alt=""/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="testimonials bg_image_3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-8">
                            <div class="owl-carousel owl-theme power_testimonialcarousel testimonial_type1 second">
                                <div class="item">
                                    <div class="power_testimonial_carousel_item">
                                        <div class="power_testimonial_carousel_reviewer_content">
                                            <p class="power_testimonial_carousel_reviewer_text">???Lorem ipsum dolor sit amet consecteur adipis Ut eniexercitat ullamco laborisnisi ut aliquip commodo labor doloremagna aliqua. Ut enim nim veniam lorem ipsum dolor sit amet consect???</p>
                                            <div class="power_testimonial_carousel_reviewer_details">
                                                <h4 class="power_testimonial_carousel_reviewer_name">Jessica ballinger</h4>
                                                <h6 class="power_testimonial_carousel_reviewer_company">California</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="power_testimonial_carousel_item">
                                        <div class="power_testimonial_carousel_reviewer_content">
                                            <p class="power_testimonial_carousel_reviewer_text">???Lorem ipsum dolor sit amet consecteur adipis Ut eniexercitat ullamco laborisnisi ut aliquip commodo labor doloremagna aliqua. Ut enim nim veniam lorem ipsum dolor sit amet consect???</p>
                                            <div class="power_testimonial_carousel_reviewer_details">
                                                <h4 class="power_testimonial_carousel_reviewer_name">Jessica ballinger</h4>
                                                <h6 class="power_testimonial_carousel_reviewer_company">California</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="power_testimonial_carousel_item">
                                        <div class="power_testimonial_carousel_reviewer_content">
                                            <p class="power_testimonial_carousel_reviewer_text">???Lorem ipsum dolor sit amet consecteur adipis Ut eniexercitat ullamco laborisnisi ut aliquip commodo labor doloremagna aliqua. Ut enim nim veniam lorem ipsum dolor sit amet consect???</p>
                                            <div class="power_testimonial_carousel_reviewer_details">
                                                <h4 class="power_testimonial_carousel_reviewer_name">Jessica ballinger</h4>
                                                <h6 class="power_testimonial_carousel_reviewer_company">California</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-4"></div>
                    </div>
                </div>
            </div>

            <div class="section blog">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-12">
                            <div class="power_heading_wrapper">
                                <h1 class="power_title ">Latest News</h1>
                                <p>We offer a full line of charity to solve the problems exist in the world. We works so hard</p>
                                <a href="#" class="more_button">Read All</a>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-12">
                            <div class="row">
                                <div class="col-lg-4 col-md-6">
                                    <div class="power_blog fifth">
                                        <div class="power_blog_wrapper">
                                            <div class="power_blog_image">
                                                <div class="power_blog_date">
                                                    <span class="day">13</span>
                                                    <span class="month">October 2019</span>
                                                </div>
                                            </div>
                                            <div class="power_blog_content">
                                                <h5><a href="#">2020 is the golden era for child care charity programs for oellfare charity </a></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nisi justo, sed congue erat condimentum eget.</p>
                                                <div class="power_button_group">
                                                    <a href="#" class="power_button alt fifth effect_1">
                                                        <span class="button_value">Read More</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="power_blog third">
                                        <div class="power_blog_wrapper">
                                            <div class="power_blog_image">
                                                <div class="power_blog_date">
                                                    <span class="day">09</span>
                                                    <span class="month">October 2019</span>
                                                </div>
                                            </div>
                                            <div class="power_blog_content">
                                                <h5><a href="#">Our work plan to control the child abouse in north asian country </a></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nisi justo, sed congue erat condimentum eget.</p>
                                                <div class="power_button_group">
                                                    <a href="#" class="power_button alt third effect_1">
                                                        <span class="button_value">Read More</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-6">
                                    <div class="power_blog fourth">
                                        <div class="power_blog_wrapper">
                                            <div class="power_blog_image">
                                                <div class="power_blog_date">
                                                    <span class="day">02</span>
                                                    <span class="month">October 2019</span>
                                                </div>
                                            </div>
                                            <div class="power_blog_content">
                                                <h5><a href="#">Hospital establishment for the children of several African country</a></h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus nisi justo, sed congue erat condimentum eget.</p>
                                                <div class="power_button_group">
                                                    <a href="#" class="power_button alt fourth effect_1">
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
                </div>
            </div>

            <div class="newsletter third">
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
                                    <input type="text" name="email" class="form-control" placeholder="Your E-mail"/>
                                    <button type="submit" name="submit" class="newsletter_button"><i class="ion-ios-send"></i></button>
                                </form>
                            </div>
                        </div>
                        <div class="offset-lg-1 col-lg-3 col-md-3">
                            <div class="quickcontact">
                                <img src="images/phone_white.png" alt="phone"/><div><span>Contact us to donate</span><br/>(+123)987.654.32</div>
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
