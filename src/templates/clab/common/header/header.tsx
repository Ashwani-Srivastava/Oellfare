import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'clab-header',
    styleUrl                    :   'header.css',
})
export class ClabHeader {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (
            <header class="app-header">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            { /**<div class="branding-wrap"> */ }
                            { /**brand start */ }
                            <div class="navbar-brand float-left">
                                <a class="" href="index.html">
                                    <img class="logo-light" src="/assets/clab/img/logo.png" srcset="/assets/clab/img/logo@2x.png 2x" alt="CLab" />
                                    <img class="logo-dark" src="/assets/clab/img/logo-dark.png" srcset="/assets/clab/img/logo-dark@2x.png 2x" alt="CLab" />
                                </a>
                            </div>
                            { /**brand end */ }
                            { /**start responsive nav toggle button */ }
                            <div class="nav-btn hamburger hamburger--slider js-hamburger ">
                                <div class="hamburger-box">
                                    <div class="hamburger-inner"></div>
                                </div>
                            </div>
                            { /**end responsive nav toggle button */ }
                            { /**</div> */ }

                            { /**top mega menu start */ }
                            <nav id="vl-menu">
                                { /**extra links start */ }
                                <div class="float-right nav-extra-link">
                                    <a href="https://themeforest.net/item/clab-multipurpose-html5-template/23489597?ref=vectorlab" class="btn btn-sm btn-pill btn-theme mt-3">Buy Now</a>
                                </div>
                                { /**extra links end */ }
                                { /**start nav */ }
                                <ul class="vlmenu light-sub-menu slide-effect float-right">
                                    <li><a href="#">Home <i class="fa fa-angle-down"></i></a>
                                        { /**mega menu start */ }
                                        <div class="mega-menu half-nav">
                                            <div class="col3">
                                                <h3>Demos</h3>
                                                <ol>
                                                    <li><a href="home-01.html">Landing One</a></li>
                                                    <li><a href="home-02.html">Landing Two</a></li>
                                                    <li><a href="home-03.html">Landing Three</a></li>
                                                    <li><a href="home-04.html">Landing Four</a></li>
                                                    <li><a href="home-05.html">Landing Five</a></li>
                                                    <li><a href="home-agency.html">Agency</a></li>
                                                    <li><a href="home-agency2.html">Agency Two</a></li>
                                                </ol>
                                            </div>
                                            <div class="col3">
                                                <h3> &nbsp;</h3>
                                                <ol>
                                                    <li><a href="home-business.html">Business</a></li>
                                                    <li><a href="home-charity.html">Charity</a></li>
                                                    <li><a href="home-corporate.html">Corporate</a></li>
                                                    <li><a href="home-creative.html">Creative</a></li>
                                                    <li><a href="home-gym.html">Fitness</a></li>
                                                    <li><a href="home-insurance.html">Insurance</a></li>
                                                    <li><a href="home-job.html">Job</a></li>
                                                </ol>
                                            </div>
                                            <div class="col3">
                                                <h3> &nbsp;</h3>
                                                <ol>
                                                    <li><a href="home-listing.html">Listing</a></li>
                                                    <li><a href="home-portfolio.html">Portfolio</a></li>
                                                    <li><a href="home-product.html">Products</a></li>
                                                    <li><a href="home-startup.html">Startup</a></li>
                                                    <li><a href="home-travel.html">Travel</a></li>
                                                    <li><a href="home-blog.html">Blog Article</a></li>
                                                    <li></li>
                                                </ol>
                                                <a href="page-landing.html" class="btn btn-sm btn-theme ml-3 mt-2">View All Demos</a>
                                            </div>
                                        </div>
                                        { /**mega menu end */ }
                                    </li>
                                    <li><a href="#">Pages <i class="fa fa-angle-down"></i></a>
                                        { /**start level 2 */ }
                                        <ul>
                                            <li>
                                                <a href="#"> Inner Pages </a>
                                                { /**start level 3 */ }
                                                <ul>
                                                    <li><a href="page-about-us.html">About Us</a> </li>
                                                    <li><a href="page-contact.html">Contact Us</a> </li>
                                                    <li><a href="page-services.html">Services</a> </li>
                                                    <li><a href="page-team.html">Our Team</a> </li>
                                                    <li><a href="page-case-study.html">Case Study</a> </li>
                                                    <li><a href="page-pricing-table.html">Pricing Table</a> </li>
                                                </ul>
                                            </li>

                                            <li><a href="#">Utility Pages </a>
                                                { /**start level 3 */ }
                                                <ul>
                                                    <li><a href="utility-coming-soon.html">Coming Soon</a></li>
                                                    <li><a href="utility-login.html">Login Page</a></li>
                                                    <li><a href="utility-maintenance.html">Maintenance</a></li>
                                                    <li><a href="utility-404.html">404 Error</a></li>
                                                    <li><a href="utility-500.html">500 Error</a></li>
                                                    <li><a href="utility-search-result.html">Search Result</a></li>
                                                </ul>
                                                { /**end level 3 */ }
                                            </li>
                                        </ul>
                                        { /**end level 2 */ }
                                    </li>
                                    <li><a href="#">Blog <i class="fa fa-angle-down"></i></a>
                                        { /**start level 2 */ }
                                        <ul>
                                            <li><a href="#">Blog Layouts</a>
                                                { /**start level 3 */ }
                                                <ul>
                                                    <li><a href="blog-standard.html">Blog Standard</a></li>
                                                    <li><a href="blog-standard-left.html">Blog Standard Left</a></li>
                                                    <li><a href="blog-standard-right.html">Blog Standard Right</a></li>
                                                    <li><a href="blog-list.html">Blog List</a></li>
                                                    <li><a href="blog-cards.html">Blog Cards</a></li>
                                                    <li><a href="blog-cards-masonry.html">Blog Cards Masonry</a></li>
                                                </ul>
                                                { /**end level 3 */ }
                                            </li>
                                            <li><a href="#">Single Post </a>
                                                { /**start level 3 */ }
                                                <ul>
                                                    <li><a href="blog-single.html">Single Post Standard</a></li>
                                                    <li><a href="blog-single-audio.html">Single Post Audio</a></li>
                                                    <li><a href="blog-single-video.html">Single Post Video</a></li>
                                                    <li><a href="blog-single-gallery.html">Single Post Gallery</a></li>
                                                </ul>
                                                { /**end level 3 */ }
                                            </li>
                                        </ul>
                                        { /**end level 2 */ }
                                    </li>
                                    <li><a href="#">Components <i class="fa fa-angle-down"></i></a>
                                        { /**mega menu start */ }
                                        <div class="mega-menu full-nav  ">
                                            <div class="col5">
                                                { /**<h3>Components</h3> */ }
                                                <ol>
                                                    <li><a href="component-accordions.html">Accordions</a></li>
                                                    <li><a href="component-alert.html">Alerts</a></li>
                                                    <li><a href="component-blurb.html">Blurbs</a></li>
                                                    <li><a href="component-buttons.html">Buttons</a></li>
                                                    <li><a href="component-call-to-action.html">Call to Actions</a></li>
                                                    <li><a href="component-card.html">Cards</a></li>
                                                    <li><a href="component-carousel.html">Carousels</a></li>
                                                    <li><a href="component-clients.html">Clients</a></li>
                                                </ol>
                                            </div>
                                            <div class="col5">
                                                { /**<h3> &nbsp;</h3> */ }
                                                <ol>
                                                    <li><a href="component-countdown.html">Countdowns</a></li>
                                                    <li><a href="component-footer.html">Footers</a></li>
                                                    <li><a href="component-form.html">Forms</a></li>
                                                    <li><a href="component-fun-factor.html">Fun Factors</a></li>
                                                    <li><a href="component-gradient-background.html">Gradient Background</a></li>
                                                    <li><a href="component-grid-even.html">Grid Even</a></li>
                                                    <li><a href="component-grid-masonry.html">Grid Masonry</a></li>
                                                    <li><a href="component-hero-header.html">Hero Headers</a></li>
                                                </ol>
                                            </div>

                                            <div class="col5">
                                                { /**<h3>Extra Pages</h3> */ }
                                                <ol>
                                                    <li><a href="component-icon-box.html">Icon Box</a></li>
                                                    <li><a href="component-image-background.html">Image Background</a></li>
                                                    <li><a href="component-image-block.html">Image Blocks</a></li>
                                                    <li><a href="component-list.html">Lists</a></li>
                                                    <li><a href="component-list-group.html">List Groups</a></li>
                                                    <li><a href="component-modal.html">Modals</a></li>
                                                    <li><a href="component-parallax.html">Parallax</a></li>
                                                    <li><a href="component-pricing-table.html">Pricing Tables</a></li>
                                                </ol>
                                            </div>
                                            <div class="col5">
                                                { /**<h3>Layouts</h3> */ }
                                                <ol>
                                                    <li><a href="component-progress-bar.html">Progress Bars</a></li>
                                                    <li><a href="component-slider.html">Sliders</a></li>
                                                    <li><a href="component-steps.html">Steps</a></li>
                                                    <li><a href="component-subscription.html">Subscriptions</a></li>
                                                    <li><a href="component-table.html">Tables</a></li>
                                                    <li><a href="component-tabs.html">Tabs</a></li>
                                                    <li><a href="component-team.html">Teams</a></li>
                                                    <li><a href="component-testimonial.html">Testimonials</a></li>
                                                </ol>
                                            </div>
                                            <div class="col5">
                                                { /**<h3>Icons</h3> */ }
                                                <ol>
                                                    <li><a href="component-twitter.html">Twitter Feed <span class="badge badge-pill badge-success text-white d-inline-block ml-2 py-1 px-2">live</span></a></li>
                                                    <li><a href="component-typed-text.html">Typed Text</a></li>
                                                    <li><a href="component-typography.html">Typography</a></li>
                                                    <li><a href="component-video.html">Video</a></li>
                                                </ol>
                                            </div>

                                        </div>
                                        { /**mega menu end */ }
                                    </li>
                                    <li class="menu-right"><a href="#">Portfolio <i class="fa fa-angle-down"></i></a>
                                        { /**start level 2 */ }
                                        <ul>
                                            <li><a href="#">Grid</a>
                                                { /**start level 3 */ }
                                                <ul>
                                                    <li><a href="portfolio-grid-2.html">Two Column</a></li>
                                                    <li><a href="portfolio-grid-3.html">Three Column</a></li>
                                                    <li><a href="portfolio-grid-4.html">Four Column</a></li>
                                                </ul>
                                                { /**end level 3 */ }
                                            </li>
                                            <li><a href="#">Grid Full Width</a>
                                                { /**start level 3 */ }
                                                <ul>
                                                    <li><a href="portfolio-grid-2-fullwidth.html">Two Column</a></li>
                                                    <li><a href="portfolio-grid-3-fullwidth.html">Three Column</a></li>
                                                    <li><a href="portfolio-grid-4-fullwidth.html">Four Column</a></li>
                                                </ul>
                                                { /**end level 3 */ }
                                            </li>
                                            <li><a href="#">Grid Title</a>
                                                { /**start level 3 */ }
                                                <ul>
                                                    <li><a href="portfolio-grid-title-2.html">Two Column</a></li>
                                                    <li><a href="portfolio-grid-title-3.html">Three Column</a></li>
                                                    <li><a href="portfolio-grid-title-4.html">Four Column</a></li>
                                                </ul>
                                                { /**end level 3 */ }
                                            </li>
                                            <li><a href="#">Masonry</a>
                                                { /**start level 3 */ }
                                                <ul>
                                                    <li><a href="portfolio-masonry-2.html">Two Column</a></li>
                                                    <li><a href="portfolio-masonry-3.html">Three Column</a></li>
                                                    <li><a href="portfolio-masonry-4.html">Four Column</a></li>
                                                </ul>
                                                { /**end level 3 */ }
                                            </li>
                                            <li><a href="#">Masonry Full Width</a>
                                                { /**start level 3 */ }
                                                <ul>
                                                    <li><a href="portfolio-masonry-2-fullwidth.html">Two Column</a></li>
                                                    <li><a href="portfolio-masonry-3-fullwidth.html">Three Column</a></li>
                                                    <li><a href="portfolio-masonry-4-fullwidth.html">Four Column</a></li>
                                                </ul>
                                                { /**end level 3 */ }
                                            </li>
                                            <li><a href="#">Masonry Title</a>
                                                { /**start level 3 */ }
                                                <ul>
                                                    <li><a href="portfolio-masonry-title-2.html">Two Column</a></li>
                                                    <li><a href="portfolio-masonry-title-3.html">Three Column</a></li>
                                                    <li><a href="portfolio-masonry-title-4.html">Four Column</a></li>
                                                </ul>
                                                { /**end level 3 */ }
                                            </li>

                                            <li><a href="portfolio-single.html">Single Project</a></li>

                                        </ul>
                                        { /**end level 2 */ }
                                    </li>
                                    <li><a href="#"> Shop <i class="fa fa-angle-down"></i></a>
                                        { /**start level 2 */ }
                                        <ul>
                                            <li><a href="shop-2.html">Shop Grid 2 </a></li>
                                            <li><a href="shop-3.html">Shop Grid 3 </a></li>
                                            <li><a href="shop-4.html">Shop Grid 4 </a></li>
                                            <li><a href="shop-single.html">Shop Single </a></li>
                                            <li><a href="shop-cart.html">Cart Page</a></li>
                                            <li><a href="shop-checkout.html">Checkout Page</a></li>
                                        </ul>
                                        { /**end level 2 */ }
                                    </li>
                                    <li><a href="#"> Support <i class="fa fa-angle-down"></i></a>
                                        { /**start level 2 */ }
                                        <ul>
                                            <li>
                                                <a href="mailto:dkmosa@gmail.com?subject=Clab-Support" class="d-flex">
                                                    <i class="vl-support font-size-20"></i>
                                                    <div class="font-weight-700">Get Support</div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="http://thevectorlab.net/clab-doc" target="_blank" class="d-flex">
                                                    <i class="vl-file font-size-20"></i>
                                                    <div class="font-weight-700">Online Documentation</div>
                                                </a>
                                            </li>
                                        </ul>
                                        { /**end level 2 */ }
                                    </li>
                                </ul>
                                { /**end nav */ }

                            </nav>
                            { /**top mega menu end */ }
                        </div>
                    </div>
                </div>
</header>
        );
    }

}
