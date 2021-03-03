import { Component, h, Prop } from '@stencil/core';
import { Ngo                }   from    'ngo/ngo.model';

@Component({
    tag                         :   'huruma-sidebar-model',
    styleUrl                    :   'sidebar-model.css',
})
export class HurumaSidebarModel {

    @Prop() ngo                 :   Ngo;

    render() {

        return [

        <div class="sidebar-modal">
            <div class="sidebar-modal-inner">
                <div class="sidebar-about-area">
                    <div class="title">
                        <h2>About Us</h2>
                        <p> { this.ngo.description } </p>
                    </div>
                </div>

                <div class="sidebar-instagram-feed">
                    <h2>Instagram</h2>
                    <ul>
                        { this.ngo.photos.map(ph => (
                        <li>
							<a href={this.ngo.reachOut.instagram}>
								<img src={ ph } alt="image" style={{ 'height': '48xpx', 'object-fit': 'cover' }} />
                            </a>
                        </li>
                        )) }
                    </ul>
                </div>

                <div class="sidebar-contact-area">
                    <div class="contact-info">
                        <div class="contact-info-content">
                            <h2>
                                <a href="tel:+0881306298615">
                                    { this.ngo.reachOut.phone1 }
                                </a>
                                <span>OR</span>
                                <a href="mailto:huruma@gmail.com">
                                    { this.ngo.reachOut.email }
                                </a>
                            </h2>
    
                            <ul class="social">
                                <li>
                                    <a href={this.ngo.reachOut.facebook} target="_blank">
                                        <i class="flaticon-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.ngo.reachOut.twitter} target="_blank">
                                        <i class="flaticon-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.ngo.reachOut.instagram} target="_blank">
                                        <i class="flaticon-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href={this.ngo.reachOut.linkedin} target="_blank">
                                        <i class="flaticon-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" target="_blank">
                                        <i class="flaticon-pinterest"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <span class="close-btn sidebar-modal-close-btn">
                    <i class="flaticon-close"></i>
                </span>
            </div>
        </div>
        ];
    }

}
