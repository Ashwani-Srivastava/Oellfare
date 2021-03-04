import { Component, h, Prop } from '@stencil/core';
import { Ngo                }   from    'ngo/ngo.model';

@Component({
    tag                         :   'huruma-footer',
    styleUrl                    :   'footer.css',
})
export class HurumaFooter {

    @Prop() ngo                 :   Ngo;

    render() {
        return [
        <footer class="footer-section">
            <div class="copyright-area">
                <div class="container">
                    <div class="copyright-area-content">
                        <div class="row align-items-center">
                            <div class="col-lg-4">
                                <div class="copyright-logo">
                                    <img src={ this.ngo.logo.url } alt="image" style={{ 'width': '120px' }} />
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <p>

									Built with 
									&nbsp; <i style={{ 'color': 'red', 'font-size': '1.2em' }} class="bx bxs-heart"></i> &nbsp;
									by <a href="https://thegrassroots.app/">Grassroots</a>

                                </p>
                            </div>

                            <div class="col-lg-4 col-md-6">
                                <ul>
                                    <li>
                                        <a href="">Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a href="">Privacy Policy</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>,

        <div class="go-top">
            <i class="bx bx-chevron-up"></i>
            <i class="bx bx-chevron-up"></i>
        </div>
        ];
    }

}
