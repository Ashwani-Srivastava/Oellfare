import { Component, h, Prop }   from    '@stencil/core';

import { HurumaBase         }   from    'huruma/base/base'
import { HelmetService      }   from    'common/helmet.service'
import { Ngo                }   from    'ngo/ngo.model';

import * as ngo                 from    'assets/ngo.json';

@Component({
    tag                         :   'huruma-about',
    styleUrl                    :   'about.css',
})
export class HurumaAbout {

    @Prop() ngo                 :   Ngo                 =   new Ngo(ngo);

    constructor () {
        console.log('About :: Constructor');
    }

    async componentWillLoad() {
        console.log('About :: Component will load');
    }

    async componentDidLoad() {
        console.log('About :: Component did load');

        HurumaBase.setupEssentials();
    }


    render() {

        return (

        <div class="page-wrapper">

            <huruma-header-trans ngo={this.ngo}></huruma-header-trans>

            <huruma-title name='About us' bg-image='/assets/images/team-008x1440.jpg'></huruma-title>

            <section class="about-section about-page pt-100 pb-100">
                { /** Start About Area */ }
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="about-item">
                                <span>
                                    <i class="flaticon-care-about-plants"></i>
                                    About us
                                </span>
                                <h3>The Organization Focused On Building People</h3>
                                <p class="main-color">
                                        { this.ngo.mission }
                                </p>
                                <p> { this.ngo.description } </p>
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="about-image">
                                <img src="/assets/huruma/img/about/1.jpg" class="shadow about-page-img" alt="image" />
                                <img src="/assets/huruma/img/about/2.jpg" class="shadow" alt="image" />
                            </div>

                            <div class="about-video">
                                <a href="https://www.youtube.com/watch?v=uemObN8_dcw" class="video-btn popup-youtube">
                                    <i class="bx bx-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                { /** End About Area */ }
            </section>

            <section class="mission-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6 p-0">
                            <div class="mission-image" style={{ 'background': `url(${this.ngo.photos[4]})` }}>
                                <img src={ this.ngo.photos[4] } alt="image" />
                            </div>
                        </div>

                        <div class="col-lg-6">
                            <div class="mission-tab">
                                <span>
                                    <i class="flaticon-target"></i>
                                    Our Mission
                                </span>
                                <h2>Concern about Our Mission</h2>
                                <div class="tab mission-list-tab">
                                    <ul class="tabs">
                                        <li>
                                            <a href="#">
                                                Our Mission
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Our Vision
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Why your help matters?
                                            </a>
                                        </li>
                                    </ul>
                                    
                                    <div class="tab_content">
                                        <div class="tabs_item">
                                            <p> { this.ngo.mission } </p>
                                        </div>

                                        <div class="tabs_item">
                                            <p> { this.ngo.vision } </p>

                                        </div>

                                        <div class="tabs_item">
                                            { this.ngo.whyHelpMatters.map( help => (
                                                <p> { help.text } </p>
                                            )) }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            { /** Start Team Area */ }
            <section class="team-section pt-100 pb-70">
                <div class="container">
                    <div class="team-title-area">
                        <div class="row align-items-center">
                            <div class="col-lg-7">
                                <div class="section-title text-left">
                                    <span>
                                        <i class="flaticon-support"></i>
                                        Meet Our Team
                                    </span>
                                    <h2> Talented Team behind { this.ngo.name } </h2>
                                    <p> Teamwork is the ability to work together toward a common vision </p>
                                </div>
                            </div>

                            <div class="col-lg-5">
                            </div>
                        </div>
                    </div>

                    <div class="row">

                        {this.ngo.team.map(member => (
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <huruma-member-card member={member}></huruma-member-card>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
            { /** End Team Area */ }

            <huruma-insta-slider ngo={this.ngo}></huruma-insta-slider>

            <huruma-footer ngo={this.ngo}></huruma-footer>,

            <span> { HelmetService.render(this.ngo, 'About') } </span>

        </div>

        );

    }

}
