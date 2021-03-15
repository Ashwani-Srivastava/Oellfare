import { Component, h, Prop } from '@stencil/core';

@Component({
    tag                         :   'oellfare-footer',
    styleUrl                    :   'footer.css',
})
export class OellfareFooter {

    @Prop() ngo                 :   any                 =   {};

    render() {
        return (
        <footer id="footer" class="footer wow fadeInUp">
            <div class="footer-above">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer_widget">
                                <div class="widget-title">
                                    <h4>Useful Links</h4>
                                </div>
                                <div class="footer_nav">
                                    <ul>
                                        <li class="menu-item"><a href="#">Home</a></li>
                                        <li class="menu-item"><a href="#">About Us</a></li>
                                        <li class="menu-item"><a href="#">Campaign</a></li>
                                        <li class="menu-item"><a href="#">Causes</a></li>
                                        <li class="menu-item"><a href="#">Contact Us</a></li>
                                        <li class="menu-item"><a href="#">Donation</a></li>
                                        <li class="menu-item"><a href="#">Volunteers</a></li>
                                        <li class="menu-item"><a href="#">Charity</a></li>
                                        <li class="menu-item"><a href="#">Blog</a></li>
                                        <li class="menu-item"><a href="#">Services</a></li>
                                        <li class="menu-item"><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer_widget">
                                <div class="widget-title">
                                    <h4>Instagram</h4>
                                </div>
                                <div class="instagram">
                                    <ul class="instaFeed" id="instafeed"></ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer_widget">
                                <div class="widget-title">
                                    <h4>Recent Causes</h4>
                                </div>
                                <div class="footer_recent_cause">
                                    <ul>
                                        <li class="menu-item"><a href="#"><i class="ion-md-arrow-forward"></i> School for African children</a></li>
                                        <li class="menu-item"><a href="#"><i class="ion-md-arrow-forward"></i> Hospital for Siryan children</a></li>
                                        <li class="menu-item"><a href="#"><i class="ion-md-arrow-forward"></i> Food & Nutrition  program</a></li>
                                        <li class="menu-item"><a href="#"><i class="ion-md-arrow-forward"></i> Arrangement for drinking water</a></li>
                                        <li class="menu-item"><a href="#"><i class="ion-md-arrow-forward"></i> Home for homeless Children</a></li>
                                        <li class="menu-item"><a href="#"><i class="ion-md-arrow-forward"></i> Regular health care</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-sm-6">
                            <div class="footer_widget">
                                <div class="widget-title">
                                    <h4>Our Address</h4>
                                </div>
                                <div class="address_content">
                                    <ul>
                                        <li><img src="/assets/oellfare/images/phone2.png" alt="icon" /><span>Call Us</span> {this.ngo.reachOut.phone2}</li>
                                        <li><img src="/assets/oellfare/images/clock.png" alt="icon" /><span>Working Hour</span> 9.00am - 6.00pm</li>
                                        <li><img src="/assets/oellfare/images/mail.png" alt="icon" /><span>Send Mail</span> {this.ngo.reachOut.email}</li>
                                    </ul>
                                </div>
                                <div class="footer_social">
                                    <ul>
                                        <li class="facebook">
                                            <a href={this.ngo.reachOut.facebook}><i class="ion-logo-facebook"></i></a>
                                        </li>
                                        <li class="twitter">
                                            <a href={this.ngo.reachOut.twitter}><i class="ion-logo-twitter"></i></a>
                                        </li>
                                        <li class="skype">
                                            <a href={this.ngo.reachOut.skype}><i class="ion-logo-skype"></i></a>
                                        </li>
                                        <li class="instagram">
                                            <a href={this.ngo.reachOut.instagram}><i class="ion-logo-instagram"></i></a>
                                        </li>
                                        <li class="pinterest">
                                            <a href={this.ngo.reachOut.pinterest}><i class="ion-logo-pinterest"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="container">
                    <div class="footer_bottom_inner">
                        <div class="logo-footer">
                            <a href="index.html">
                                <img src={this.ngo.logo.url} class="logo-manage" alt="Oellfare" />
                            </a>
                        </div>
                        {/* <div class="copyright">
                            <p> &copy; All rights reserved to <a href="#">WP ThemeBooster</a></p>
                        </div> */}
                        <div class="terms_nav">
                            <ul>
                                <li class="menu-item"><a href="#">Terms</a></li>
                                <li class="menu-item"><a href="#">Privacy</a></li>
                                <li class="menu-item"><a href="#">Faq</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    }

}
