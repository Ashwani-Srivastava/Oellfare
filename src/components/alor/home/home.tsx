import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'alor-home',
    styleUrl: 'home.css',
})
export class AlorHome {

    render() {
        return [

            <div class="header">,
                <div class="container">
                    <div class="logo">
                        <a href="index.html"><img src="/assets/alor/images/logo.png" alt=" " /></a>
                    </div>
                    <div class="logo-right">
                        <span class="menu"><img src="/assets/alor/images/menu.png" alt=" "/></span>
                        <ul class="nav1">
                            <li class="cap"><a href="index.html" class="act">Home</a></li>
                            <li><a href="#history" class="scroll">History</a></li>
                            <li><a href="#about" class="scroll">About Us</a></li>
                            <li><a href="#activities" class="scroll">Activities</a></li>
                            <li><a href="#childrens" class="scroll">Childrens</a></li>
                            <li><a href="#team" class="scroll">Team Member</a></li>
                            <li><a href="#news" class="scroll">News</a></li>
                            <li><a href="#contact" class="scroll">Contact</a></li>
                        </ul>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>,

            <div class="banner">
                { /** banner */ },
                <div class="container">
                    <div  id="top" class="callbacks_container wow fadeInUp" data-wow-delay="0.5s">
                        <ul class="rslides" id="slider3">
                            <li>
                                <div class="banner-info">
                                    <h1>WELCOME TO ALOR BHUBON</h1>
                                    <a href="#" class="hvr-bounce-to-right read">Read More</a>
                                </div>
                            </li>
                            <li>
                                <div class="banner-info">
                                    <h1>WELCOME TO CHARITY WELFARE</h1>
                                    <a href="#" class="hvr-bounce-to-right read">Read More</a>
                                </div>
                            </li>
                            <li>
                                <div class="banner-info">
                                    <h1>WELCOME TO BHUBON WELFARE</h1>
                                    <a href="#" class="hvr-bounce-to-right read">Read More</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                { /** //banner */ },
            </div>,


            <div class="banner-bottom">
                { /** banner-bottom */ },
                <div class="container">
                    <div class="banner-bottom-grids">
                        <div class="forced">
                            <p>"Let every children forced to be on street have education."</p>
                        </div>
                        <div class="donate">
                            <div class="Alor">
                                <p>–Munzurul Hasan, Alor Bhubon</p>
                            </div>
                            <div class="us">
                                <a href="#" class="hvr-bounce-to-right read">Donate Us</a>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //banner-bottom */ },
            </div>,

            <div id="history" class="history">
                { /** history */ },
                <div class="container">
                    <h3>HISTORY</h3>
                    <p class="libero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        In lobortis, ante interdum vehicula pretium, dui enim porta lectus,
                        non euismod tortor ante eu libero. Aenean blandit luctus tortor vitae interdum.
                        Etiam egestas purus lorem, eget tempus odio placerat id. Integer eu gravida nibh.</p>
                    <div class="history-grids">
                        <div class="col-md-6 history-grid">
                            <img class="one" src="/assets/alor/images/1.png" alt=" " />
                        </div>
                        <div class="col-md-6 history-grid">
                            <div class="history-grid1">
                                <div class="history-grid-left">
                                    <span> </span>
                                </div>
                                <div class="history-grid-right">
                                    <h4>Dhaka Branch</h4>
                                    <p>We Open in Jamalpur Branch in 2010</p>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            <div class="history-grid1">
                                <div class="history-grid-left1">
                                    <span> </span>
                                </div>
                                <div class="history-grid-right">
                                    <h4>Manikgonj Branch</h4>
                                    <p>We Open in Jamalpur Branch in 2010</p>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            <div class="history-grid1">
                                <div class="history-grid-left2">
                                    <span> </span>
                                </div>
                                <div class="history-grid-right">
                                    <h4>Jamalpur Branch</h4>
                                    <p>We Open in Jamalpur Branch in 2010</p>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            <div class="history-grid1">
                                <div class="history-grid-left3">
                                    <span> </span>
                                </div>
                                <div class="history-grid-right">
                                    <h4>Natore Branch</h4>
                                    <p>We Open in Jamalpur Branch in 2010</p>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //history */ },
            </div>,

            <div class="lorum">
                { /** lorum */ },
                <div class="container">
                    <div class="lorum-info">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            <span>In lobortis, ante interdum vehicula</span></h3>
                    </div>
                </div>
                { /** //lorum */ },
            </div>,

            <div id="about" class="about">
                { /** about */ },
                <div class="container">
                    <h3>ABOUT US</h3>
                    <div class="about-top-text">
                        <p>"We believe in a world where no child ever has to live on the streets"</p>
                    </div>
                    <p class="unique">Over the past 45 years,we worked in over 4 District to provide youth with practical, 
                        hands-on-skills that they can apply to entrepreneurial endeavors and entry-level jobs.
                        We do not believe in providing hand-outs. Our goal is to provide sustainable skills 
                        through education, which can be used over a long period of time. Through a unique 
                        Train-the-Trainer model, Street Kids provides educational workshops on relevant 
                        business skills to Master Trainers and Youth Workers based in developing countries.</p>
                    <div class="about-grids">
                        <div class="col-md-6 about-grid">
                            <h2>Child Friendly Stations</h2>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{'width': '60%' }} >
                                    <span class="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div class="about-grid-fig">
                                <img src="/assets/alor/images/2.jpg" alt=" " />
                                <a class="play-icon popup-with-zoom-anim" href="#small-dialog">
                                    <span> </span>
                                </a>
                                <div id="small-dialog" class="mfp-hide">
                                    <iframe src="https://player.vimeo.com/video/10260175?title=0&byline=0&portrait=0" width="500" height="281" frameborder="0"></iframe>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 about-grid">
                            <h2 class="community">Community Level</h2>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{'width': '60%;' }}>
                                    <span class="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div class="mission-vision">
                                <div class="mission-grid">
                                    <h4>Our Mission:</h4>
                                    <div class="mission">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            In lobortis, ante interdum vehicula pretium"</p>
                                    </div>
                                </div>
                                <div class="vission-grid">
                                    <h4>Our Vission:</h4>
                                    <div class="mission">
                                        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                            In lobortis, ante interdum vehicula pretium"</p>
                                    </div>
                                </div>
                                <div class="more">
                                    <a href="#" class="hvr-bounce-to-right">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //about */ },
            </div>,

