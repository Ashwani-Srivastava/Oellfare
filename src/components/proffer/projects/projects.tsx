import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    'assets/ngo.json';

declare var $:any;

@Component({
    tag                         :   'proffer-projects',
    styleUrl                    :   'projects.css',
})
export class ProfferProjects {

    @Prop() ngo                 :   any                 =   ngo

    constructor () {
        console.log('Projects :: Constructor');
    }

    async componentWillLoad() {
        console.log('Projects :: Component will load');
    }

    async componentDidLoad() {
        console.log('Projects :: Component did load');

        var navbar = $(".navigation-holder").last();
        var openBtn = $(".navbar-header .open-btn").last();
        var closeBtn = $(".navigation-holder .close-navbar").last();
        var body = $(".page-wrapper").last();

        console.log(navbar);

        openBtn.on("click", function() {
            if (!navbar.hasClass("slideInn")) {
                navbar.addClass("slideInn");
                body.addClass("body-overlay");
            }
            return false;
        })

        closeBtn.on("click", function() {
            if (navbar.hasClass("slideInn")) {
                navbar.removeClass("slideInn");
            }
            body.removeClass("body-overlay");
            return false;
        })
    }

    render() {

        return (

        <div class="page-wrapper">
                <proffer-header ngo={this.ngo}></proffer-header>

            { /** start page-title  */ }
            <section class="page-title" style={{ 'background': 'url(/assets/charity/images/projects-001x1024.jpg) center center/cover no-repeat local', 'background-color': 'rgba(0, 0, 0, 0.5)'}}>
                <div class="page-title-container">
                    <div class="page-title-wrapper">
                        <div class="container">
                            <div class="row">
                                <div class="col col-xs-12">
                                    <h2> Projects </h2>
                                    <ol class="breadcrumb">
                                        <li> <a> <ion-router-link href='/' color='light'> Home </ion-router-link> </a> </li>
                                        <li> Projects </li>
                                    </ol>
                                </div>
                            </div> { /** end row  */ }
                        </div> { /** end container  */ }
                    </div>
                </div>
            </section>
            { /** end page-title  */ }


            { this.ngo.projects.length > 0 ?
            <section class="shop-pg-section section-padding">
                <div class="container">
                    <div class="row">
                        <div class="col col-xs-12">
                            <div class="shop-grids">
                                { this.ngo.projects.map(p => (
                                <div class="grid">
                                    <div class="img-cart">
                                        <div class="img-holder">
                                            <img src={ p.photo.url } />
                                        </div>
                                        <div class="cart-details">
                                            <ul>
                                                <li><a href={`/projects/${p.slug}`} class="theme-btn-s8"> View Project </a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="details">
                                        <h4><a href={`/projects/${p.slug}`}> { p.name } </a></h4>
                                        { /*
                                        <del>$25.00</del>
                                        <span class="price">$22.00</span>
                                           */ }
                                    </div>
                                </div>
                                )) }
                            </div>

                        </div>
                    </div>
                </div>
            </section>: null }

            <proffer-footer ngo={this.ngo}></proffer-footer>
        </div>

        );

    }

}
