import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'proffer-footer',
    styleUrl                    :   'footer.css',
})
export class ProfferFooter {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (
            <footer class="site-footer">
                <div class="upper-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col col-lg-3 col-md-3 col-sm-6">
                                <div class="widget about-widget">
                                    <div class="widget-title">
                                        <h3>
                                            <span class="hidden">About us</span>
                                            <img src={ this.ngo.logo.url } />
                                        </h3>
                                    </div>
                                    <div class="social-icons">
                                        <ul>

                                            { this.ngo.reachOut.facebook.length !== 0 ?
                                                <li><a href={ this.ngo.reachOut.facebook } target='_blank' ><i class="ti-facebook"></i></a></li>
                                            : null }

                                            { this.ngo.reachOut.twitter.length !== 0 ?
                                                <li><a href={ this.ngo.reachOut.twitter } target='_blank' ><i class="ti-twitter"></i></a></li>
                                            : null }

                                            { this.ngo.reachOut.instagram.length !== 0 ?
                                                <li><a href={ this.ngo.reachOut.instagram } target='_blank' ><i class="ti-instagram"></i></a></li>
                                            : null }

                                            { this.ngo.reachOut.linkedin.length !== 0 ?
                                                <li><a href={ this.ngo.reachOut.linkedin } target='_blank' ><i class="ti-linkedin"></i></a></li>
                                            : null }

                                            { this.ngo.reachOut.youtube.length !== 0 ?
                                                <li><a href={ this.ngo.reachOut.youtube } target='_blank' ><i class="ti-youtube"></i></a></li>
                                            : null }

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col col-lg-3 col-md-3 col-sm-6">
                                <div class="widget contact-widget service-link-widget">
                                    <div class="widget-title">
                                        <h3>Address Location</h3>
                                    </div>
                                    <ul>
                                        <li> { this.ngo.address } </li>
                                        <li><span>Phone:</span> { this.ngo.reachOut.phone1 }</li>
                                        <li><span>Email:</span> { this.ngo.reachOut.email } </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col col-lg-3 col-md-3 col-sm-6">
                                <div class="widget link-widget">
                                    <div class="widget-title">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Our services</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Meet team</a></li>
                                    </ul>
                                    <ul>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col col-lg-3 col-md-3 col-sm-6">
                                <div class="widget newsletter-widget">
                                    <div class="widget-title">
                                        <h3> Join us </h3>
                                    </div>
                                    <p>You will be notified when somthing new will be appear.</p>
                                    { /** 
                                    <form>
                                        <div class="input-1">
                                            <input type="email" class="form-control" placeholder="Email Address *" required />
                                        </div>
                                        <div class="submit clearfix">
                                            <button type="submit"><i class="fi flaticon-paper-plane"></i></button>
                                        </div>
                                    </form>
                                       */ }
                                </div>
                            </div>
                        </div>
                    </div> { /**  end container  */ } 
                </div>
                <div class="lower-footer">
                    <div class="container">
                        <div class="row">
                            <div class="separator"></div>
                            <div class="col col-xs-12">
                                <p class="copyright">Copyright &copy; 2020 Proffer. All rights reserved</p>
                                <div class="extra-link">
                                    <ul>
                                        <li>Powered by <a href="https://thegrassroots.app/" style={{ 'text-decoration': 'underline' }}>Grassroots</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}