            <div id="activities" class="activities">
                { /** activities */ },
                <div class="container">
                    <h3>OUR ACTIVITIES</h3>
                    <p class="libero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        In lobortis, ante interdum vehicula pretium, dui enim porta lectus,
                        non euismod tortor ante eu libero. Aenean blandit luctus tortor vitae interdum.
                        Etiam egestas purus lorem, eget tempus odio placerat id. Integer eu gravida nibh.</p>
                    <div class="activities-grids">
                        <div class="col-md-4 activities-grid">
                            <div class="activities-grid-left">
                                <span> </span>
                            </div>
                            <div class="activities-grid-right">
                                <h4>Street Level</h4>
                                <p>At street level we strive to meet the immediate needs of children 
                                    at risk on the streets and platforms of India today. We have created 
                                    a number of ‘child friendly stations’ with the help and engagement 
                                    of the people who work at them, who now look out for and help children 
                                    alone and at risk.</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="col-md-4 activities-grid">
                            <div class="activities-grid-left1">
                                <span> </span>
                            </div>
                            <div class="activities-grid-right">
                                <h4>Community Level</h4>
                                <p>At community level we work to make children on the streets 
                                    visible to society and to help people understand the issues that 
                                    cause children to run away and that face them on the streets and 
                                    on the platforms. We invest time and skills in preventative intervention, 
                                    with the aim of creating ‘safety nets’ within communities to catch 
                                    children who are at risk of running away before they do so.</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="col-md-4 activities-grid">
                            <div class="activities-grid-left2">
                                <span> </span>
                            </div>
                            <div class="activities-grid-right">
                                <h4>Government Level</h4>
                                <p>At government level we work to persuade policy makers that 
                                    children living on the streets should be higher on India’s 
                                    political agenda and that government policies should provide greater 
                                    protection and opportunity for them</p>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="history-faq-grids">
                        <div class="col-md-6 history-faq-grid">
                            <h4>Our History</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ 'width': '60%' }}>
                                    <span class="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div class="sap_tabs">	
                                <div id="horizontalTab" style={{'display': 'block', 'width': '100%', 'margin': '0px' }}>
                                    <ul class="resp-tabs-list">
                                        <li class="resp-tab-item grid1" aria-controls="tab_item-0" role="tab"><span>2010</span></li>
                                        <li class="resp-tab-item grid2" aria-controls="tab_item-1" role="tab"><span>2011</span></li>
                                        <li class="resp-tab-item grid3" aria-controls="tab_item-2" role="tab"><span>2012</span></li>
                                        <li class="resp-tab-item grid5" aria-controls="tab_item-3" role="tab"><span>2014</span></li>
                                        <div class="clear"></div>
                                    </ul>				  	 
                                    <div class="resp-tabs-container">
                                        <div class="tab-1 resp-tab-content" aria-labelledby="tab_item-0">
                                            <div class="facts">
                                                <ul class="tab_list">
                                                    <li><a href="#">It is a long established fact that a reader will be distracted by the readable content of a page when 
                                                            looking at its layout.</a></li>
                                                    <li><a href="#">The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                                                            of letters readable English</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tab-1 resp-tab-content" aria-labelledby="tab_item-1">
                                            <div class="facts">
                                                <ul class="tab_list">
                                                    <li><a href="#">The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                                                            of letters readable English</a></li>
                                                    <li><a href="#">It is a long established fact that a reader will be distracted by the readable content of a page when 
                                                            looking at its layout.</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tab-1 resp-tab-content" aria-labelledby="tab_item-2">
                                            <div class="facts">
                                                <ul class="tab_list">
                                                    <li><a href="#">It is a long established fact that a reader will be distracted by the readable content of a page when 
                                                            looking at its layout.</a></li>
                                                    <li><a href="#">The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                                                            of letters readable English</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="tab-1 resp-tab-content" aria-labelledby="tab_item-3">
                                            <div class="facts">
                                                <ul class="tab_list">
                                                    <li><a href="#">The point of using Lorem Ipsum is that it has a more-or-less normal distribution 
                                                            of letters readable English</a></li>
                                                    <li><a href="#">It is a long established fact that a reader will be distracted by the readable content of a page when 
                                                            looking at its layout.</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-6 history-faq-grid">
                            <h4>Faq</h4>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ 'width': '60%' }}>
                                    <span class="sr-only">60% Complete</span>
                                </div>
                            </div>
                            <div class="faq-info">
                                <div class="eiusmod">
                                    <p class="para">Enim eiusmod high life accusamus?</p>
                                    <p class="para1">Anim pariatur cliche reprehenderit, enim eiusmod 
                                        high life accusamus terry richardson ad squid. 3 wolf moon officia 
                                        aute, non cupidatat skateboard dolor brunch. Food truck quinoa 
                                        nesciunt laborum.</p>
                                </div>
                                <div class="keffiyeh">
                                    <p>Nihil anim keffiyeh helvetica?</p>
                                </div>
                                <div class="butcher">
                                    <p>Vegan excepteur butcher vice lomo?</p>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //activities */ },
            </div>,

            <div id="childrens" class="our-childrens">
                { /** our-childrens */ },
                <div class="container">
                    <h3>OUR CHILDRENS</h3>
                    <div class="our-childrens-grids">
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/3.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/3.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/4.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/4.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/5.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/5.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/6.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/6.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                    <div class="our-childrens-grids">
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/7.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/7.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/8.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/8.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/9.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/9.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="col-md-3 our-childrens-grid">
                            <a href="/assets/alor/images/10.jpg" class="b-link-stripe b-animate-go   swipebox"  title="">
                                <img class="one" src="/assets/alor/images/10.jpg" alt=" " title="Science Laboratory" />
                                <div class="b-wrapper">
                                    <h2 class="b-animate b-from-left    b-delay03 ">

                                        <div class="text-info">
                                            <img class="zoom img-responsive" src="/assets/alor/images/eye.png" alt=""/>
                                            <h4>About Robin</h4>
                                            <p>I am Robin.I read In informal school in
                                                <span>Dhaka Branch.</span></p>
                                        </div>
                                    </h2>
                                </div>
                            </a>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //our-childrens */ }	,
            </div>,

            <div class="work">
                { /** work */ },
                <div class="container">
                    <h3>OUR WORK PROCESS</h3>
                    <div class="work-grids">
                        <div class="col-md-2 work-grid">
                            <div class="thumbnail">
                                <div class="first-step">
                                    <span> </span>
                                </div>
                                <div class="caption">
                                    <h4>First step</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        In lobortis</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 work-grid">
                            <div class="thumbnail">
                                <div class="first-step1">
                                    <span> </span>
                                </div>
                                <div class="caption">
                                    <h4>Second step</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        In lobortis</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 work-grid">
                            <div class="thumbnail">
                                <div class="first-step2">
                                    <span> </span>
                                </div>
                                <div class="caption">
                                    <h4>Third step</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        In lobortis</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 work-grid">
                            <div class="thumbnail">
                                <div class="first-step3">
                                    <span> </span>
                                </div>
                                <div class="caption">
                                    <h4>Fourth step</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        In lobortis</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 work-grid">
                            <div class="thumbnail">
                                <div class="first-step4">
                                    <span> </span>
                                </div>
                                <div class="caption">
                                    <h4>Fifth step</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        In lobortis</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2 work-grid">
                            <div class="thumbnail">
                                <div class="first-step5">
                                    <span> </span>
                                </div>
                                <div class="caption">
                                    <h4>Last step</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                        In lobortis</p>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //work */ },
            </div>,

            <div id="team" class="team">
                { /** team */ },
                <div class="container">
                    <h3>MEET OUR TEAM</h3>
                    <div class="team-grids">
                        <div class="col-md-3 team-grid">
                            <div class="thumbnail team-grid-main">
                                <img src="/assets/alor/images/12.jpg" alt=" " />
                                <div class="caption pretium">
                                    <h4>Munzurul Hasan</h4>
                                    <p class="founder">Founder,Alor Bhubon</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis,
                                        ante interdum vehicula pretium, dui enim porta lectus, non euismod tortor 
                                        ante eu libero. Aenean blandit luctus tortor vitae interdum. Etiam egestas
                                        purus lorem, eget tempus odio placerat id.</p>
                                    <ul>
                                        <li><a href="#" class="facebook"> </a></li>
                                        <li><a href="#" class="twitter"> </a></li>
                                        <li><a href="#" class="g-plus"> </a></li>
                                        <li><a href="#" class="in"> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 team-grid">
                            <div class="thumbnail team-grid-main">
                                <img src="/assets/alor/images/13.jpg" alt=" " />
                                <div class="caption pretium">
                                    <h4>Munzurul Hasan</h4>
                                    <p class="founder">Founder,Alor Bhubon</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis,
                                        ante interdum vehicula pretium, dui enim porta lectus, non euismod tortor 
                                        ante eu libero. Aenean blandit luctus tortor vitae interdum. Etiam egestas
                                        purus lorem, eget tempus odio placerat id.</p>
                                    <ul>
                                        <li><a href="#" class="facebook"> </a></li>
                                        <li><a href="#" class="twitter"> </a></li>
                                        <li><a href="#" class="g-plus"> </a></li>
                                        <li><a href="#" class="in"> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 team-grid">
                            <div class="thumbnail team-grid-main">
                                <img src="/assets/alor/images/14.jpg" alt=" " />
                                <div class="caption pretium">
                                    <h4>Munzurul Hasan</h4>
                                    <p class="founder">Founder,Alor Bhubon</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis,
                                        ante interdum vehicula pretium, dui enim porta lectus, non euismod tortor 
                                        ante eu libero. Aenean blandit luctus tortor vitae interdum. Etiam egestas
                                        purus lorem, eget tempus odio placerat id.</p>
                                    <ul>
                                        <li><a href="#" class="facebook"> </a></li>
                                        <li><a href="#" class="twitter"> </a></li>
                                        <li><a href="#" class="g-plus"> </a></li>
                                        <li><a href="#" class="in"> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 team-grid">
                            <div class="thumbnail team-grid-main">
                                <img src="/assets/alor/images/11.jpg" alt=" " />
                                <div class="caption pretium">
                                    <h4>Munzurul Hasan</h4>
                                    <p class="founder">Founder,Alor Bhubon</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis,
                                        ante interdum vehicula pretium, dui enim porta lectus, non euismod tortor 
                                        ante eu libero. Aenean blandit luctus tortor vitae interdum. Etiam egestas
                                        purus lorem, eget tempus odio placerat id.</p>
                                    <ul>
                                        <li><a href="#" class="facebook"> </a></li>
                                        <li><a href="#" class="twitter"> </a></li>
                                        <li><a href="#" class="g-plus"> </a></li>
                                        <li><a href="#" class="in"> </a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //team */ },
            </div>,

            <div class="liton">
                { /** liton */ },
                <div class="container">
                    <div class="lton-inf">
                        <div class="wmuSlider example1">
                            <div class="wmuSliderWrapper">
                                <article style={{'position': 'absolute', 'width': '100%', 'opacity': '0' }}> 
                                    <div class="banner-wrap">
                                        <div class="liton-inf">
                                            <div class="liton-fig">
                                                <span> </span>
                                            </div>
                                            <div class="liton-info">
                                                <h3>Liton Dev</h3>
                                                <p>Volunteer, Porshee Foundation</p>
                                            </div>
                                            <p class="tortor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, ante interdum vehicula pretium, dui enim porta
                                                lectus, non euismod tortor ante eu libero.</p>
                                        </div>
                                    </div>
                                </article>
                                <article style={{'position': 'absolute', 'width': '100%', 'opacity': '0' }}> 
                                    <div class="banner-wrap">
                                        <div class="liton-inf">
                                            <div class="liton-fig1">
                                                <span> </span>
                                            </div>
                                            <div class="liton-info">
                                                <h3>Adom Simmy</h3>
                                                <p>Volunteer, Porshee Foundation</p>
                                            </div>
                                            <p class="tortor">Consectetur ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, ante interdum vehicula pretium, dui enim porta
                                                lectus, non euismod tortor ante eu libero.</p>
                                        </div>
                                    </div>
                                </article>
                                <article style={{'position': 'absolute', 'width': '100%', 'opacity': '0' }}> 
                                    <div class="banner-wrap">
                                        <div class="liton-inf">
                                            <div class="liton-fig2">
                                                <span> </span>
                                            </div>
                                            <div class="liton-info">
                                                <h3>Micheal Smith</h3>
                                                <p>Volunteer, Porshee Foundation</p>
                                            </div>
                                            <p class="tortor">Euismod ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, ante interdum vehicula pretium, dui enim porta
                                                lectus, non euismod tortor ante eu libero.</p>
                                        </div>
                                    </div>
                                </article>
                                <ul class="wmuSliderPagination">
                                    <li><a href="#" class="">0</a></li>
                                    <li><a href="#" class="">1</a></li>
                                    <li><a href="#" class="wmuActive">2</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                { /** //liton */ },
            </div>,

            <div id="news" class="news">
                { /** news */ },
                <div class="container">
                    <h3>NEWS</h3>
                    <div class="news-grids">
                        <div class="col-md-5 news-grid">
                            <div class="news-grd">
                                <img src="/assets/alor/images/15.jpg" alt=" " />
                                <div class="video">
                                    <a href="#"><img src="/assets/alor/images/8.png" alt=" " /></a>
                                </div>
                            </div>
                            <div class="news-grd-text">
                                <p class="date">25 MAY 2015</p>
                                <h4>Why do children end up on the streets?</h4>
                                <p class="children">Children end up on the streets for a mixture of 
                                    reasons, though poverty is usually at the heart of the problem. 
                                    In the countries where we work, conflict and poverty combine to 
                                    force children onto the streets. In many cases a child's family 
                                    can no longer afford to care for them properly or may need their 
                                    help to supplement the family income and help put food on the table.</p>
                                <div class="more1">
                                    <a href="#" class="hvr-bounce-to-right">Read More</a>
                                </div>
                                <div class="edit">
                                    <p>Hasan</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-7 news-grid">
                            <div class="news-income">
                                <div class="news-grid-left">
                                    <img class="steel" src="/assets/alor/images/16.jpg" alt=" " />
                                    <div class="gallery">
                                        <a href="#"><img src="/assets/alor/images/9.png" alt=" " /></a>
                                    </div>
                                </div>
                                <div class="news-grid-right">
                                    <div class="news-grd-text1">
                                        <p class="date">01 DECEMBER 2014</p>
                                        <h4>BeReviews was a awesome envent in dhaka</h4>
                                        <p class="children">With a blow from the top-maul Ahab knocked 
                                            off the steel head of the lance, and then handing to the steel</p>
                                        <div class="more1">
                                            <a href="#" class="hvr-bounce-to-right">Read More</a>
                                        </div>
                                        <div class="edit">
                                            <p>Litoon Dev</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                            <div class="news-income">
                                <div class="news-grid-left">
                                    <img class="steel" src="/assets/alor/images/17.jpg" alt=" " />
                                    <div class="gallery">
                                        <a href="#"><img src="/assets/alor/images/10.png" alt=" " /></a>
                                    </div>
                                </div>
                                <div class="news-grid-right">
                                    <div class="news-grd-text1">
                                        <p class="date">03 NOVEMBER 2014</p>
                                        <h4>Play list of old bangle music and gajal countries</h4>
                                        <p class="children">With a blow from the top-maul Ahab knocked 
                                            off the steel head of the lance, and then handing to the steel</p>
                                        <div class="more1">
                                            <a href="#" class="hvr-bounce-to-right">Read More</a>
                                        </div>
                                        <div class="edit">
                                            <p>Rabbani</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="clearfix"> </div>
                            </div>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //news */ },
            </div>,

            <div id="contact" class="contact">
                { /** contact */ },
                <div class="container">
                    <div class="contact-header">
                        <h3>CONTACT ALOR BHUBON</h3>
                    </div>
                    <div class="map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1973950112197!2d90.39410240000001!3d23.7403393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8bfe09f2fc9%3A0x1da49bc0abfd4f7a!2sShahbagh%2C+Dhaka%2C+Bangladesh!5e0!3m2!1sen!2sin!4v1432554662723" frameborder="0" style={{ 'border' : '0' }}></iframe>
                        <div class="map-color">
                            <div class="contact-info">
                                <h4>Contact Info</h4>
                                <p>252, Elephant Road, Al-Baraka Tower,
                                    <span>Kataban Road, Dhaka, Bangladesh</span>
                                    Phone Number: 01918-009393</p>
                                <form>
                                    <input type="text" value="Name" required={true} />
                                    <input type="email" value="Email" required={true} />
                                    <input type="text" value="Subject" required={true} />
                                    <textarea required={true} >Message...</textarea>
                                    <input type="submit" value="Send Message" />
                                </form>
                            </div>
                            <div class="clearfix"> </div>
                        </div>
                    </div>

                </div>
                { /** contact */ },
            </div>,

            <div class="footer">
                { /** footer */ },
                <div class="container">
                    <div class="footer-grids">
                        <div class="footer-grid-left">
                            <a href="index.html"><img src="/assets/alor/images/footer-logo.png" alt=" " /></a>
                        </div>
                        <div class="footer-grid-center">
                            <p>Template by<a href="http://w3layouts.com/"> W3layouts</a></p>
                        </div>
                        <div class="footer-grid-right">
                            <ul>
                                <li><a href="#" class="f"> </a></li>
                                <li><a href="#" class="t"> </a></li>
                                <li><a href="#" class="g"> </a></li>
                                <li><a href="#" class="i"> </a></li>
                            </ul>
                        </div>
                        <div class="clearfix"> </div>
                    </div>
                </div>
                { /** //footer */ }
            </div>,

        ];
    }

}
