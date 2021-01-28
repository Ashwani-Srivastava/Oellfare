import { Component, h, Prop }   from    '@stencil/core';
import * as ngo                 from    '../../../assets/ngo.json';

@Component({
    tag: 'charity-contact',
    styleUrl: 'contact.css',
})
export class CharityContact {

    @Prop() ngo                 :   any                 =   ngo

    constructor () {
        console.log('Contact :: Constructor');
    }

    async componentWillLoad() {
        console.log('Contact :: Component will load');
    }

    async componentDidLoad() {
        console.log('Contact :: Component did load');
    }

    render() {

        return (

        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <charity-header ngo={this.ngo}></charity-header>

                <div class="fh5co-hero">
                    <div class="fh5co-overlay"></div>
                    <div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style={{ 'background-image': 'url(images/cover_bg_2.jpg)' }} >
                        <div class="desc animate-box">
                            <h2><strong>Contact</strong> Us</h2>
                        </div>
                    </div>

                </div>
                
                <div id="fh5co-contact" class="animate-box">
                    <div class="container">
                        <form action="#">
                            <div class="row">
                                <div class="col-md-6">
                                    <h3 class="section-title">Our Address</h3>
                                    <ul class="contact-info">
                                        <li><i class="icon-location-pin"></i> { this.ngo.address } </li>
                                        <li><i class="icon-phone2"></i>+91 { this.ngo.reachOut.phone1 } </li>
                                        <li><i class="icon-mail"></i><a href="#"> { this.ngo.reachOut.email } </a></li>
                                        <li><i class="icon-globe2"></i><a href="#"> { this.ngo.reachOut.website } </a></li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <input type="text" class="form-control" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea name="" class="form-control" id="" cols={30} rows={7} placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="submit" value="Send Message" class="btn btn-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div id="map" class="fh5co-map"></div>





                <charity-footer ngo={this.ngo}></charity-footer>
            </div>
        </div>

    );

    }

}
